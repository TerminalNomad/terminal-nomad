import React from 'react';
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Wallet, 
  DollarSign, 
  Zap, // For Zelle
  Square, // For Square
  LucideProps
} from 'lucide-react';
import { ProfileHeader } from './components/ProfileHeader';
import { SocialButton } from './components/SocialButton';
import { LinkItem, LinkCategory } from './types';

// Custom PayPal Icon since it's not in Lucide standard set
const PaypalIcon = React.forwardRef<SVGSVGElement, LucideProps>(({ color = 'currentColor', size = 24, strokeWidth = 2, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 8.5c-.5-3-3.5-5-6.5-5H6.5a1 1 0 0 0-1 1v15h4l1-6h2c3 0 5.5-2 6-5.5Z" />
      <path d="m10.5 14.5.5-3" />
    </svg>
  );
});

// Custom TikTok Icon
const TikTokIcon = React.forwardRef<SVGSVGElement, LucideProps>(({ color = 'currentColor', size = 24, strokeWidth = 2, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
});

const LINKS: LinkItem[] = [
  // Socials
  {
    id: '1',
    title: 'Instagram',
    url: 'https://www.instagram.com/terminalnomad',
    icon: Instagram,
    category: LinkCategory.SOCIAL,
    color: '#E1306C'
  },
  {
    id: '2',
    title: 'TikTok',
    url: 'https://www.tiktok.com/@TerminalNomad',
    icon: TikTokIcon,
    category: LinkCategory.SOCIAL,
    color: '#00F2EA'
  },
  {
    id: '3',
    title: 'YouTube',
    url: 'https://www.youtube.com/@terminalnomad',
    icon: Youtube,
    category: LinkCategory.SOCIAL,
    color: '#FF0000'
  },
  {
    id: '4',
    title: 'Facebook',
    url: 'https://www.facebook.com/@terminalnomad',
    icon: Facebook,
    category: LinkCategory.SOCIAL,
    color: '#1877F2'
  },
  
  // Support - Order: Venmo, PayPal, Square, Zelle, CashApp
  {
    id: '5',
    title: 'Venmo',
    url: 'https://www.venmo.com/u/TerminalNomad',
    icon: Wallet, // Generic wallet for Venmo
    category: LinkCategory.SUPPORT,
    color: '#008CFF'
  },
  {
    id: '7',
    title: 'PayPal',
    url: 'https://www.paypal.biz/TerminalNomad',
    icon: PaypalIcon,
    category: LinkCategory.SUPPORT,
    color: '#003087'
  },
  {
    id: '9',
    title: 'Square',
    url: 'https://square.link/u/txX0xLNq',
    icon: Square,
    category: LinkCategory.SUPPORT,
    color: '#FFFFFF'
  },
  {
    id: '8',
    title: 'Zelle',
    url: 'https://enroll.zellepay.com/qr-codes?data=eyJuYW1lIjoiWmFjaGVyeSBLcmlldGVuc3RlaW4iLCJlbWFpbCI6ImFjdGFsaXZlQGdtYWlsLmNvbSJ9',
    icon: Zap,
    category: LinkCategory.SUPPORT,
    color: '#6D1ED4'
  },
  {
    id: '6',
    title: 'CashApp',
    url: '#',
    icon: DollarSign,
    category: LinkCategory.SUPPORT,
    color: '#00D632'
  },
];

export default function App() {
  const socialLinks = LINKS.filter(link => link.category === LinkCategory.SOCIAL);
  const supportLinks = LINKS.filter(link => link.category === LinkCategory.SUPPORT);

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark">
      <ProfileHeader />
      
      <main className="flex-grow w-full max-w-md mx-auto px-6 pb-20 relative z-40">
        
        {/* Socials Section */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-4 text-center">
            Connect
          </h2>
          <div className="space-y-3">
            {socialLinks.map(link => (
              <SocialButton key={link.id} item={link} />
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-4 text-center">
            Support the Journey
          </h2>
          <div className="space-y-3">
            {supportLinks.map(link => (
              <SocialButton key={link.id} item={link} />
            ))}
          </div>
        </div>

      </main>

      <footer className="py-8 text-center text-slate-600 text-sm relative z-40">
        <p className="mb-2">© {new Date().getFullYear()} Terminal Nomad.</p>
        <p className="text-xs opacity-50">Designed for the edge.</p>
      </footer>
    </div>
  );
}