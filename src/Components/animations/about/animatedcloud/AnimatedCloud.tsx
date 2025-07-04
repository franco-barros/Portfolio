"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const stableRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const CloudsAnimation: React.FC = () => {
  const containerRef = useRef<HTMLButtonElement>(null);
  const [containerSize, setContainerSize] = useState({
    width: 300,
    height: 220,
  });
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        setContainerSize({
          width: clientWidth || 300,
          height: clientHeight || 220,
        });
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
      updateSize();
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const colCount = Math.max(8, Math.floor(containerSize.width / 20));
  const rowCount = Math.max(6, Math.floor(containerSize.height / 15));

  const cloudsBase = React.useMemo(() => {
    const clouds = [];
    for (let row = 0; row < rowCount; row++) {
      for (let col = 0; col < colCount; col++) {
        const baseX = (containerSize.width / (colCount - 1 || 1)) * col;
        const baseY = (containerSize.height / (rowCount - 1 || 1)) * row;

        const jitterX = stableRandom(row * colCount + col) * 20 - 10;
        const jitterY = stableRandom(col * rowCount + row) * 20 - 10;

        const scale = 0.5 + stableRandom(row + col) * 0.6;
        clouds.push({ baseX: baseX + jitterX, baseY: baseY + jitterY, scale });
      }
    }
    return clouds;
  }, [containerSize, colCount, rowCount]);

  const centerX = containerSize.width / 2;
  const centerY = containerSize.height / 2;

  function calcOffset(cx: number, cy: number) {
    const offsetMax = 40;
    const dx = cx - centerX;
    const dy = cy - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    return {
      x: (dx / dist) * offsetMax,
      y: (dy / dist) * offsetMax,
    };
  }

  return (
    <button
      ref={containerRef}
      type="button"
      onClick={() => setOpened((o) => !o)}
      title="Click para abrir/cerrar nubes"
      aria-pressed={opened}
      style={{
        width: "100%",
        maxWidth: 400,
        aspectRatio: "1 / 1",
        margin: "2rem auto",
        position: "relative",
        overflow: "hidden",
        background: "#0d1b2a", // fondo azul oscuro como los otros componentes
        borderRadius: 12,
        boxSizing: "border-box",
        userSelect: "none",
        cursor: "pointer",
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          display: "block",
          pointerEvents: "none",
        }}
      >
        {cloudsBase.map(({ baseX, baseY, scale }, idx) => {
          const offset = opened ? calcOffset(baseX, baseY) : { x: 0, y: 0 };
          return (
            <motion.g
              key={idx}
              initial={false}
              animate={{ x: baseX + offset.x, y: baseY + offset.y }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              transform={`scale(${scale})`}
              style={{ filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.15))" }}
            >
              <ellipse cx="0" cy="0" rx="18" ry="11" fill="#f0f0f0" />
              <ellipse cx="12" cy="-6" rx="23" ry="14" fill="#d9d9d9" />
              <ellipse cx="-12" cy="-3" rx="18" ry="11" fill="#c0c0c0" />
              <ellipse cx="0" cy="6" rx="25" ry="14" fill="#f0f0f0" />
            </motion.g>
          );
        })}
      </svg>
      {opened && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            color: "#35eb25e5",
            fontSize: 32,
            fontWeight: "bold",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          Amazing!
        </motion.div>
      )}
    </button>
  );
};

export default React.memo(CloudsAnimation);
