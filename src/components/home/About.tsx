import { motion } from "framer-motion";
import { stats } from "../../data/services";
import { projects } from "../../data/projects";

export function About() {
  const flagships = projects.filter((p) => p.flagship);

  return (
    <section id="about" className="border-t border-border py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <motion.p
              className="mb-4 text-xs tracking-tight text-muted"
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
              Engineering products that ship—and sell.
            </motion.h2>
            <motion.p
              className="mb-5 max-w-lg text-sm leading-relaxed text-muted sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              I&apos;m William Gyasi—a full-stack engineer who builds AI-native SaaS,
              mobile apps, and platform software. Six live products. Two flagships.
              From multi-tenant backends to desktop release pipelines, I own the
              vertical from schema design to production deploy.
            </motion.p>
            <motion.p
              className="max-w-lg text-sm leading-relaxed text-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Currently building{" "}
              {flagships.map((p) => p.name).join(" and ")}—plus live platforms in
              edtech, marketplaces, and developer tools that real users depend on.
            </motion.p>
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
                whileHover={{ y: -4, borderColor: "rgba(7,196,44,0.5)" }}
                transition={{ delay: i * 0.05 }}
              >
                <p className="text-3xl font-semibold tracking-tighter text-primary sm:text-4xl md:text-5xl">
                  {stat.value}
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
