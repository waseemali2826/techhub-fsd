import React from 'react';
import { cn } from '@/lib/utils';

interface InfiniteScrollProps {
  children: React.ReactNode;
  speed?: 'slow' | 'normal' | 'fast';
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
  gradient?: boolean;
}

const InfiniteScroll = React.memo(({
  children,
  speed = 'normal',
  direction = 'left',
  pauseOnHover = true,
  className,
  gradient = true
}: InfiniteScrollProps) => {
  const getAnimationClass = () => {
    const baseClass = direction === 'left' ? 'animate-infinite-scroll' : 'animate-infinite-scroll-reverse';
    switch (speed) {
      case 'slow':
        return `${baseClass}-slow`;
      case 'fast':
        return `${baseClass}-fast`;
      default:
        return baseClass;
    }
  };

  const getHoverClass = () => {
    if (!pauseOnHover) return '';
    return direction === 'left' ? 'hover:animate-infinite-scroll-paused' : 'hover:animate-infinite-scroll-reverse-paused';
  };

  return (
    <div className={cn(
      "w-full overflow-hidden",
      gradient && "bg-gradient-to-r from-blue-50/30 via-white/50 to-blue-50/30",
      className
    )}>
      <div className={cn(
        "flex",
        getAnimationClass(),
        getHoverClass()
      )}>
        {/* Render multiple copies for seamless scrolling */}
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex flex-shrink-0">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
});

InfiniteScroll.displayName = "InfiniteScroll";

export { InfiniteScroll };
