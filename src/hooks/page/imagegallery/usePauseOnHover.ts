import { useEffect, useState } from "react";

const usePauseOnHover = (ref: React.RefObject<HTMLElement>) => {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleEnter = () => setIsPaused(true);
    const handleLeave = () => setIsPaused(false);

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [ref]);

  return isPaused;
};

export default usePauseOnHover;
