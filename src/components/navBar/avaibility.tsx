"use client";

import {DataText} from "@/data/contentText";
import { Button } from "../ui/button";

export function Avaibility() {
  return (
    <Button className="rounded-lg text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-dot w-3 h-3 text-primary" aria-hidden="true">
            <circle cx="12" cy="12" r="10" fill="white" stroke="white" strokeWidth="2">
            </circle>
            <circle cx="12" cy="12" r="2" fill="green" stroke="green" strokeWidth="4">
            </circle>
        </svg>
        <span> {DataText.navItems.avaibility} </span>
    </Button>
  );
}
