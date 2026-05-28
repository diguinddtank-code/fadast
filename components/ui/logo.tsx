import * as React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function FadaIcon({ className }: { className?: string }) {
  return (
    <div className={cn("relative inline-block w-12 h-12", className)}>
      <Image
        src="https://i.imgur.com/pyeqPjp.png"
        alt="Fada Studio Icon"
        fill
        className="object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

export function FadaLogo({ className, iconClassName }: { className?: string, iconClassName?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center w-64 h-48 md:w-[28rem] md:h-64", className)}>
      <Image
        src="https://i.imgur.com/wcHo7ne.png"
        alt="Fada Studio"
        fill
        className={cn("object-contain", iconClassName)}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

export function FadaLogoHorizontal({ className, iconClassName }: { className?: string, iconClassName?: string }) {
  return (
    <div className={cn("relative flex items-center justify-start w-40 h-16 md:w-48 md:h-16", className)}>
      <Image
        src="https://i.imgur.com/wcHo7ne.png"
        alt="Fada Studio"
        fill
        className="object-contain md:object-left"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
