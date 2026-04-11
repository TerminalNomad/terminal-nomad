import type { LucideIcon } from 'lucide-react';

export enum LinkCategory {
  SOCIAL = 'SOCIAL',
  SUPPORT = 'SUPPORT',
}

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon: LucideIcon;
  category: LinkCategory;
  color?: string; // Optional brand color for hover effects
}