import { useRef, useState, useEffect } from "react";

export function useTouchNavigation(
  containerRef: React.RefObject<HTMLElement>,
  setActiveIndex: (index: number) => void,
  totalItems: number,
  setDirection?: React.Dispatch<React.SetStateAction<number>>
) {
  const startY = useRef(0);
  const [isTouching, setIsTouching] = useState(false);
  const hasSwiped = useRef(false);
  const activeIndexRef = useRef(0); // para mantener sincronía con el valor actual

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e: TouchEvent) => {
      startY.current = e.touches[0].clientY;
      hasSwiped.current = false;
      setIsTouching(true);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (hasSwiped.current) return;

      const deltaY = e.touches[0].clientY - startY.current;

      if (Math.abs(deltaY) > 30) {
        const goingDown = deltaY < 0;

        const newIndex = goingDown
          ? (activeIndexRef.current + 1) % totalItems
          : (activeIndexRef.current - 1 + totalItems) % totalItems;

        setActiveIndex(newIndex);
        activeIndexRef.current = newIndex;

        if (setDirection) {
          setDirection(goingDown ? 1 : -1);
        }

        hasSwiped.current = true;
      }
    };

    const handleTouchEnd = () => {
      setTimeout(() => setIsTouching(false), 300);
      hasSwiped.current = false;
    };

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleTouchMove);
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [containerRef, setActiveIndex, totalItems, setDirection]);

  // Este efecto sincroniza el índice actual
  useEffect(() => {
    activeIndexRef.current = 0;
  }, []);

  return { isTouching };
}
