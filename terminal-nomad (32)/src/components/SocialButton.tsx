import React from 'react';
import { LinkItem } from '../types';
import { ExternalLink, LucideIcon } from 'lucide-react';

interface SocialButtonProps {
  item?: LinkItem;
  icon?: LucideIcon;
  label?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  primary?: boolean;
}

export const SocialButton: React.FC<socialbuttonprops> = ({ 
  item, 
  icon: IconProp, 
  label, 
  href, 
  onClick, 
  primary 
}) => {
  const title = item?.title || label;
  const url = item?.url || href || '#';
  const Icon = item?.icon || IconProp;
  const color = item?.color;

  const isExternal = url.startsWith('http');

  return (
    <a href="{url}" onclick="{onClick}" target="{isExternal" ?="" "_blank"="" :="" undefined}="" rel="{isExternal" ?="" "noopener="" noreferrer"="" :="" undefined}="" classname="{`" group="" relative="" flex="" items-center="" w-full="" p-4="" mb-3="" transition-all="" duration-300="" ease-out="" border="" rounded-xl="" backdrop-blur-sm="" overflow-hidden="" active:scale-95="" ${primary="" ?="" 'bg-brand-accent="" 10="" border-brand-accent="" 30="" hover:bg-brand-accent="" 20="" hover:border-brand-accent="" 50'="" :="" 'bg-white="" 5="" border-white="" 10="" hover:bg-white="" 10="" hover:border-white="" 20'="" }="" `}="" style="{color" ?="" {="" bordercolor:="" `${color}50`="" }="" :="" {}}="">
      {/* Background Hover Effect */}
      <div classname="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]"/>

      <div classname="{`" flex="" items-center="" justify-center="" w-10="" h-10="" rounded-lg="" bg-black="" 30="" text-white="" mr-4="" shadow-inner="" group-hover:text-brand-accent="" transition-colors="" `}="">
        {Icon && <icon size="{20}"/>}
      </div>

      <span classname="flex-1 text-lg font-semibold tracking-wide text-slate-100 group-hover:text-white">
        {title}
      </span>

      {isExternal && (
        <externallink size="{16}" classname="text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0"/>
      )}
    </a>
  );
};
