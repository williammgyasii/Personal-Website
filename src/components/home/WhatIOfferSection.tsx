import { motion } from "framer-motion";
import { services } from "../../data/services";
import { ServiceIcon } from "../icons/ServiceIcons";

export function WhatIOfferSection() {
  return (
    <section id="services" className="relative border-t border-border bg-surface">
      <div className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-10 grid gap-4 border-t border-border pt-5 sm:mb-14 sm:grid-cols-[1.2fr_.8fr] sm:items-end">
            <div>
              <p className="text-xs font-medium tracking-[0.14em] text-muted">03 / CAPABILITIES</p>
              <h2 className="mt-2 text-[clamp(1.75rem,4vw,3rem)] font-semibold tracking-tight">
                Design-led engineering.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted sm:justify-self-end sm:text-base">
              I bridge product thinking and implementation so the experience stays coherent from first screen to production.
            </p>
          </div>

          <ul>
            {services.map((service, index) => (
              <motion.li
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="grid grid-cols-[48px_44px_1fr] items-center gap-4 border-b border-border py-6 sm:grid-cols-[72px_56px_1.2fr_.9fr] sm:gap-6 sm:py-8"
              >
                <span className="text-sm text-muted">{String(index + 1).padStart(2, "0")}</span>
                <span className="grid h-11 w-11 place-items-center rounded-full border border-border text-primary">
                  <ServiceIcon name={service.icon} />
                </span>
                <h3 className="text-lg font-semibold tracking-tight sm:text-2xl">{service.title}</h3>
                <p className="col-span-3 text-sm leading-relaxed text-muted sm:col-span-1 sm:text-base">
                  {service.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
