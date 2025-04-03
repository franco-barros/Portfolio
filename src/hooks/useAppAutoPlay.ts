import { useEffect, useRef } from "react";

/**
 * Hook que gestiona el autoplay de un carrusel sincronizado.
 *
 * @param activeIndex - Índice actual del carrusel.
 * @param setActiveIndex - Función para actualizar el índice.
 * @param interval - Tiempo entre cada cambio automático.
 * @param isHovered - Indica si el usuario está sobre el carrusel (pausa autoplay).
 * @param isUserScrolling - Indica si el usuario está usando el scroll manual (pausa autoplay).
 * @param direction - Dirección del autoplay (+1 para abajo, -1 para arriba).
 */
export function useAutoPlay(
  activeIndex: number,
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>,
  interval: number,
  isHovered: boolean,
  isUserScrolling: boolean,
  direction: number
) {
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovered || isUserScrolling) {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      return;
    }

    autoplayRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => prevIndex + direction);
    }, interval);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [setActiveIndex, interval, isHovered, isUserScrolling, direction]);
}
