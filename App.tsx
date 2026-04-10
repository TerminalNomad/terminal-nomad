
import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Wallet, 
  DollarSign, 
  Zap, 
  Square,
  LucideProps,
  Mail,
  MessageSquareQuote
} from 'lucide-react';
import { ProfileHeader } from './components/ProfileHeader';
import { SocialButton } from './components/SocialButton';
import { FeaturedVideo } from './components/FeaturedVideo';
import { LocationMap } from './components/LocationMap';
import { AboutPage } from './components/AboutPage';
import { WorkWithMePage } from './components/WorkWithMePage';
import { TestimonialsPage } from './components/TestimonialsPage';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { Popup } from './components/Popup';
import { NewsletterPage } from './components/NewsletterPage';
import { SupportPage } from './components/SupportPage';
import { HandcamPage } from './components/HandcamPage';
import { LinkItem, LinkCategory } from './types';

// Custom PayPal Icon
const PaypalIcon = React.forwardRef<svgsvgelement, lucideprops="">(({ color = 'currentColor', size = 24, strokeWidth = 2, ...props }, ref) => {
  return (
    <svg ref={ref} {...props} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 8.5c-.5-3-3.5-5-6.5-5H6.5a1 1 0 0 0-1 1v15h4l1-6h2c3 0 5.5-2 6-5.5Z"/>
      <path d="m10.5 14.5.5-3"/>
    </svg>
  );
});

// Custom TikTok Icon
const TikTokIcon = React.forwardRef(({ color = 'currentColor', size = 24, strokeWidth = 2, ...props }: any, ref: any) => {
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
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
    </svg>
  );
});

// Custom Snapchat Icon
const SnapchatIcon = React.forwardRef(({ color = 'currentColor', size = 24, strokeWidth = 2, ...props }: any, ref: any) => {
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
      <path d="M12 2.5c-2.3 0-5.5 1.7-5.5 6 0 2.5 1.2 3.6 1.2 5 0 1.2-1 1.7-1.7 1.7-1 0-1.5.8-1.5 1.8 0 1.8 2.2 2.5 3.5 2.5.5 0 1 .5 1 1 0 .6-.7 1-1.5 1-.3 0-.5.2-.5.5 0 .5 1 .5 2 .5 1.5 0 3-.2 5-.5 2 .3 3.5.5 5 .5 1 0 2 0 2-.5 0-.3-.2-.5-.5-.5-.8 0-1.5-.4-1.5-1 0-.5.5-1 1-1 1.3 0 3.5-.7 3.5-2.5 0-1-.5-1.8-1.5-1.8-.7 0-1.7-.5-1.7-1.7 0-1.4 1.2-2.5 1.2-5 0-4.3-3.2-6-5.5-6z"/>
    </svg>
  );
});
const LINKS: LinkItem[] = [
  // Socials
  {
    id: '1',
    title: 'Instagram',
    url: 'https://www.instagram.com/ActAlive',
    icon: Instagram,
    category: LinkCategory.SOCIAL,
    color: '#E1306C'
  },
  {
    id: '2',
    title: 'TikTok',
    url: 'https://www.tiktok.com/@ActAlive',
    icon: TikTokIcon,
    category: LinkCategory.SOCIAL,
    color: '#00F2EA'
  },
  {
    id: '3',
    title: 'YouTube',
    url: 'https://www.youtube.com/@ActAlive',
    icon: Youtube,
    category: LinkCategory.SOCIAL,
    color: '#FF0000'
  },
  {
    id: '4',
    title: 'Facebook',
    url: 'https://www.facebook.com/ActAlive',
    icon: Facebook,
    category: LinkCategory.SOCIAL,
    color: '#1877F2'
  },
  {
    id: '10',
    title: 'Snapchat',
    url: 'https://www.snapchat.com/add/ActAlive',
    icon: SnapchatIcon,
    category: LinkCategory.SOCIAL,
    color: '#FFFC00'
  },
  
  // Support - Order: Venmo, PayPal, Square, Zelle, CashApp
  {
    id: '5',
    title: 'Venmo',
    url: 'https://www.venmo.com/u/ActAlive',
    icon: Wallet, // Generic wallet for Venmo
    category: LinkCategory.SUPPORT,
    color: '#008CFF'
  },
  {
    id: '7',
    title: 'PayPal',
    url: 'https://www.paypal.biz/ActAlive',
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
    url: 'https://cash.app/$ActAlive',
    icon: DollarSign,
    category: LinkCategory.SUPPORT,
    color: '#00D632'
  },
];

type ViewState = 'home' | 'about' | 'testimonials' | 'work' | 'newsletter' | 'support' | 'handcam';

export default function App() {
  const [currentView, setCurrentView] = useState<viewstate>('home');
  const [location, setLocation] = useState('Locating...');
  
  const socialLinks = LINKS.filter(link => link.category === LinkCategory.SOCIAL);
  const supportLinks = LINKS.filter(link => link.category === LinkCategory.SUPPORT);

  useEffect(() => {
    // Your specific Google Sheet CSV link
    const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT7Ty_cQhXUU0PXT2u2-LtmW_K8TFKa5luFJGSPRZqEbcduP5NojkcLJ4qASHSZuOPdaw4UMe4yvnu_/pub?output=csv';

    fetch(sheetUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((csvText) => {
        // Parse the CSV: Split by new line to get rows
        const rows = csvText.split('\n');
        
        // Row 0 is headers, Row 1 is your data
        if (rows.length > 1) {
          // Split the data row by commas
          const cells = rows[1].split(',');
          
          // Clean up the data (remove quotes if Google adds them)
          const city = cells[0]?.replace(/"/g, '').trim();
          const state = cells[1]?.replace(/"/g, '').trim();
          const country = cells[2]?.replace(/"/g, '').trim();

          // Filter out empty values and join with commas
          const locationString = [city, state, country].filter(Boolean).join(', ');
          
          if (locationString) {
            setLocation(locationString);
          }
        }
      })
      .catch((error) => {
        console.warn("Could not fetch dynamic location, using fallback:", error);
        // Fallback to default location
        setLocation('Raeford, NC, USA');
      });
  }, []);

  const handleAboutClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView('about');
  };

  const handleWorkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView('work');
  };

  const handleHandcamClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView('handcam');
  };

  const handleTestimonialsClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView('testimonials');
  };

  const renderContent = () => {
switch (currentView) {
        case 'about':
          return <AboutPage onBack={() => setCurrentView('home')} />;
        case 'work':
          return <WorkWithMePage onBack={() => setCurrentView('home')} />;
        case 'support':
          return <SupportPage onBack={() => setCurrentView('home')} links={LINKS} />;
        case 'handcam':
          return <HandcamPage onBack={() => setCurrentView('home')} />;
        default:
          return null;
      }
    };

    return (
      <div className="min-h-screen bg-black text-white p-4 font-mono selection:bg-white selection:text-black">
        {renderContent()}
      </div>
    );
}

export default App;