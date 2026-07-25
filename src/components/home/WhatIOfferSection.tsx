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
            <h2 className="max-w-2xl text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-tight">
              What I offer
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted">
              Full stack ownership from schema design to production billing.
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
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group list-none"
    >
      <article className="relative flex h-full flex-col border-t border-border pt-6 sm:pt-7">
        <div className="flex flex-1 flex-col">
          <h3 className="mb-3 text-lg font-semibold tracking-tight sm:text-xl">{service.title}</h3>
          <p className="mb-5 flex-1 text-sm leading-relaxed text-white/75">{service.description}</p>

          <div className="border-t border-border pt-4">
            <TechBubbles items={toCapabilityBubbles(service.items)} />
          </div>
        </div>
      </article>
    </motion.li>
  );
}
