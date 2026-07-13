# Name Change Tracker

Tracks which companies/organizations still address **Zack Atlas Nomad** by his
**old name** (Zachery / Zach Tylar Krietenstein) versus his **new name**
(Zack Atlas Nomad), based on scanning received email in Gmail.

- **Old name:** Zachery (Zach) Tylar Krietenstein
- **New name:** Zack Atlas Nomad

## Where the data lives

The living list is a **Notion database**, auto-updated twice per day:

- **Database:** "Name Change Tracker — Old vs New Name by Organization"
  https://app.notion.com/p/98ab99c1eed74b9bb69ca95c651bae70
- **Views (the two "tabs"):**
  - 🔴 **Needs Changed** — organizations still using the old name
  - 🟢 **Completed** — organizations already using the new name
- Notion IDs (for automation):
  - `database_id`: `98ab99c1eed74b9bb69ca95c651bae70`
  - `data_source_id` (collection): `f6880709-9dd5-457f-abd2-ce6bbb0625e3`

`snapshot.csv` in this folder is a point-in-time export of the Notion data,
committed for version history / as a fallback.

## Why Notion (not a Google Sheet)

The available Google Drive tools can *create* a Sheet but cannot *edit* one in
place, so a same-link, auto-updating Google Sheet is not reliable. Notion
supports true in-place updates on a stable link, so the twice-daily job can keep
one document current instead of spawning new copies.

## Scope

- Covers **all** senders that address the recipient by a personal name, across
  every alias that lands in this mailbox: `zack@nomadiczack.com`,
  `actalive@gmail.com`, `zach.kriet@gmail.com`, plus business addresses like
  `zach@terminalnomad.com`.
- Senders that show **no personal name** (pure marketing, code-only emails,
  order-number-only receipts) are **not** tracked — there is no name to be wrong.
- Business identity ("Terminal Nomad LLC") is legitimate and is **not** flagged;
  only the *personal* name is evaluated.

## Classification rules

A sender is judged by the **most recent** email that shows a personal name.

| Signal in the name shown | Verdict |
|---|---|
| Surname **Krietenstein**, or first name **Zachery**, or **Zach** (old-spelling nickname), or **Tylar** | **Old → Needs Changed** |
| Surname **Nomad** and first name **Zack** (e.g. "Zack Nomad", "Zack Atlas Nomad") | **New → Completed** |
| Mixed / half-updated (e.g. "ZackKrietenstein" = new first + old surname; "Zach Nomad" = old-spelling first + new surname) | **Partial → Needs Changed** |
| No personal name shown | Not tracked (N/A) |

Key discriminators:
- Spelling: **Zach** = old, **Zack** = new.
- Surname: **Krietenstein** = old, **Nomad** = new.
- A single org can differ across its own systems (e.g. USPS *tracking* shows
  "Zack Nomad" while USPS *Informed Delivery* still shows "ZACHERY") — these are
  tracked as separate rows.

## Automation

A scheduled job runs **twice per day (00:00 and 12:00 UTC ≈ 8pm / 8am ET)** in a
fresh Claude Code session. See `runbook.md` for the exact steps it follows. The
same instructions are embedded in the scheduled trigger's prompt so the job is
self-contained even though this branch may not be checked out in the fresh
session.
