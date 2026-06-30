'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { data } from '@/data/contentText';
import { useState, useEffect } from 'react';

export default function DownloadCVButton() {
  const locale = useLocale(); // 'fr' ou 'en'
  const tFilAriane = useTranslations('navigationBar');

  // État pour stocker le nombre de téléchargements
  const [downloadCount, setDownloadCount] = useState<number | null>(null);

  // Récupérer le compteur au chargement du composant
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const isProduction = process.env.NODE_ENV === 'production';
        const counterId = isProduction
          ? process.env.NEXT_PUBLIC_DOWNLOAD_COUNTER_PROD
          : process.env.NEXT_PUBLIC_DOWNLOAD_COUNTER_DEV;

        const finalId = counterId || 'cv-downloads-fallback';
        const res = await fetch(`https://tick.rs/c/${finalId}.json`);
        if (res.ok) {
          const data = await res.json();
          setDownloadCount(data);
        }
      } catch (error) {
        console.error('Erreur récupération compteur :', error);
        // Ne pas bloquer l'affichage du bouton si le compteur échoue
      }
    };

    fetchCount();
  }, []);

  // Gestion du clic sur le bouton de téléchargement
  const handleDownload = async () => {
    try {
      // 1. Déterminer l'environnement
      const isProduction = process.env.NODE_ENV === 'production';
      const counterId = isProduction
        ? process.env.NEXT_PUBLIC_DOWNLOAD_COUNTER_PROD
        : process.env.NEXT_PUBLIC_DOWNLOAD_COUNTER_DEV;

      const finalId = counterId || 'cv-downloads-fallback';

      // 2. Incrémenter le compteur de téléchargements
      await fetch(`https://tick.rs/c/${finalId}`, { method: 'POST' });

      // 3. Récupérer la nouvelle valeur
      const res = await fetch(`https://tick.rs/c/${finalId}.json`);
      if (res.ok) {
        const data = await res.json();
        setDownloadCount(data);
      }

      // 4. Déclencher le téléchargement du CV (même si le compteur échoue)
      // Créer un lien temporaire pour forcer le téléchargement
      const link = document.createElement('a');
      link.href = `/cv/cv-${locale}.pdf`;
      link.download = `CV-Aboubacar-Sylla-${locale}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      console.error('Erreur compteur de téléchargements :', error);
      // En cas d'erreur, télécharger quand même le CV
      const link = document.createElement('a');
      link.href = `/cv/cv-${locale}.pdf`;
      link.download = `CV-Aboubacar-Sylla-${locale}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Button
      type="button"
      onClick={handleDownload}
      className="rounded-lg text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
    >
      {downloadCount !== null && (
        <span className="mx-1 text-sm">
          {downloadCount}
        </span>
      )}
      <Download className="w-4 h-4" />      
      {tFilAriane(data.navbarItems.downloadCv)}
      
    </Button>
  );
}