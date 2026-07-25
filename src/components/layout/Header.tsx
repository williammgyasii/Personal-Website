import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { site } from "../../data/site";
import { NavMenuBackground } from "./NavMenuBackground";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `group text-sm font-medium tracking-tight transition-colors hover:text-primary ${
      isActive ? "text-primary" : "text-white/85"
    }`;

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 px-4 py-4 transition-[background,border,backdrop-filter] duration-300 sm:px-6 sm:py-5 ${
          scrolled || !isHome
            ? "border-b border-white/10 bg-black/75 backdrop-blur-xl"
            : "border-b border-transparent bg-black/25 backdrop-blur-md"
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto grid max-w-[1320px] grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[auto_1fr_auto_auto] lg:items-center lg:gap-8">
          <Link
            to="/"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] border border-white/20 bg-white/5 text-sm font-bold tracking-tight transition hover:border-primary/50 hover:text-primary hover:shadow-[0_0_20px_rgba(221,214,200,0.12)]"
            aria-label="Home"
          >
            WG
          </Link>

          <nav className="hidden justify-center lg:flex" aria-label="Primary">
            <div className="nav-menu-shell relative overflow-hidden rounded-full border border-white/10 bg-black/40 px-2 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md">
              <NavMenuBackground />
              <ul className="relative z-10 flex flex-wrap items-center justify-center gap-x-1 gap-y-1">
                {site.nav.map((item) => (
                  <li key={item.id}>
                    <NavLink to={item.href} end={item.href === "/"} className={navLinkClass}>
                      {({ isActive }) => (
                        <span
                          className={`nav-menu-link relative inline-flex rounded-full px-3.5 py-2 transition-colors ${
                            isActive ? "nav-menu-link-active text-primary" : ""
                          }`}
                        >
                          {item.label}
                          {isActive && (
                            <span className="nav-menu-active-glow absolute inset-0 rounded-full" aria-hidden="true" />
                          )}
                        </span>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="hidden gap-1 lg:grid">
            <a
              href={`mailto:${site.email}`}
              className="max-w-[220px] truncate text-sm font-medium transition hover:text-primary xl:max-w-none"
              title={site.email}
            >
              {site.email}
            </a>
            <p className="text-xs text-muted">
              {site.timezone} · <Clock />
            </p>
          </div>

          <button
            type="button"
            className="nav-menu-shell relative inline-flex overflow-hidden rounded-full border border-white/10 bg-black/40 px-4 py-2.5 text-sm font-medium tracking-tight backdrop-blur-md transition hover:text-primary lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <NavMenuBackground />
            <span className="relative z-10">{menuOpen ? "Close" : "Menu"}</span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex h-full flex-col px-6 pb-10 pt-28">
              <nav aria-label="Mobile">
                <ul className="space-y-6">
                  {site.nav.map((item) => (
                    <li key={item.id}>
                      <NavLink
                        to={item.href}
                        end={item.href === "/"}
                        className={({ isActive }) =>
                          `text-3xl font-semibold tracking-tight transition hover:text-primary sm:text-4xl ${
                            isActive ? "text-primary" : ""
                          }`
                        }
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-auto space-y-4 border-t border-border pt-8">
                <a
                  href={`mailto:${site.email}`}
                  className="block break-all text-sm font-medium transition hover:text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {site.email}
                </a>
                <p className="text-xs text-muted">
                  {site.timezone} · <Clock />
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer on non-home routes so content clears fixed header */}
      {!isHome && <div className="h-[72px] sm:h-[80px]" aria-hidden="true" />}
    </>
  );
}

function Clock() {
  const [time, setTime] = useState(getTime);

  useEffect(() => {
    const id = window.setInterval(() => setTime(getTime()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  return <span>{time}</span>;
}

function getTime() {
  return new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "America/New_York",
  });
}
