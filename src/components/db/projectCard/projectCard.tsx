"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight, Users, User } from "lucide-react";
import { Projectdata } from "@/components/db/data/project";
import { Link, routing } from "@/app/i18n/routing";

export function ProjectCard({ project }: { project: Projectdata }) {
  const t = useTranslations("Projets");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const displayedTechnologies = project.technologies.slice(0, 3);
  const remainingTechnologies = project.technologies.length - 3;

  return (
    <div className="group relative rounded-xl border bg-card overflow-hidden shadow-sm hover:shadow-md transition flex flex-col h-full">
      {/* Slider d'images */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={project.images[currentImageIndex]}
          alt={project.title}
          className="object-cover w-full h-full transition group-hover:scale-105"
        />
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition"
              aria-label="Image précédente"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition"
              aria-label="Image suivante"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {project.images.map((_, idx) => (
                <span
                  key={idx}
                  className={`block w-2 h-2 rounded-full transition ${
                    idx === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Contenu de la carte */}
      <div className="p-4 flex flex-col grow">
        <h3 className="font-semibold text-xl mb-1">{project.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3 grow">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mb-3">
          {displayedTechnologies.map((tech) => (
            <span key={tech} className="text-xs bg-secondary px-2 py-0.5 rounded-full">
              {tech}
            </span>
          ))}
          {remainingTechnologies > 0 && (
            <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">
              +{remainingTechnologies}
            </span>
          )}
        </div>

        {/* Footer : type et participants */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground border-t pt-2">
          {project.type === "personnel" ? (
            <User className="h-3 w-3" />
          ) : (
            <Users className="h-3 w-3" />
          )}
          <span>
            {project.type === "personnel"
              ? t("personal")
              : t("team")}
          </span>
          {project.type === "equipe" && project.participants && (
            <span className="ml-1">
              : {project.participants.join(", ")}
            </span>
          )}
        </div>

        <Button asChild variant="outline" size="sm" className="w-full mt-3">
          <Link href={`/projects/${project.slug}`}>{t("viewProject")}</Link>
        </Button>
      </div>
    </div>
  );
}