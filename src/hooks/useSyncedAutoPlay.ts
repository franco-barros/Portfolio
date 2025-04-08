import { useEffect, useRef } from "react";

export function useSyncedAutoPlay(
  activeIndex: number,
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>,
  interval: number,
  isPaused: boolean,
  totalItems: number
) {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalItems);
    }, interval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, interval, setActiveIndex, totalItems]);
}
