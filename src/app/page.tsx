"use client";

import { useEffect } from "react";
import { routing } from "./i18n/routing";

export default function RootRedirect() {
  useEffect(() => {
    const supported = routing.locales as readonly string[];

    // 1) priorité au choix déjà fait par l'utilisateur
    const saved =
      (typeof localStorage !== "undefined" && localStorage.getItem("NEXT_LOCALE")) ||
      document.cookie.match(/(?:^|; )NEXT_LOCALE=([^;]+)/)?.[1];

    // 2) sinon langue du navigateur
    const browser = navigator.language.slice(0, 2).toLowerCase();

    const target =
      saved && supported.includes(saved)
        ? saved
        : supported.includes(browser)
          ? browser
          : routing.defaultLocale;

    window.location.replace(`/${target}/`);
  }, []);

  return (
     <html suppressHydrationWarning>
      <head>
        <noscript>
          <meta httpEquiv="refresh" content="0; url=/fr/" />
          <a href="/fr/">Aller au site</a>
        </noscript>
      </head>
    </html>
  );
}
