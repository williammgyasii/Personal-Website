import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";

export function Layout() {
  const { pathname } = useLocation();
  const lenis = useLenis();
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: reducedMotion });
      return;
    }
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  }, [pathname, lenis, reducedMotion]);

  return (
    <div className="bg-surface">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
