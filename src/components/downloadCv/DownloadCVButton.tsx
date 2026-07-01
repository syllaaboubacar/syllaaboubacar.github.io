'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { data } from '@/data/contentText';
import { useState, useEffect, useRef } from 'react';

export default function DownloadCVButton() {
  const locale = useLocale();
  const tFilAriane = useTranslations('navigationBar');

  // État pour stocker le nombre de téléchargements
  const [downloadCount, setDownloadCount] = useState<number | null>(null);
  // État pour gérer l'affichage "en cours de téléchargement"
  const [isDownloading, setIsDownloading] = useState(false);
  // Référence pour éviter les appels multiples
  const isProcessing = useRef(false);

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
      }
    };

    fetchCount();
  }, []);

  const getCounterId = () => {
    const isProduction = process.env.NODE_ENV === 'production';
    return isProduction
      ? process.env.NEXT_PUBLIC_DOWNLOAD_COUNTER_PROD
      : process.env.NEXT_PUBLIC_DOWNLOAD_COUNTER_DEV;
  };

  const triggerDownload = () => {
    const link = document.createElement('a');
    link.href = `/cv/cv-${locale}.pdf`;
    link.download = `CV-Aboubacar-Sylla-${locale}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownload = async () => {
    // Empêcher les clics multiples pendant le traitement
    if (isProcessing.current) return;
    isProcessing.current = true;
    setIsDownloading(true);

    const finalId = getCounterId() || 'cv-downloads-fallback';

    try {
      // 1. OPTIMISTIC UI : incrémenter instantanément le compteur dans l'UI
      setDownloadCount((prev) => (prev !== null ? prev + 1 : 1));

      // 2. DÉCLENCHER LE TÉLÉCHARGEMENT IMMÉDIATEMENT (ne pas attendre les API)
      triggerDownload();

      // 3. Lancer les appels API en ARRIÈRE-PLAN (sans bloquer l'UI)
      // On utilise Promise.all pour envoyer les deux requêtes en parallèle
      await Promise.all([
        fetch(`https://tick.rs/c/${finalId}`, { method: 'POST' }),
        // Récupérer la valeur confirmée (optionnel, permet de corriger l'UI)
        fetch(`https://tick.rs/c/${finalId}.json`).then(async (res) => {
          if (res.ok) {
            const data = await res.json();
            // Corriger l'UI si la valeur réelle diffère de l'optimistic update
            setDownloadCount(data);
          }
        }),
      ]);

    } catch (error) {
      console.error('Erreur compteur :', error);
      // Si l'API échoue, on pourrait remettre la valeur précédente
      // Mais dans ce cas, le compteur reste sur la valeur optimiste
    } finally {
      isProcessing.current = false;
      setIsDownloading(false);
    }
  };

  // Version simplifiée pour comparer
  const handleDownloadSimplified = async () => {
    if (isProcessing.current) return;
    isProcessing.current = true;
    setIsDownloading(true);

    const finalId = getCounterId() || 'cv-downloads-fallback';

    // 1. Optimistic update immédiat
    setDownloadCount((prev) => (prev !== null ? prev + 1 : 1));

    // 2. Téléchargement immédiat (le plus important !)
    triggerDownload();

    // 3. Appels API en arrière-plan
    try {
      await fetch(`https://tick.rs/c/${finalId}`, { method: 'POST' });
      const res = await fetch(`https://tick.rs/c/${finalId}.json`);
      if (res.ok) {
        const data = await res.json();
        setDownloadCount(data);
      }
    } catch (error) {
      console.error('Erreur compteur :', error);
      // On garde la valeur optimiste si l'API échoue
    } finally {
      isProcessing.current = false;
      setIsDownloading(false);
    }
  };

  return (
    <Button
      type="button"
      onClick={handleDownload}
      className="rounded-lg text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
      disabled={isDownloading}
    >
      {downloadCount !== null && (
        <span className="mx-1 text-sm">{downloadCount}</span>
      )}
      <Download className="w-4 h-4" />
      {isDownloading ? '...' : tFilAriane(data.navbarItems.downloadCv)}
    </Button>
  );
}