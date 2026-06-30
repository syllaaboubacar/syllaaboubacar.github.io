'use client';

import { useEffect, useState } from 'react';

export default function TickRsCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const updateCount = async () => {
      // 1. Déterminer l'environnement
      const isProduction = process.env.NODE_ENV === 'production';
      
      // 2. Récupérer l'identifiant depuis les variables d'environnement
      const counterId = isProduction
        ? process.env.NEXT_PUBLIC_PROJECT_NAME_PROD
        : process.env.NEXT_PUBLIC_PROJECT_NAME_DEV;

      // 3. Fallback (au cas où les variables seraient undefined)
      const finalId = counterId || 'fallback-counter-2025';

      // 4. Clé pour sessionStorage (évite le double comptage par session)
      const storageKey = `hasVisited_${finalId}`;
      const alreadyVisited = sessionStorage.getItem(storageKey);

      try {
        // 5. Incrémenter le compteur (POST) UNIQUEMENT si pas encore compté
        if (!alreadyVisited) {
          await fetch(`https://tick.rs/c/${finalId}`, { method: 'POST' });
          sessionStorage.setItem(storageKey, 'true');
        }

        // 6. Récupérer la valeur actuelle (GET) au format JSON
        const res = await fetch(`https://tick.rs/c/${finalId}.json`);
        if (!res.ok) {
          throw new Error(`Erreur HTTP: ${res.status}`);
        }
        const data = await res.json();
        // tick.rs renvoie directement le nombre (ex: 42)
        setCount(data);
      } catch (error) {
        console.error('Erreur tick.rs :', error);
        setCount(null); // En cas d'erreur, on affiche "--"
      }
    };

    updateCount();
  }, []); // Le tableau vide exécute l'effet une seule fois au montage

  // 7. Gestion de l'affichage
  if (count === null) return <span>--</span>;
  return <span>{count.toLocaleString()}</span>;
}