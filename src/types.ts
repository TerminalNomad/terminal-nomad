import type { LucideIcon } from 'lucide-react';

export const LinkCategory = {
  SOCIAL: 'SOCIAL',
  SUPPORT: 'SUPPORT',
} as const;

export type LinkCategoryType = typeof LinkCategory[keyof typeof LinkCategory];

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon: LucideIcon;
  category: LinkCategoryType;
  color?: string; // Optional brand color for hover effects
}