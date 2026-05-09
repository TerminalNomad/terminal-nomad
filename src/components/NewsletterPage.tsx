import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, CheckCircle, Send } from 'lucide-react';

export const NewsletterPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    (window as any).ml_webform_success_34198267 = () => {
      const successRow = document.querySelector('.ml-subscribe-form-34198267 .row-success') as HTMLElement;
      const formRow = document.querySelector('.ml-subscribe-form-34198267 .row-form') as HTMLElement;
      if (successRow) successRow.style.display = 'block';
      if (formRow) formRow.style.display = 'none';
    };
    const script = document.createElement('script');
    script.src = 'https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
      delete (window as any).ml_webform_success_34198267;
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto px-5 py-8 animate-fade-in-up">
      <button onClick={() => navigate('/')} className="group flex items-center gap-2 text-slate-400 hover:text-brand-accent transition-colors mb-8 font-mono text-sm uppercase tracking-wider">
        <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
        Back to NomadicZack
      </button>
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 text-brand-accent mb-6 border border-brand-accent/20">
          <Mail size={30} aria-hidden="true" />
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white font-mono mb-4">FLIGHT <span className="text-brand-accent">BRIEFING</span></h1>
        <p className="text-slate-400 text-base max-w-md mx-auto leading-relaxed">Behind-the-scenes footage, gear reviews, and travel updates delivered to your inbox. No spam, just altitude.</p>
      </div>
      <div id="mlb2-34198267" className="card p-8 md:p-12 relative overflow-hidden ml-subscribe-form ml-subscribe-form-34198267">
        <div className="ml-form-embedWrapper embedForm">
          <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
            <form className="ml-block-form space-y-5" action="https://assets.mailerlite.com/jsonp/1962273/forms/172813312514328262/subscribe" method="post" target="_blank">
              <div className="ml-form-formContent">
                <div className="ml-form-fieldRow">
                  <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                    <label htmlFor="ml-email" className="block text-slate-400 text-xs font-mono uppercase tracking-wider mb-2">Comms Channel (Email)</label>
                    <input id="ml-email" aria-label="email" aria-required="true" type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors text-sm" name="fields[email]" placeholder="pilot@example.com" autoComplete="email" />
                  </div>
                </div>
              </div>
              <input type="hidden" name="ml-submit" value="1" />
              <input type="hidden" name="anticsrf" value="true" />
              <div className="ml-form-embedSubmit">
                <button type="submit" className="primary w-full flex items-center justify-center gap-2 bg-brand-accent hover:bg-white text-brand-dark font-bold py-4 rounded-xl font-mono uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-brand-accent/20 text-sm">
                  <Send size={16} aria-hidden="true" /> Subscribe
                </button>
                <button disabled type="button" style={{ display: 'none' }} className="loading w-full flex items-center justify-center gap-2 bg-brand-accent/50 text-brand-dark font-bold py-4 rounded-xl font-mono uppercase tracking-widest cursor-wait text-sm">
                  <div className="ml-form-embedSubmitLoad" /> Transmitting…
                </button>
              </div>
            </form>
            <p className="text-xs text-center text-slate-600 mt-5">By subscribing you agree to receive emails. Unsubscribe at any time.</p>
          </div>
          <div className="ml-form-successBody row-success" style={{ display: 'none' }}>
            <div className="ml-form-successContent flex flex-col items-center text-center animate-fade-in-up py-8">
              <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white font-mono mb-2">Welcome Aboard</h3>
              <p className="text-slate-400 mb-8">You've successfully joined the subscriber list.</p>
              <button onClick={() => navigate('/')} className="px-6 py-2.5 rounded-full glass hover:bg-white/10 text-slate-300 hover:text-white transition-colors font-mono text-sm uppercase tracking-wider">Return to Home</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
