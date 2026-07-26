import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "../../data/services";

export function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="relative overflow-hidden py-16 sm:py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <motion.img
          key={current.id}
          src={current.image}
          alt=""
          className="h-full w-full object-cover opacity-20 sm:opacity-30"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute inset-0 bg-white/90 sm:bg-white/85" />
      </div>

      <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
        <motion.h2
          className="mb-10 text-[clamp(2rem,7vw,4.5rem)] font-semibold tracking-tighter sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Services
        </motion.h2>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-12">
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:block lg:space-y-2 lg:overflow-visible lg:px-0 lg:pb-0">
            {services.map((service, index) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setActive(index)}
                className={`shrink-0 rounded-full border px-4 py-3 text-left text-xs font-medium transition sm:text-sm lg:block lg:w-full lg:shrink lg:rounded-none lg:border-0 lg:border-l-2 lg:px-0 lg:py-4 lg:pl-5 lg:pr-2 ${
                  active === index
                    ? "border-primary bg-primary/10 text-primary lg:border-primary lg:bg-transparent"
                    : "border-border text-muted hover:border-primary/40 hover:text-foreground lg:border-border lg:hover:border-primary/40"
                }`}
              >
                <span className="mr-2 text-[10px] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="whitespace-nowrap lg:whitespace-normal">
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-neutral-50/90 p-6 backdrop-blur-sm sm:p-8 md:p-10"
          >
            <h3 className="mb-3 text-xl font-semibold tracking-tight sm:mb-4 sm:text-2xl">
              {current.title}
            </h3>
            <p className="mb-6 max-w-xl text-sm leading-relaxed text-muted sm:mb-8">
              {current.description}
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {current.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-primary before:content-['']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
