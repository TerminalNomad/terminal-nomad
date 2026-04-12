
import React from 'react';
import { ArrowLeft, Camera, ExternalLink, Video } from 'lucide-react';

interface HandcamPageProps {
  onBack: () => void;
}

export const HandcamPage = ({ onBack }: HandcamPageProps) => {
  return React.createElement('div', { className: "w-full max-w-4xl mx-auto px-6 py-8 animate-fade-in-up" },
    /* Navigation */
    React.createElement('button', { 
      onClick: onBack, 
      className: "group flex items-center gap-2 text-slate-400 hover:text-brand-accent transition-colors mb-8 font-mono text-sm uppercase tracking-wider" 
    },
      React.createElement(ArrowLeft, { size: 16, className: "group-hover:-translate-x-1 transition-transform" }),
      "Back to Terminal"
    ),

    /* Header */
    React.createElement('div', { className: "text-center mb-12" },
      React.createElement('div', { className: "inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-accent/10 text-brand-accent mb-6 border border-brand-accent/20 shadow-xl shadow-brand-accent/5" },
        React.createElement(Camera, { size: 40 })
      ),
      React.createElement('h1', { className: "text-4xl md:text-5xl font-black text-white font-mono mb-4" },
        "HANDCAM ",
        React.createElement('span', { className: "text-brand-accent" }, "VIDEO")
      ),
      React.createElement('p', { className: "text-slate-400 text-lg max-w-2xl mx-auto" },
        "Relive your jump with high-definition footage captured right from the wrist."
      )
    ),

    /* Content Section */
    React.createElement('div', { className: "bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl mb-12" },
      React.createElement('div', { className: "p-8 md:p-12" },
        React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center" },
          React.createElement('div', { className: "space-y-6" },
            React.createElement('div', { className: "flex items-start gap-4" },
              React.createElement('div', { className: "mt-1 bg-brand-accent/20 p-2 rounded-lg text-brand-accent" },
                React.createElement(Video, { size: 20 })
              ),
              React.createElement('div', null,
                React.createElement('h3', { className: "text-white font-bold text-xl mb-2" }, "High Definition Footage"),
                React.createElement('p', { className: "text-slate-400" }, "Crystal clear 4K or 1080p video of your entire experience, from the plane exit to the landing.")
              )
            ),
            
            React.createElement('div', { className: "flex items-start gap-4" },
              React.createElement('div', { className: "mt-1 bg-brand-accent/20 p-2 rounded-lg text-brand-accent" },
                React.createElement(ExternalLink, { size: 20 })
              ),
              React.createElement('div', null,
                React.createElement('h3', { className: "text-white font-bold text-xl mb-2" }, "Easy Digital Delivery"),
                React.createElement('p', { className: "text-slate-400" }, "Receive all of your raw files from the jump directly via email or a secure download link shortly after your landing.")
              )
            ),

            React.createElement('div', { className: "pt-4" },
              React.createElement('p', { className: "text-slate-300 italic font-mono text-sm border-l-2 border-brand-accent pl-4" },
                "\"The best way to show your friends and family what it's really like to fly.\""
              )
            )
          ),

          React.createElement('div', { className: "bg-brand-dark/50 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center" },
            React.createElement('h4', { className: "text-slate-500 font-mono text-xs uppercase tracking-widest mb-4" }, "Ready to order?"),
            React.createElement('p', { className: "text-white text-2xl font-bold mb-6" }, "Secure Checkout via Square"),
            
            React.createElement('div', { className: "w-full mb-6 p-4 bg-brand-accent/5 border border-brand-accent/20 rounded-xl text-left" },
              React.createElement('p', { className: "text-brand-accent text-xs font-mono uppercase tracking-wider mb-2 font-bold" }, "Important Note:"),
              React.createElement('p', { className: "text-slate-300 text-sm leading-relaxed" },
                "Please ensure you enter the ",
                React.createElement('span', { className: "text-white font-bold underline" }, "correct passenger's name and email address"),
                " when filling out the Square payment form so I can match the footage to your jump."
              )
            ),

            React.createElement('a', { 
              href: "https://square.link/u/k4qQAZoN", 
              target: "_blank", 
              rel: "noopener noreferrer", 
              className: "w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand-accent hover:bg-white text-brand-dark font-bold font-mono uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-accent/20" 
            },
              React.createElement('span', null, "Get My Video"),
              React.createElement(ExternalLink, { size: 18 })
            ),
            
            React.createElement('p', { className: "mt-6 text-slate-500 text-xs" },
              "Clicking the button will open a secure Square payment page in a new tab."
            )
          )
        )
      )
    ),

    /* FAQ / Info */
    React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-3 gap-6" },
      React.createElement('div', { className: "bg-white/5 border border-white/10 p-6 rounded-2xl" },
        React.createElement('h5', { className: "text-white font-bold mb-2 font-mono text-sm uppercase" }, "When will I get it?"),
        React.createElement('p', { className: "text-slate-400 text-sm" }, "Usually same day but may take up to 24 hours.")
      ),
      React.createElement('div', { className: "bg-white/5 border border-white/10 p-6 rounded-2xl" },
        React.createElement('h5', { className: "text-white font-bold mb-2 font-mono text-sm uppercase" }, "What's included?"),
        React.createElement('p', { className: "text-slate-400 text-sm" }, "You will receive all of your raw files from the jump.")
      ),
      React.createElement('div', { className: "bg-white/5 border border-white/10 p-6 rounded-2xl" },
        React.createElement('h5', { className: "text-white font-bold mb-2 font-mono text-sm uppercase" }, "Need help?"),
        React.createElement('p', { className: "text-slate-400 text-sm" }, "Contact me directly at zach@terminalnomad.com for any questions.")
      )
    )
  );
};
