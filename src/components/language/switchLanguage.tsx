'use client';
import { useTransition } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/app/i18n/routing'; // ⚠️ PAS next/navigation
import { Button } from '@/components/ui/button';

export default function SwitchLanguage() {
  const locale = useLocale();                 // 'fr' | 'en'
  const pathname = usePathname();             // ex: '/experiences' (SANS /fr)
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const nextLocale = locale === 'fr' ? 'en' : 'fr';

  const onClick = () => {
    
    localStorage.setItem('NEXT_LOCALE', nextLocale);
    document.cookie = `NEXT_LOCALE=${nextLocale};path=/;max-age=31536000;samesite=lax`;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <Button onClick={onClick} disabled={isPending}>
      {nextLocale.toUpperCase()}
    </Button>
  );
}
