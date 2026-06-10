'use client';
import * as React from "react";
//import { usePathname } from 'next/navigation'
import { usePathname } from '@/app/i18n/routing';
import { Link } from '@/app/i18n/routing';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface Props {
    url?: string;
    ignorePattern?: RegExp;
    translations: Record<string, string>;
}

function formatRootLabel(segment: string): string {
  if (!segment) return '';
  
  // Remplacer les tirets et underscores par des espaces
  const words = segment.replace(/[-_]+/g, ' ').split(' ');
  
  // Mettre la première lettre de chaque mot en majuscule
  const formatted = words.map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ');
  
  return formatted;
}

export default function NavigationRoot({ url, ignorePattern = /^([a-z]{2}|\d+|[A-Za-z]+\d+)$/, translations }: Props) {
    const pathname = usePathname();
    const raw = url ?? pathname ?? "/";

    const cleaned = raw.split("?")[0].split("#")[0];
    const isLangRoot = /^\/[a-z]{2}\/?$/.test(cleaned); // true pour "/en", "/en/", "/fr", "/fr/"
    const segments = (cleaned === "/" || isLangRoot) ? [] : cleaned.split("/").filter(Boolean);
    
    const staticSegments = segments.filter(seg => !ignorePattern.test(seg));

    return (
        <Breadcrumb aria-label="Breadcrumb">
            <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink asChild>
                        <Link href="/" className="font-bold">{translations.about}</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem> 

                {staticSegments.length > 0 && <BreadcrumbSeparator className="hidden md:block text-[#569F98]" />}

                {staticSegments.map((seg, idx) => {
                    const label = formatRootLabel(seg);
                    const isLast = idx === staticSegments.length - 1;                    
                    const t = label.toLowerCase();
                    const translate = t.slice(0, -1);
                    const translatTitle = translations?.[translate] ?? translate;;
                    return (
                        <React.Fragment key={seg}>
                            {!isLast ? (
                                <BreadcrumbLink asChild>
                                    <Link
                                        href={`/${staticSegments.slice(0, idx + 1).join("/")}`}
                                        className="text-sm text-muted-foreground font-bold"
                                    >
                                        {translatTitle}

                                    </Link>
                                </BreadcrumbLink>
                            ) : (
                                <span className="font-bold">{translatTitle}</span>
                            )}
                            {!isLast && <BreadcrumbSeparator className="text-[#569F98]"/>}
                        </React.Fragment>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
}