import { motion } from "framer-motion";
import { site } from "../../data/site";
import { FloatingShape } from "../three/FloatingShape";

const links = [
  { label: "GitHub", href: "https://github.com/williammgyasii" },
  { label: "LinkedIn", href: "https://linkedin.com/in/williammgyasii" },
  { label: "Email", href: `mailto:${site.email}` },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border py-16 sm:py-24 md:py-32"
    >
      <FloatingShape className="absolute -left-16 bottom-0 hidden h-[320px] w-[320px] opacity-40 md:block" />

      <div className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-6">
        <motion.div
          className="rounded-2xl border border-border bg-surface p-6 shadow-[0_2px_16px_rgba(0,0,0,0.06)] sm:rounded-3xl sm:p-10 md:p-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-xs tracking-tight text-muted">CONTACT</p>
          <h2 className="mb-5 max-w-2xl text-[clamp(1.75rem,6vw,4rem)] font-semibold leading-tight tracking-tighter sm:mb-6">
            Let&apos;s build something{" "}
            <span className="text-primary">real</span>.
          </h2>
          <p className="mb-8 max-w-lg text-sm leading-relaxed text-muted sm:mb-10">
            Open to full-time roles, contract work, and co-building flagship
            products. Tell me what you&apos;re shipping—I&apos;ll tell you how we
            get it to production.
          </p>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-4">
            <motion.a
              href={`mailto:${site.email}`}
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-primary px-6 text-center text-[11px] font-normal text-white transition hover:bg-[#0077ED] sm:w-auto sm:px-8 sm:text-xs"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="break-all sm:break-normal">
                {site.email.toUpperCase()}
              </span>
            </motion.a>

            <div className="flex flex-wrap gap-4 sm:gap-5">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] items-center text-xs font-medium tracking-tight text-muted transition hover:text-primary"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <footer className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted sm:mt-16 sm:flex-row sm:items-center sm:gap-4 sm:pt-8">
          <span>© {site.year} William Gyasi</span>
          <span className="text-primary">Built with React · Vite · Three.js</span>
        </footer>
      </div>
    </section>
  );
}
