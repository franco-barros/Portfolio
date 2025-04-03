"use client";
import { useEffect, useState } from "react";

interface ScrollableDiv extends HTMLDivElement {
  _scrollTimeout?: NodeJS.Timeout;
}

export function useWheelScrollImmediate(
  containerRef: React.RefObject<HTMLDivElement>,
  onWheelUpdate: (delta: number) => void,
  debounceTime: number = 300
): boolean {
  const [isUserScrolling, setIsUserScrolling] = useState(false);

  useEffect(() => {
    const container = containerRef.current as ScrollableDiv | null;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      setIsUserScrolling(true);

      if (e.deltaY > 0) {
        onWheelUpdate(1);
      } else if (e.deltaY < 0) {
        onWheelUpdate(-1);
      }

      if (container._scrollTimeout) {
        clearTimeout(container._scrollTimeout);
      }
      container._scrollTimeout = setTimeout(() => {
        setIsUserScrolling(false);
      }, debounceTime);
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", onWheel);
      if (container._scrollTimeout) {
        clearTimeout(container._scrollTimeout);
      }
    };
  }, [containerRef, onWheelUpdate, debounceTime]);

  return isUserScrolling;
}
