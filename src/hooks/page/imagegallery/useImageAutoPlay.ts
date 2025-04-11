import { useEffect } from "react";

interface UseImageAutoPlayProps {
  imagesLength: number;
  isVideoActive: boolean;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  delay?: number;
  isPaused?: boolean;
}

export default function useImageAutoPlay({
  imagesLength,
  isVideoActive,
  setCurrentIndex,
  delay = 4000,
  isPaused = false,
}: UseImageAutoPlayProps) {
  useEffect(() => {
    if (isVideoActive || imagesLength <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesLength);
    }, delay);

    return () => clearInterval(interval);
  }, [imagesLength, isVideoActive, delay, isPaused, setCurrentIndex]);
}
