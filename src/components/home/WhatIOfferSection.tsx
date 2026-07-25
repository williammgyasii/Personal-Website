import { motion } from "framer-motion";
import { services, type ServiceAccent } from "../../data/services";
import { ServiceIcon } from "../icons/ServiceIcons";

const accentStyles: Record<
  ServiceAccent,
  { box: string; icon: string; tag: string }
> = {
  violet: {
    box: "bg-violet-500/12 border-violet-400/25 text-violet-200",
    icon: "text-violet-300",
    tag: "bg-violet-500/10 text-violet-200/90 border-violet-400/20",
  },
  sky: {
    box: "bg-sky-500/12 border-sky-400/25 text-sky-200",
    icon: "text-sky-300",
    tag: "bg-sky-500/10 text-sky-200/90 border-sky-400/20",
  },
  amber: {
    box: "bg-amber-500/12 border-amber-400/25 text-amber-200",
    icon: "text-amber-300",
    tag: "bg-amber-500/10 text-amber-200/90 border-amber-400/20",
  },
  rose: {
    box: "bg-rose-500/12 border-rose-400/25 text-rose-200",
    icon: "text-rose-300",
    tag: "bg-rose-500/10 text-rose-200/90 border-rose-400/20",
  },
};

export function WhatIOfferSection() {
  return (
    <section id="services" className="relative border-t border-border">
      <div className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-10 sm:mb-14">
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-tight">
              What I offer
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted">
              Full stack ownership from schema design to production billing.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6">
            {services.map((service, index) => (
              <OfferCard
                key={service.id}
                index={index}
                accent={accentStyles[service.accent]}
                service={service}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function OfferCard({
  service,
  index,
  accent,
}: {
  service: (typeof services)[number];
  index: number;
  accent: (typeof accentStyles)[ServiceAccent];
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="list-none"
    >
      <article className="service-card group h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition hover:border-white/15 hover:bg-white/[0.035] sm:p-6">
        <div className="mb-5 flex items-start gap-4">
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${accent.box}`}
          >
            <span className={accent.icon}>
              <ServiceIcon name={service.icon} />
            </span>
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
              {service.title}
            </h3>
          </div>
        </div>

        <p className="mb-5 text-sm leading-relaxed text-white/70">{service.description}</p>

        <ul className="flex flex-wrap gap-2">
          {service.items.map((item) => (
            <li
              key={item}
              className={`rounded-lg border px-2.5 py-1 text-[11px] font-medium ${accent.tag}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </article>
    </motion.li>
  );
}
