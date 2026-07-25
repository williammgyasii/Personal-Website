import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { site } from "../../data/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `inline-flex items-start gap-1 text-xs font-medium tracking-tight transition hover:text-primary ${
      isActive ? "text-primary" : ""
    }`;

  return (
    <>
      <header className="relative z-30 -mb-16 px-4 py-4 sm:-mb-20 md:-mb-[116px] md:py-9">
        <div className="mx-auto grid max-w-[1320px] grid-cols-[1fr_auto] items-center gap-4 md:grid-cols-[auto_1fr_auto_auto] md:items-start md:gap-6">
          <Link
            to="/"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-border text-sm font-bold tracking-tight transition hover:border-primary hover:text-primary sm:h-11 sm:w-11"
            aria-label="Home"
          >
            WG
          </Link>

          <nav className="hidden justify-center lg:flex" aria-label="Primary">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {site.nav.map((item, index) => (
                <li key={item.id}>
                  <NavLink to={item.href} end={item.href === "/"} className={navLinkClass}>
                    <span className="text-[8px] leading-3 text-muted">
                      {String(index + 1).padStart(2, "0")} /
                    </span>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden gap-1 md:grid">
            <a
              href={`mailto:${site.email}`}
              className="max-w-[200px] truncate text-xs font-medium tracking-tight transition hover:text-primary lg:max-w-none"
              title={site.email}
            >
              {site.email.toUpperCase()}
            </a>
            <p className="text-xs text-muted">
              {site.timezone} <Clock />
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-tight transition hover:text-primary lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex h-full flex-col px-6 pb-10 pt-24">
              <nav aria-label="Mobile">
                <ul className="space-y-6">
                  {site.nav.map((item, index) => (
                    <li key={item.id}>
                      <NavLink
                        to={item.href}
                        end={item.href === "/"}
                        className={({ isActive }) =>
                          `flex items-baseline gap-3 text-3xl font-semibold tracking-tight transition hover:text-primary sm:text-4xl ${
                            isActive ? "text-primary" : ""
                          }`
                        }
                        onClick={() => setMenuOpen(false)}
                      >
                        <span className="text-sm text-muted">
                          {String(index + 1).padStart(2, "0")}
                        </span>
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
