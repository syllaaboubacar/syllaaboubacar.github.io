"use client";

import {DataText} from "@/data/contentText";

export function Avaibility() {
  return (
    <div className="inline-flex items-center gap-1 px-3 py-1.5 text-sm rounded-full bg-secondary transition hover:bg-primary/10">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-dot w-3 h-3 text-primary" aria-hidden="true">
            <circle cx="12" cy="12" r="10">
            </circle>
            <circle cx="12" cy="12" r="1">
            </circle>
        </svg>
        <span> {DataText.navItems.avaibility} </span>
    </div>
  );
}
