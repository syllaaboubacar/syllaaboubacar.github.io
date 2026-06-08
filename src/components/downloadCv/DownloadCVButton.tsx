'use client';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function DownloadCVButton() {
  const locale = useLocale(); // 'fr' ou 'en'
  const t = useTranslations('navigationBar');
  const cvUrl = `/cv/cv-${locale}.pdf`;

  return (
    <a href={cvUrl} download={`CV-Aboubacar-Sylla-${locale}.pdf`}>
      <Button 
        type="button"           
        className="rounded-lg text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
       >
            <Download className="w-4 h-4" />
            {t('downloadCv')} 
        </Button>
    </a>
  );
}