import React, { useEffect } from 'react';
import { ArrowLeft, Mail, CheckCircle, Send } from 'lucide-react';

interface NewsletterPageProps {
  onBack: () => void;
}

export const NewsletterPage = ({ onBack }: NewsletterPageProps) => {

  useEffect(() => {
    // 1. Define the success callback globally so the external script can call it
    // Using 'any' type to bypass TypeScript check for window property
    (window as any).ml_webform_success_34198267 = () => {
       const successRow = document.querySelector('.ml-subscribe-form-34198267 .row-success') as HTMLElement;
       const formRow = document.querySelector('.ml-subscribe-form-34198267 .row-form') as HTMLElement;
       if (successRow) successRow.style.display = 'block';
       if (formRow) formRow.style.display = 'none';
    };

    // 2. Load MailerLite Universal Script
    const script = document.createElement('script');
    script.src = "https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
      delete (window as any).ml_webform_success_34198267;
    };
  }, []);

  return (
    <div classname="w-full max-w-2xl mx-auto px-6 py-8 animate-fade-in-up">
      {/* Navigation */}
      <button onclick="{onBack}" classname="group flex items-center gap-2 text-slate-400 hover:text-brand-accent transition-colors mb-8 font-mono text-sm uppercase tracking-wider">
        <arrowleft size="{16}" classname="group-hover:-translate-x-1 transition-transform"/>
        Back to Terminal
      </button>

      {/* Header */}
      <div classname="text-center mb-12">
        <div classname="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 text-brand-accent mb-6 border border-brand-accent/20">
          <mail size="{32}/">
        </div>
        <h1 classname="text-3xl md:text-5xl font-black text-white font-mono mb-4">
          FLIGHT <span classname="text-brand-accent">BRIEFING</span>
        </h1>
        <p classname="text-slate-400 text-lg max-w-lg mx-auto">
          Get behind-the-scenes footage, gear reviews, and travel updates delivered to your inbox. No spam, just altitude.
        </p>
      </div>

      {/* MailerLite Form Container */}
      <div id="mlb2-34198267" classname="bg-slate-900 border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden ml-subscribe-form ml-subscribe-form-34198267">
        
        <div classname="ml-form-embedWrapper embedForm">
            
            {/* Form Content */}
            <div classname="ml-form-embedBody ml-form-embedBodyDefault row-form">
                <form classname="ml-block-form space-y-6" action="https://assets.mailerlite.com/jsonp/1962273/forms/172813312514328262/subscribe" data-code="" method="post" target="_blank">
                    <div classname="ml-form-formContent">
                        <div classname="ml-form-fieldRow">
                            <div classname="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                                <label htmlfor="email" classname="block text-slate-400 text-sm font-mono uppercase tracking-wider mb-2">Comms Channel (Email)</label>
                                <input aria-label="email" aria-required="true" type="email" classname="form-control w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" data-inputmask="" name="fields[email]" placeholder="pilot@example.com" autocomplete="email"/>
                            </div>
                        </div>
                    </div>

                    <input type="hidden" name="ml-submit" value="1"/>
                    <input type="hidden" name="anticsrf" value="true"/>

                    <div classname="ml-form-embedSubmit">
                        <button type="submit" classname="primary w-full flex items-center justify-center gap-2 bg-brand-accent hover:bg-white text-brand-dark font-bold py-4 rounded-xl font-mono uppercase tracking-widest transition-all hover:scale-[1.02] shadow-lg shadow-brand-accent/20">
                             <send size="{18}/">
                             <span>Subscribe</span>
                        </button>
                        
                        <button disabled="" style="{{" display:="" 'none'="" }}="" type="button" classname="loading w-full flex items-center justify-center gap-2 bg-brand-accent/50 text-brand-dark font-bold py-4 rounded-xl font-mono uppercase tracking-widest cursor-wait">
                            <div classname="ml-form-embedSubmitLoad"></div>
                            <span>Transmitting...</span>
                        </button>
                    </div>
                </form>
                <p classname="text-xs text-center text-slate-600 mt-6">
                  By subscribing, you agree to receive email communications. Unsubscribe at any time.
                </p>
            </div>

            {/* Success Message - Toggled by MailerLite Script via Global Callback */}
            <div classname="ml-form-successBody row-success" style="{{" display:="" 'none'="" }}="">
                <div classname="ml-form-successContent flex flex-col items-center text-center animate-fade-in-up">
                    <div classname="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                        <checkcircle size="{32}/">
                    </div>
                    <h3 classname="text-2xl font-bold text-white font-mono mb-2">Welcome Aboard</h3>
                    <p classname="text-slate-400">You have successfully joined the subscriber list.</p>
                    <button onclick="{onBack}" classname="mt-8 px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 text-slate-300 hover:text-white transition-colors font-mono text-sm uppercase tracking-wider">
                        Return to Home
                    </button>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};
