import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

function isValidLocale(locale: string): locale is "en" | "fr" {
  return routing.locales.includes(locale as "en" | "fr");
}

export default getRequestConfig(async ({ locale }) => {
  const validatedLocale = (locale && isValidLocale(locale)) ? locale : routing.defaultLocale;
  
  return {
    locale: validatedLocale,
    messages: (await import(`../../messages/${validatedLocale}.json`)).default,
  };
});