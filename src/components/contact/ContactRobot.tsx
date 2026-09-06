import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function shortestDelta(from: number, to: number) {
  let delta = to - from;
  while (delta > Math.PI) delta -= Math.PI * 2;
  while (delta < -Math.PI) delta += Math.PI * 2;
  return delta;
}

const TWO_PI = Math.PI * 2;
/** Full circles before the robot taps out. One lazy pass should never be enough. */
const TIRED_ORBITS = 5;
const TIRED_ENERGY = TIRED_ORBITS * TWO_PI;
const ENERGY_CAP = TIRED_ENERGY + TWO_PI;
/** Idle drain: a pause of a couple seconds forgets the laps; a frantic streak does not. */
const ENERGY_DECAY = 0.14;

export function ContactRobot({ className = "" }: { className?: string }) {
  const faceRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const lastAngle = useRef<number | null>(null);
  const spinRef = useRef(0);
  const energyRef = useRef(0);
  const tiredUntil = useRef(0);

  const [look, setLook] = useState({ x: 0, y: 0 });
  const [spin, setSpin] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [tired, setTired] = useState(false);
  const [smiling, setSmiling] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;

    const onPointer = (event: PointerEvent) => {
      const node = faceRef.current;
      if (!node) return;
      const box = node.getBoundingClientRect();
      const cx = box.left + box.width / 2;
      const cy = box.top + box.height / 2;
      const nx = (event.clientX - cx) / (box.width / 2);
      const ny = (event.clientY - cy) / (box.height / 2);
      setLook({ x: clamp(nx, -1, 1), y: clamp(ny, -1, 1) });

      const nowTired = Date.now() < tiredUntil.current;
      const angle = Math.atan2(event.clientY - cy, event.clientX - cx);

      if (lastAngle.current !== null && !nowTired) {
        const delta = shortestDelta(lastAngle.current, angle);
        if (Math.abs(delta) > 0.025) {
          spinRef.current += delta * (180 / Math.PI);
          energyRef.current = Math.min(ENERGY_CAP, energyRef.current + Math.abs(delta));
          setSpin(spinRef.current);
          setEnergy(energyRef.current);
        }
      }

      lastAngle.current = angle;
    };

    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => window.removeEventListener("pointermove", onPointer);
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;

    const id = window.setInterval(() => {
      if (Date.now() >= tiredUntil.current && tired) {
        setTired(false);
      }

      energyRef.current = Math.max(0, energyRef.current - ENERGY_DECAY);
      setEnergy(energyRef.current);

      if (energyRef.current >= TIRED_ENERGY && Date.now() >= tiredUntil.current) {
        tiredUntil.current = Date.now() + 2800;
        setTired(true);
        energyRef.current = 20;
        setEnergy(20);
      }
    }, 80);

    return () => window.clearInterval(id);
  }, [reducedMotion, tired]);

  useEffect(() => {
    if (reducedMotion || window.matchMedia("(pointer: fine)").matches) return;

    let tick = 0;
    const id = window.setInterval(() => {
      if (Date.now() < tiredUntil.current) return;
      tick += 1;
      setLook({
        x: Math.sin(tick * 0.35) * 0.55,
        y: Math.cos(tick * 0.22) * 0.28,
      });
    }, 90);

    return () => window.clearInterval(id);
  }, [reducedMotion]);

  const smile = () => {
    if (tired) return;
    setSmiling(true);
    window.setTimeout(() => setSmiling(false), 1100);
  };

  const pupilX = tired ? 0 : look.x * 3.1;
  const pupilY = tired ? 2.4 : look.y * 2.2;
  const spinning = !tired && energy > TWO_PI * 0.35;
  const rotate = reducedMotion ? 0 : tired ? spin + Math.sin(energy) * 4 : spin + look.x * 8;

  const caption = tired
    ? "Okay… I'm tired"
    : smiling
      ? "Nice to meet you"
      : spinning
        ? "Wheee"
        : "Move around · tap to say hi";

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <motion.button
        ref={faceRef}
        type="button"
        onPointerDown={smile}
        className="relative touch-manipulation rounded-[2rem] outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        aria-label="The robot follows you, spins if you circle it, and gets tired if you keep going."
        animate={
          reducedMotion
            ? undefined
            : tired
              ? { y: [0, 3, 0] }
              : { y: [0, -5, 0] }
        }
        transition={{ duration: tired ? 2.1 : 3.2, repeat: Infinity, ease: "easeInOut" }}
        whileTap={reducedMotion || tired ? undefined : { scale: 0.97 }}
      >
        <motion.svg
          viewBox="0 0 120 128"
          className="h-[min(72vw,22rem)] w-[min(72vw,22rem)] sm:h-64 sm:w-64 lg:h-[22rem] lg:w-[22rem]"
          animate={{ rotate }}
          transition={{ type: "spring", stiffness: spinning ? 70 : 160, damping: spinning ? 12 : 18 }}
        >
          <motion.line
            x1="60"
            y1="14"
            x2="60"
            y2="28"
            stroke="#11110f"
            strokeWidth="3.2"
            strokeLinecap="round"
            animate={reducedMotion || tired ? undefined : { y1: [14, 10, 14], y2: [28, 26, 28] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="60"
            cy="12"
            r="5"
            fill={tired ? "#c4bfb6" : "#ff5b2e"}
            animate={reducedMotion || tired ? undefined : { cy: [12, 8, 12] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          />

          <rect x="18" y="28" width="84" height="78" rx="26" fill="#11110f" />
          <rect x="28" y="40" width="64" height="34" rx="16" fill="#e6e2d8" />

          <g>
            <circle cx="46" cy="57" r="7.5" fill="#11110f" />
            <circle cx="74" cy="57" r="7.5" fill="#11110f" />
            <motion.g
              animate={{ x: pupilX, y: pupilY }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
            >
              <circle cx="46" cy="57" r="2.6" fill="#e6e2d8" />
              <circle cx="74" cy="57" r="2.6" fill="#e6e2d8" />
            </motion.g>
            {tired && (
              <>
                <path d="M38 50 Q46 56 54 50" stroke="#e6e2d8" strokeWidth="2.4" strokeLinecap="round" fill="none" />
                <path d="M66 50 Q74 56 82 50" stroke="#e6e2d8" strokeWidth="2.4" strokeLinecap="round" fill="none" />
              </>
            )}
          </g>

          {smiling && !tired && (
            <>
              <circle cx="34" cy="86" r="5" fill="#ff5b2e" opacity="0.85" />
              <circle cx="86" cy="86" r="5" fill="#ff5b2e" opacity="0.85" />
            </>
          )}

          <path
            d={
              tired
                ? "M46 94 Q52 90 56 94 Q60 98 64 94 Q68 90 74 94"
                : smiling
                  ? "M42 90 Q60 106 78 90"
                  : "M46 92 H74"
            }
            stroke="#e6e2d8"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />
        </motion.svg>
      </motion.button>
      <p className="mt-2 text-center text-[11px] uppercase tracking-[0.12em] text-muted">
        {caption}
      </p>
    </div>
  );
}
