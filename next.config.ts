import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

//const withNextIntl = createNextIntlPlugin("./src/app/i18n/request.ts");

const withNextIntl = createNextIntlPlugin("./src/app/i18n/request.ts");
  const nextConfig: NextConfig = {
    output: "export",
    images: { unoptimized: true },
  };
export default withNextIntl(nextConfig);