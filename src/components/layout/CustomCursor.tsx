import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer:fine)").matches;
    if (!finePointer || reducedMotion) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    document.body.classList.add("has-custom-cursor");

    const move = (event: MouseEvent) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };

    const enter = () => cursor.classList.add("is-hovering");
    const leave = () => cursor.classList.remove("is-hovering");

    window.addEventListener("mousemove", move);
    const targets = document.querySelectorAll("a, button, [data-magnetic]");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return <div ref={cursorRef} className="custom-cursor hidden md:block" aria-hidden="true" />;
}
