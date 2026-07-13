# Runbook — twice-daily name-change scan

This is what the scheduled job does on each firing. It is idempotent: rows are
keyed by **Organization**, so re-scanning overlapping windows is safe.

## Steps

1. **Load tools** (via ToolSearch if deferred): Gmail `search_threads` /
   `get_message`; Notion `notion-query-data-sources`, `notion-create-pages`,
   `notion-update-page`.

2. **Scan new mail.** Run Gmail searches over an overlapping window
   (`newer_than:2d`) so nothing is missed between runs:
   - `newer_than:2d (Krietenstein OR Zachery OR "Zach" OR Tylar)`
   - `newer_than:2d (Nomad OR "Zack")`
   - `newer_than:2d in:inbox`
   Read snippets/subjects/`toRecipients`; fetch a body with `get_message` only
   when the name isn't visible in the snippet and the sender is worth resolving.
   Large bodies exceed the token cap — grep the saved file instead of reading it.

3. **Classify** each sending organization (by sender domain) using the rules in
   `README.md`. Skip senders that show no personal name.

4. **Reconcile with Notion.** Query the existing rows:
   `SELECT "Organization","Status","Name Shown","date:Last Email:start"
    FROM "collection://f6880709-9dd5-457f-abd2-ce6bbb0625e3"`
   For each org found in the scan:
   - **Existing row:** if the newest email is newer than the stored `Last Email`,
     update `Last Email`, `Name Shown`, `Name Type`, `Notes`, and — if the name
     flipped — `Status` (e.g. Old→New moves it from Needs Changed to Completed).
     Use `notion-update-page` with `command: update_properties`. Dates use the
     expanded keys `date:Last Email:start` and `date:Last Email:is_datetime`.
   - **New org:** create a row with `notion-create-pages` (parent
     `data_source_id: f6880709-9dd5-457f-abd2-ce6bbb0625e3`).

5. **Report** briefly: list any orgs that newly appeared or flipped status. If a
   push notification is configured, the run summary is delivered automatically.

## Notes / caveats

- The scan uses the last email that shows a name; an org mid-transition may flip
  back and forth — trust the newest dated evidence.
- If Gmail or Notion connectors are unavailable in the fresh session (headless
  auth), the run should report that rather than silently doing nothing.
- Notion `database_id`: `98ab99c1eed74b9bb69ca95c651bae70`.
