// src/app/i18n/routing.ts
import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'fr',
  localePrefix: 'always', // conserve le préfixe dans l'URL (ex: /fr/experiences)
});

// Exportez les wrappers pour Link, useRouter, etc.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing); 