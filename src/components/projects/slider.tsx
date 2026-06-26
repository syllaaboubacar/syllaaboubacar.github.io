"use client";

import { useState, useEffect, useRef } from "react";

interface ProjectImageSliderProps {
  images: string[];
  title: string;
}

export default function ProjectImageSlider({
  images,
  title,
}: ProjectImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (images.length > 1 && !isHovered) {
      intervalRef.current = setInterval(nextSlide, 3000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [images.length, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (!images || images.length === 0) {
    return (
      <div className="aspect-video relative rounded-xl overflow-hidden bg-muted mb-8 flex items-center justify-center text-muted-foreground">
        Aucune image
      </div>
    );
  }

  return (
    <div
      className="aspect-video relative rounded-xl overflow-hidden mb-8 px-[5px] bg-linear-to-r from-blue-50/60 to-sky-50/40 dark:from-blue-950/30 dark:to-sky-900/20"
    >
      <div
        className="relative w-full h-full overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Conteneur avec animation de slide */}
        <div
          className="flex h-full w-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className="min-w-full h-full shrink-0"
              style={{ width: "100%" }}
            >
              <img
                src={img}
                alt={`${title} - ${idx + 1}`}
                className="w-full h-full object-contain" // ← centré et visible en entier
                style={{
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>
          ))}
        </div>

        {/* Chevrons (placés à l'intérieur du conteneur, donc après le padding) */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10 text-2xl leading-none"
              aria-label="Image précédente"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10 text-2xl leading-none"
              aria-label="Image suivante"
            >
              ›
            </button>
          </>
        )}
      </div>
    </div>
  );
}