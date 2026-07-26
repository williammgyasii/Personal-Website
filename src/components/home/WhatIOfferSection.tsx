import { motion } from "framer-motion";
import { services, type ServiceAccent } from "../../data/services";
import { ServiceIcon } from "../icons/ServiceIcons";

const accentStyles: Record<ServiceAccent, { box: string; tag: string }> = {
  primary: {
    box: "border-primary/30 bg-primary/10 text-primary",
    tag: "border-border bg-neutral-50 text-muted",
  },
  muted: {
    box: "border-border bg-neutral-50 text-muted",
    tag: "border-border bg-neutral-50 text-muted",
  },
};

export function WhatIOfferSection() {
  return (
    <section id="services" className="relative border-t border-border bg-surface-secondary">
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
      <article className="h-full rounded-2xl border border-border bg-surface p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:p-6">
        <div className="mb-5 flex items-start gap-4">
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${accent.box}`}
          >
            <ServiceIcon name={service.icon} />
          </div>
          <h3 className="pt-1 text-lg font-semibold tracking-tight sm:text-xl">
            {service.title}
          </h3>
        </div>

        <p className="mb-5 text-sm leading-relaxed text-muted">{service.description}</p>

        <ul className="flex flex-wrap gap-2">
          {service.items.map((item) => (
            <li
              key={item}
              className={`rounded-md border px-2.5 py-1 text-[11px] font-medium ${accent.tag}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </article>
    </motion.li>
  );
}
