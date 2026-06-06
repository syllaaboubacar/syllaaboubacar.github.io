'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
  const lang = navigator.language.split('-')[0];
  const supportedLocales = ['fr', 'en'];
  const locale = supportedLocales.includes(lang) ? lang : 'fr';
  router.replace(`/${locale}`);
}, [router]);

  return null;
}