// hooks/CarouselApp/useTouchNavigation.ts
import { useRef, useState } from "react";

export function useTouchNavigation(
  activeIndex: number,
  totalItems: number,
  setActiveIndex: (index: number) => void
) {
  const startY = useRef(0);
  const [isTouching, setIsTouching] = useState(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY;
    setIsTouching(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const deltaY = e.touches[0].clientY - startY.current;

    if (Math.abs(deltaY) > 30) {
      const newIndex =
        deltaY < 0
          ? (activeIndex + 1) % totalItems
          : (activeIndex - 1 + totalItems) % totalItems;
      setActiveIndex(newIndex);
    }
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsTouching(false), 300);
  };

  return {
    isTouching,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}
