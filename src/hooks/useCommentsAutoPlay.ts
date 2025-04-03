import { useEffect, useRef } from "react";

export function useCommentsAutoPlay(
  activeIndex: number,
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>,
  interval: number,
  isHovered: boolean,
  itemCount: number
) {
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovered) {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      return;
    }

    autoplayRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % itemCount);
    }, interval);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [setActiveIndex, interval, isHovered, itemCount]);
}
