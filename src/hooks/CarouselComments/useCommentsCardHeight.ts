import { useEffect, useState } from "react";

export function useCommentsCardHeight(ref: React.RefObject<HTMLElement>) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [ref]);

  return height;
}
