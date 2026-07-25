import { useEffect, useRef } from "react";
import { useIsMobile, usePrefersReducedMotion } from "../../hooks/useMediaQuery";

const CHARS = "アイウエオカキクケコサシスセソ0123456789ABCDEF<>/{}[]";
const GREEN = "7, 196, 44";
const CYAN = "56, 189, 248";

export function MatrixRain({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let columns: number[] = [];
    let drops: number[] = [];

    const fontSize = isMobile ? 13 : 16;
    const trailFade = isMobile ? 0.07 : 0.12;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.floor(window.innerWidth / fontSize);
      columns = Array.from({ length: count }, () => Math.random());
      drops = Array.from({ length: count }, () => Math.random() * window.innerHeight);
    };

    const drawStatic = () => {
      ctx.fillStyle = "#101816";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.font = `${fontSize}px "Courier New", monospace`;
      const step = isMobile ? 1 : 2;
      for (let i = 0; i < columns.length; i += step) {
        for (let j = 0; j < (isMobile ? 12 : 8); j++) {
          const char = CHARS[Math.floor(Math.random() * CHARS.length)];
          const useCyan = (i + j) % 3 === 0;
          ctx.fillStyle = j === 0
            ? `rgba(${useCyan ? CYAN : GREEN}, ${isMobile ? 0.9 : 0.75})`
            : `rgba(${useCyan ? CYAN : GREEN}, ${isMobile ? 0.35 : 0.2})`;
          ctx.fillText(char, i * fontSize, j * fontSize * 1.6 + 20);
        }
      }
    };

    const draw = () => {
      ctx.fillStyle = `rgba(16, 24, 22, ${trailFade})`;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.font = `${fontSize}px "Courier New", monospace`;

      for (let i = 0; i < columns.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;
        const y = drops[i];
        const useCyan = i % 4 === 0;
        const headAlpha = isMobile ? 0.95 : 0.85;

        ctx.fillStyle = `rgba(${useCyan ? CYAN : GREEN}, ${headAlpha})`;
        ctx.fillText(char, x, y);

        ctx.fillStyle = `rgba(${useCyan ? CYAN : GREEN}, ${isMobile ? 0.4 : 0.28})`;
        if (y > fontSize) {
          ctx.fillText(CHARS[(i + 3) % CHARS.length], x, y - fontSize);
        }

        const speed = isMobile ? 0.65 : 0.55;
        drops[i] += fontSize * (speed + columns[i] * 0.4);
        if (drops[i] > window.innerHeight + fontSize && Math.random() > 0.975) {
          drops[i] = -fontSize * Math.random() * 8;
          columns[i] = Math.random();
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);

    if (reducedMotion) {
      drawStatic();
    } else {
      draw();
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [reducedMotion, isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
