import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

//const withNextIntl = createNextIntlPlugin("./src/app/i18n/request.ts");

const withNextIntl = createNextIntlPlugin("./src/app/i18n/request.ts");
  const nextConfig: NextConfig = {
    output: "export",
    images: { unoptimized: true },
    trailingSlash: true,  // force une structure propre
  };
export default withNextIntl(nextConfig);