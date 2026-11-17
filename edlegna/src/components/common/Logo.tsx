import Link from 'next/link';
import { ASSETS } from '@/lib/assets';

interface LogoProps {
  href?: string;
  subtitle?: string;
  imageClassName?: string;
  titleClassName?: string;
  showWordmark?: boolean;
}

export function Logo({
  href = '/',
  subtitle,
  imageClassName = 'h-8 w-auto object-contain',
  titleClassName = 'font-headline-sm text-headline-sm text-primary tracking-tight font-bold',
  showWordmark = true,
}: LogoProps) {
  return (
    <Link href={href} className="flex items-center gap-space-md">
      <img alt="Edlegna Official Logo" className={imageClassName} src={ASSETS.logo} />
      {showWordmark ? (
        <span className="flex flex-col">
          <span className={titleClassName}>Edlegna</span>
          {subtitle ? (
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">{subtitle}</span>
          ) : null}
        </span>
      ) : null}
    </Link>
  );
}
