import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";

const CHARS = "アイウエオカキクケコサシスセソ0123456789ABCDEF<>/{}[]";
const GREEN = "7, 196, 44";
const CYAN = "56, 189, 248";

export function MatrixRain({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let columns: number[] = [];
    let drops: number[] = [];
    const fontSize = 16;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
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
      for (let i = 0; i < columns.length; i += 2) {
        for (let j = 0; j < 8; j++) {
          const char = CHARS[Math.floor(Math.random() * CHARS.length)];
          const useCyan = (i + j) % 3 === 0;
          ctx.fillStyle = j === 0
            ? `rgba(${useCyan ? CYAN : GREEN}, 0.75)`
            : `rgba(${useCyan ? CYAN : GREEN}, 0.2)`;
          ctx.fillText(char, i * fontSize, j * fontSize * 2 + 40);
        }
      }
    };

    const draw = () => {
      ctx.fillStyle = "rgba(16, 24, 22, 0.12)";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.font = `${fontSize}px "Courier New", monospace`;

      for (let i = 0; i < columns.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;
        const y = drops[i];
        const useCyan = i % 4 === 0;

        ctx.fillStyle = `rgba(${useCyan ? CYAN : GREEN}, 0.85)`;
        ctx.fillText(char, x, y);

        ctx.fillStyle = `rgba(${useCyan ? CYAN : GREEN}, 0.28)`;
        if (y > fontSize) {
          ctx.fillText(CHARS[(i + 3) % CHARS.length], x, y - fontSize);
        }

        drops[i] += fontSize * (0.55 + columns[i] * 0.45);
        if (drops[i] > window.innerHeight + fontSize && Math.random() > 0.975) {
          drops[i] = -fontSize * Math.random() * 10;
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
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
