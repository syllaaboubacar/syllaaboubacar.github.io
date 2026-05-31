import { Button } from "@/components/ui/button"; // optionnel pour les liens du menu
import {DataText} from "@/data/contentText";


export default function Home() {
  return (
        
        <>
          {/* ---------- CONTENU (sans bordure) ---------- */}

          <h3 className="mb-4 text-xl font-semibold leading-none tracking-tight">
            Contenu principal
          </h3>
          <p className="text-muted-foreground">
            
            Ici se trouve le cœur de votre page. Vous pouvez y intégrer vos
            sections Profil, Expériences, Projets…          

          </p>

        </>

  );
}
