'use client';

import { forwardRef, HTMLAttributes } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, variant = 'default', size = 'md', className = '', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center font-semibold rounded-full';

    const variants = {
      default: 'bg-white/10 text-white/80 border border-white/10',
      primary: 'bg-[#00a8ff]/20 text-[#00a8ff] border border-[#00a8ff]/30',
      success: 'bg-[#00ff87]/20 text-[#00ff87] border border-[#00ff87]/30',
      warning: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
      outline: 'bg-transparent text-white border border-white/20',
    };

    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-3 py-1 text-xs',
      lg: 'px-4 py-1.5 text-sm',
    };

    return (
      <span
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export interface TrustBadgeProps extends HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  text: string;
  subtext?: string;
}

const TrustBadge = forwardRef<HTMLDivElement, TrustBadgeProps>(
  ({ icon, text, subtext, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 ${className}`}
        {...props}
      >
        {icon && (
          <div className="w-8 h-8 rounded-lg bg-[#00a8ff]/20 flex items-center justify-center text-[#00a8ff]">
            {icon}
          </div>
        )}
        <div>
          <p className="text-sm font-bold text-white">{text}</p>
          {subtext && <p className="text-xs text-white/50">{subtext}</p>}
        </div>
      </div>
    );
  }
);

TrustBadge.displayName = 'TrustBadge';

export { Badge, TrustBadge };
