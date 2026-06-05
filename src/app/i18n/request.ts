import { cookies, headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { defaultLocale, LOCALE_COOKIE, locales, type Locale } from "./config";

function pickLocale(value: string | undefined): Locale {
  return locales.includes(value as Locale) ? (value as Locale) : defaultLocale;
}

export default getRequestConfig(async () => {
  const cookieLocale = (await cookies()).get(LOCALE_COOKIE)?.value;
  const accept = (await headers()).get("accept-language") ?? "";
  const browser = accept.split(",")[0]?.split("-")[0];
  const locale = pickLocale(cookieLocale ?? browser);

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});