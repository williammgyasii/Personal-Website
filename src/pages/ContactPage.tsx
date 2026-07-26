import { motion } from "framer-motion";
import { site } from "../data/site";
import { FloatingShape } from "../components/three/FloatingShape";
import { PageHeader } from "../components/layout/PageHeader";

const links = [
  { label: "GitHub", href: "https://github.com/williammgyasii" },
  { label: "LinkedIn", href: "https://linkedin.com/in/williammgyasii" },
  { label: "Email", href: `mailto:${site.email}` },
];

export function ContactPage() {
  return (
    <section className="relative overflow-hidden pb-16 sm:pb-24">
      <FloatingShape className="absolute -left-16 bottom-0 hidden h-[320px] w-[320px] opacity-40 md:block" />

      <PageHeader
        label="CONTACT"
        title="Let's build something real."
        description="Open to full-time roles, contract engagements, and co-building flagship products. Tell me what you're shipping and who it's for—I'll tell you how we get it to production."
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-6">
        <motion.div
          className="rounded-2xl border border-border bg-surface p-6 shadow-[0_2px_16px_rgba(0,0,0,0.06)] sm:rounded-3xl sm:p-10 md:p-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
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
      </div>
    </section>
  );
}
