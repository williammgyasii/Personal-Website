import { motion } from "framer-motion";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { services } from "../../data/services";
import { TechBubbles } from "./TechBubbles";
import type { ProjectTech } from "../../data/projects";

function toCapabilityBubbles(items: string[]): ProjectTech[] {
  return items.map((name, index) => ({
    name,
    tone: index % 2 === 0 ? "primary" : "accent",
  }));
}

export function WhatIOfferSection() {
  return (
    <section id="services" className="relative overflow-hidden border-t border-border">
      <ParallaxBanner className="relative h-[min(28vh,280px)] min-h-[180px] w-full">
        <ParallaxBannerLayer speed={-14} className="absolute inset-0">
          <div className="offer-gradient-bg absolute inset-0" />
        </ParallaxBannerLayer>

        <ParallaxBannerLayer speed={-22} className="absolute inset-0 flex items-center justify-center">
          <p
            className="pointer-events-none select-none text-center text-[clamp(3rem,14vw,9rem)] font-bold leading-[0.88] tracking-[-0.05em] text-white/[0.08]"
            aria-hidden="true"
          >
            WHAT I OFFER
          </p>
        </ParallaxBannerLayer>

        <ParallaxBannerLayer speed={-4} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/20 to-surface" />
        </ParallaxBannerLayer>
      </ParallaxBanner>

      <div className="relative z-10 px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="-mt-8 mb-10 sm:-mt-12 sm:mb-14">
            <p className="mb-2 text-xs tracking-[0.16em] text-muted">CAPABILITIES</p>
            <h2 className="max-w-2xl text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-tight">
              From schema design to production billing
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              Full stack ownership for teams that need one engineer who ships the whole product, not just a layer.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            {services.map((service, index) => (
              <OfferCard key={service.id} index={index} service={service} />
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
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <article className="offer-card relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-black/25 p-5 backdrop-blur-sm transition hover:border-primary/40 sm:p-6">
        <div className="offer-card-glow pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" aria-hidden="true" />

        <div className="relative z-10 flex flex-1 flex-col">
          <div className="mb-4 flex items-start justify-between gap-3">
            <span className="text-[10px] font-medium tabular-nums tracking-[0.2em] text-primary/80">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="mb-3 text-lg font-semibold tracking-tight sm:text-xl">{service.title}</h3>
          <p className="mb-5 flex-1 text-sm leading-relaxed text-white/75">{service.description}</p>

          <div className="space-y-3 border-t border-border pt-4">
            <p className="text-[10px] font-medium tracking-[0.16em] text-muted">INCLUDES</p>
            <TechBubbles items={toCapabilityBubbles(service.items)} />
          </div>
        </div>
      </article>
    </motion.li>
  );
}
