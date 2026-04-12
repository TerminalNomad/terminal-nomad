import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  Youtube, 
  Twitter, 
  Mail, 
  User, 
  Briefcase, 
  MessageSquare, 
  Globe, 
  Terminal,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { SocialButton } from './components/SocialButton';
import { LocationMap } from './components/LocationMap';
import { FeaturedVideo } from './components/FeaturedVideo';
import { AboutPage } from './components/AboutPage';
import { WorkWithMePage } from './components/WorkWithMePage';
import { TestimonialsPage } from './components/TestimonialsPage';
import { NewsletterPage } from './components/NewsletterPage';
import { Popup } from './components/Popup';
import { ProfileHeader } from './components/ProfileHeader';
import { TestimonialCarousel } from './components/TestimonialCarousel';

type View = 'home' | 'about' | 'work' | 'testimonials' | 'newsletter';

function App() {
  const [currentView, setCurrentView] = useState<view>('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'about':
        return <aboutpage onback="{()" ==""> setCurrentView('home')} />;
      case 'work':
        return <workwithmepage onback="{()" ==""> setCurrentView('home')} />;
      case 'testimonials':
        return <testimonialspage onback="{()" ==""> setCurrentView('home')} />;
      case 'newsletter':
        return <newsletterpage onback="{()" ==""> setCurrentView('home')} />;
      default:
        return renderHome();
    }
  };

  const renderHome = () => (
    <div classname="{`w-full" transition-all="" duration-1000="" ${isloaded="" ?="" 'opacity-100="" translate-y-0'="" :="" 'opacity-0="" translate-y-4'}`}="">
      <profileheader location="Raeford, NC" onaboutclick="{()" ==""> setCurrentView('about')}
        onWorkClick={() => setCurrentView('work')}
        onHandcamClick={() => window.open('https://www.skydiveraleigh.com/', '_blank')}
      />

      <div classname="max-w-2xl mx-auto px-6 pb-12">
        {/* Main Grid */}
        <div classname="grid gap-8">
          {/* Primary Actions */}
          <section classname="space-y-4">
            <h2 classname="text-slate-500 font-mono text-[10px] uppercase tracking-[0.4em] ml-1 mb-4 flex items-center gap-2">
              <terminal size="{12}" classname="text-brand-accent"/>
              Main Interface
            </h2>
            <div classname="grid gap-3">
              <socialbutton icon="{User}" label="About The Nomad" href="#" primary="" onclick="{(e)" ==""> { e.preventDefault(); setCurrentView('about'); }}
              />
              <socialbutton icon="{Briefcase}" label="Work With Me" href="#" onclick="{(e)" ==""> { e.preventDefault(); setCurrentView('work'); }}
              />
              <socialbutton icon="{MessageSquare}" label="Flight Logs (Testimonials)" href="#" onclick="{(e)" ==""> { e.preventDefault(); setCurrentView('testimonials'); }}
              />
              <socialbutton icon="{Mail}" label="Join The Briefing" href="#" onclick="{(e)" ==""> { e.preventDefault(); setCurrentView('newsletter'); }}
              />
            </div>
          </section>

          {/* Testimonials Carousel */}
          <testimonialcarousel onreadmore="{()" ==""> setCurrentView('testimonials')} />

          {/* Dynamic Content */}
          <section classname="grid md:grid-cols-2 gap-6">
            <div classname="space-y-4">
              <h2 classname="text-slate-500 font-mono text-[10px] uppercase tracking-[0.4em] ml-1 flex items-center gap-2">
                <globe size="{12}" classname="text-brand-accent"/>
                Deployment
              </h2>
              <locationmap/>
            </div>
            <div classname="space-y-4">
              <h2 classname="text-slate-500 font-mono text-[10px] uppercase tracking-[0.4em] ml-1 flex items-center gap-2">
                <youtube size="{12}" classname="text-red-500"/>
                Visuals
              </h2>
              <featuredvideo videoid="dQw4w9WgXcQ"/>
            </div>
          </section>

          {/* Social Links */}
          <section classname="pt-8 border-t border-white/5">
            <div classname="flex justify-center gap-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" classname="p-3 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-brand-accent hover:border-brand-accent/30 transition-all hover:-translate-y-1">
                <instagram size="{24}"/>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" classname="p-3 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-brand-accent hover:border-brand-accent/30 transition-all hover:-translate-y-1">
                <youtube size="{24}"/>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" classname="p-3 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-brand-accent hover:border-brand-accent/30 transition-all hover:-translate-y-1">
                <twitter size="{24}"/>
              </a>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer classname="mt-16 text-center">
          <div classname="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-500 font-mono text-[10px] uppercase tracking-widest">
            <span classname="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            System Online • v2.4.0
          </div>
        </footer>
      </div>
    </div>
  );

  return (
    <main classname="min-h-screen bg-brand-dark text-slate-200 selection:bg-brand-accent selection:text-brand-dark">
      {renderView()}
      <popup onsubscribe="{()" ==""> setCurrentView('newsletter')} 
        onSupport={() => window.open('https://buymeacoffee.com', '_blank')}
      />
    </main>
  );
}

export default App;
