'use client';
import { Circle } from "lucide-react";
import { useTranslations } from "next-intl";

export function AvailabilityBadge({ available }: { available: boolean }) {
  const t = useTranslations("Profile");
  return (
    <div className="flex items-center gap-2 text-sm">
      <Circle className={`h-3 w-3 ${available ? "fill-green-500 text-green-500" : "fill-gray-400 text-gray-400"}`} />
      <span className="font-medium">
        {available ? `✅ ${t('free')}` : `⏳ ${t('busy')}`}
      </span>
    </div>
  );
}