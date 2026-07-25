import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { profileInfo, timelineEntries } from "../data/about";
import { stats, techStack, valueProps } from "../data/home";
import { PageHeader } from "../components/layout/PageHeader";

export function AboutPage() {
  return (
    <>
      <PageHeader
        label="ABOUT"
        title="I build products people use—not decks people applaud."
        description={profileInfo.bio}
      />

      <div className="mx-auto max-w-[1320px] space-y-20 px-4 pb-24 sm:px-6 sm:pb-32">
        <section>
          <h2 className="mb-6 text-xl font-semibold tracking-tight">Why work with me</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {valueProps.map((item, i) => (
              <motion.div
                key={item.title}
                className="rounded-xl border border-border p-5"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <h3 className="mb-2 font-semibold text-primary">{item.title}</h3>
                <p className="text-sm text-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-xl font-semibold tracking-tight">By the numbers</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border p-4 sm:p-6">
                <p className="text-3xl font-semibold tracking-tighter text-primary sm:text-4xl">
                  {stat.number}
                </p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-xl font-semibold tracking-tight">Tech stack</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {techStack.map((group) => (
              <div key={group.category} className="rounded-xl border border-border p-5">
                <h3 className="mb-3 text-sm font-medium text-primary">{group.category}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-xl font-semibold tracking-tight">Career timeline</h2>
          <div className="space-y-8">
            {timelineEntries.map((entry, i) => (
              <motion.article
                key={entry.id}
                className="grid gap-4 border-l-2 border-primary/30 pl-6 md:grid-cols-[200px_1fr]"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div>
                  <p className="text-xs text-muted">{entry.duration}</p>
                  <p className="text-xs text-muted">{entry.country}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{entry.title}</h3>
                  <p className="mb-2 text-sm text-primary">{entry.company}</p>
                  <p className="mb-3 text-sm text-muted">{entry.description}</p>
                  <ul className="space-y-1">
                    {entry.responsibilities.map((r) => (
                      <li key={r} className="text-sm text-muted before:mr-2 before:text-primary before:content-['·']">
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/work"
            className="inline-flex h-11 items-center rounded-full border border-border px-6 text-xs font-medium transition hover:border-primary hover:text-primary"
          >
            VIEW WORK EXPERIENCE →
          </Link>
          <Link
            to="/projects"
            className="inline-flex h-11 items-center rounded-full border border-primary bg-primary/10 px-6 text-xs font-medium text-primary transition hover:bg-primary/20"
          >
            SEE PROJECTS →
          </Link>
        </div>
      </div>
    </>
  );
}
