import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { site } from "../../data/site";

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
    `text-[15px] font-medium tracking-tight transition-colors hover:text-primary ${
      isActive ? "text-primary" : "text-foreground"
    }`;

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 px-4 py-4 transition-[background,border,backdrop-filter] duration-300 sm:px-6 ${
          scrolled || !isHome
            ? "border-b border-border/80 bg-surface/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto grid max-w-[1320px] grid-cols-[1fr_auto] items-center lg:grid-cols-[1fr_auto_1fr]">
          <Link
            to="/"
            className="justify-self-start text-[17px] font-extrabold tracking-tight text-foreground transition hover:text-primary"
            aria-label="Home"
          >
            WILLIAM
          </Link>

          <nav className="hidden items-center justify-center gap-8 lg:flex" aria-label="Primary">
            {site.nav.map((item) => (
              <NavLink key={item.id} to={item.href} end={item.href === "/"} className={navLinkClass}>
                {item.label === "HOME" ? "Home" : item.label.charAt(0) + item.label.slice(1).toLowerCase()}
              </NavLink>
            ))}
          </nav>

          <div className="hidden justify-self-end lg:block">
            <Link
              to="/contact"
              className="inline-flex h-10 items-center rounded-full border border-foreground px-5 text-sm font-medium transition hover:bg-foreground hover:text-surface"
            >
              Contact
            </Link>
          </div>

          <button
            type="button"
            className="justify-self-end text-sm font-medium tracking-tight lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-[60] bg-surface/96 backdrop-blur-xl lg:hidden"
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
                          `text-4xl font-semibold tracking-tight transition hover:text-primary ${
                            isActive ? "text-primary" : ""
                          }`
                        }
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label === "HOME" ? "Home" : item.label.charAt(0) + item.label.slice(1).toLowerCase()}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
              <Link
                to="/contact"
                className="mt-auto inline-flex h-12 items-center justify-center rounded-full border border-foreground text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isHome && <div className="h-[72px] sm:h-[80px]" aria-hidden="true" />}
    </>
  );
}
