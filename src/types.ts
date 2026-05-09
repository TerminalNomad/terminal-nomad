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
  icon: LucideIcon | React.FC<any>;
  category: LinkCategoryType;
  color?: string;
}
