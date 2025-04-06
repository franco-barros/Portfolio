// hooks/CarouselApp/useCardHeight.ts
import { useState, useEffect } from "react";

export function useCardHeight(cardRef: React.RefObject<HTMLElement>) {
  const [cardHeight, setCardHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (cardRef.current) {
        setCardHeight(cardRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [cardRef]);

  return cardHeight;
}
