import { motion } from "framer-motion";
import { aboutSnippet, profileInfo } from "../../data/about";
import { stats } from "../../data/home";
import { projects } from "../../data/projects";

export function About() {
  const flagships = projects.filter((p) => p.flagship);

  return (
    <section id="about" className="border-t border-border bg-surface py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <motion.p
              className="mb-4 text-xs font-medium tracking-[0.14em] text-muted"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              ABOUT
            </motion.p>
            <motion.h2
              className="mb-6 text-[clamp(1.75rem,6vw,3.5rem)] font-semibold leading-tight tracking-tighter sm:mb-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {profileInfo.headline}
            </motion.h2>
            <motion.p
              className="mb-5 max-w-lg text-sm leading-relaxed text-muted sm:mb-6 sm:text-base sm:leading-[1.65]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              {profileInfo.bioParagraphs[0]}
            </motion.p>
            <motion.p
              className="max-w-lg text-sm leading-relaxed text-muted sm:text-base sm:leading-[1.65]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Currently building{" "}
              {flagships.map((p) => p.name).join(" and ")}, plus live platforms in supply chain,
              fintech, edtech, and developer tools that real users depend on.
            </motion.p>
            <motion.ul
              className="mt-6 flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              {aboutSnippet.highlights.slice(0, 3).map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-surface-secondary px-3 py-1 text-[11px] font-medium text-foreground/80"
                >
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            className="grid grid-cols-2 gap-3 sm:gap-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="rounded-xl border border-border p-4 sm:rounded-2xl sm:p-6"
                whileHover={{ y: -4, borderColor: "rgba(0,113,227,0.35)" }}
                transition={{ delay: i * 0.05 }}
              >
                <p className="text-3xl font-semibold tracking-tighter text-primary sm:text-4xl md:text-5xl">
                  {stat.number}
                </p>
                <p className="mt-1 text-[11px] tracking-tight text-muted sm:mt-2 sm:text-xs">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
