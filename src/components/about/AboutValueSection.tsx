import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { aboutValueProps, type AboutValueProp } from "../../data/about";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";
import { ChevronIcon } from "../icons/ChevronIcon";
import {
  defaultValueCardTheme,
  valueCardThemes,
} from "./valueCardThemes";

function CheckIcon({ accent }: { accent: string }) {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <rect width="16" height="16" rx="8" fill={`${accent}18`} />
      <path
        d="M4.75 8.1 6.9 10.25 11.35 5.65"
        stroke={accent}
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PricingValueCard({
  item,
  index,
  reducedMotion,
  cardRef,
}: {
  item: AboutValueProp;
  index: number;
  reducedMotion: boolean;
  cardRef: (node: HTMLElement | null) => void;
}) {
  const theme = valueCardThemes[item.id] ?? defaultValueCardTheme;
  const featured = item.featured === true;

  return (
    <motion.article
      ref={cardRef}
      data-value-card-index={index}
      initial={reducedMotion ? false : { opacity: 0, y: 32 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        reducedMotion
          ? undefined
          : {
              y: featured ? -10 : -6,
              scale: featured ? 1.03 : 1.015,
              transition: { type: "spring", stiffness: 380, damping: 26 },
            }
      }
      className={`pricing-value-card relative flex h-full w-[min(82vw,340px)] shrink-0 snap-center flex-col overflow-hidden rounded-3xl bg-surface sm:w-[320px] lg:w-[300px] xl:w-[calc((min(100%,1320px)-4rem)/3.15)] ${
        featured ? "pricing-value-card-featured z-10 lg:-mt-3 lg:mb-3" : ""
      }`}
      style={{
        border: featured ? `1.5px solid ${theme.accent}55` : `1px solid ${theme.border}`,
        boxShadow: featured
          ? "0 24px 60px rgba(88, 86, 214, 0.14)"
          : "0 10px 36px rgba(0,0,0,0.05)",
      }}
    >
      {featured && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1"
          style={{
            background: `linear-gradient(90deg, transparent, ${theme.accent}, transparent)`,
          }}
          aria-hidden
        />
      )}

      <div
        className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full opacity-40 blur-3xl"
        style={{ background: theme.glow }}
        aria-hidden
      />

      <div className="relative z-10 flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          {item.badge ? (
            <span
              className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]"
              style={{ background: `${theme.accent}14`, color: theme.accent }}
            >
              {item.badge}
            </span>
          ) : (
            <span />
          )}
          {featured && (
            <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
              Featured
            </span>
          )}
        </div>

        <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          {item.title}
        </h3>

        <p
          className="mt-2 text-[clamp(1.35rem,4vw,1.75rem)] font-semibold leading-tight tracking-tight"
          style={{ color: theme.accent }}
        >
          {item.tagline}
        </p>

        <p className="mt-4 min-h-[4.5rem] text-sm leading-relaxed text-muted sm:min-h-[4rem] sm:text-[0.9375rem] sm:leading-[1.6]">
          {item.description}
        </p>

        <div className="my-5 h-px bg-border/80" />

        <ul className="space-y-3">
          {item.highlights.map((highlight, highlightIndex) => (
            <motion.li
              key={highlight}
              initial={reducedMotion ? false : { opacity: 0, x: -10 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 + highlightIndex * 0.05 + 0.15, duration: 0.4 }}
              className="flex items-start gap-2.5 text-sm leading-snug text-foreground/88"
            >
              <CheckIcon accent={theme.accent} />
              {highlight}
            </motion.li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <div
            className="flex h-11 items-center justify-center rounded-full text-sm font-medium transition-colors"
            style={{
              background: featured ? theme.accent : `${theme.accent}10`,
              color: featured ? "#ffffff" : theme.accent,
              border: featured ? "none" : `1px solid ${theme.border}`,
            }}
          >
            Included when you hire me
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function CarouselNavButton({
  direction,
  onClick,
  disabled,
  label,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-foreground transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-border disabled:hover:text-foreground"
    >
      <ChevronIcon direction={direction === "prev" ? "left" : "right"} />
    </button>
  );
}

export function AboutValueSection() {
  const reducedMotion = usePrefersReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = aboutValueProps.length;

  const scrollToCard = useCallback(
    (index: number) => {
      const container = scrollRef.current;
      const card = cardRefs.current[index];
      if (!container || !card) return;

      const left =
        card.offsetLeft - container.offsetLeft - (container.clientWidth - card.clientWidth) / 2;

      container.scrollTo({
        left: Math.max(0, left),
        behavior: reducedMotion ? "auto" : "smooth",
      });
      setActiveIndex(index);
    },
    [reducedMotion],
  );

  const goPrev = () => scrollToCard(Math.max(0, activeIndex - 1));
  const goNext = () => scrollToCard(Math.min(count - 1, activeIndex + 1));

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const syncActiveIndex = () => {
      const containerCenter = container.scrollLeft + container.clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const cardCenter = card.offsetLeft - container.offsetLeft + card.clientWidth / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", syncActiveIndex, { passive: true });
    syncActiveIndex();

    return () => container.removeEventListener("scroll", syncActiveIndex);
  }, []);

  return (
    <section
      id="about-value"
      aria-labelledby="about-value-heading"
      className="relative border-t border-border bg-surface-secondary py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="about-value-gradient absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-6">
        <ValueSectionHeader />

        <div className="relative mt-10 sm:mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-8 bg-gradient-to-r from-surface-secondary to-transparent sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-8 bg-gradient-to-l from-surface-secondary to-transparent sm:block" />

          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 pt-2 [scrollbar-width:none] sm:gap-6 lg:justify-start [&::-webkit-scrollbar]:hidden"
          >
            {aboutValueProps.map((item, i) => (
              <PricingValueCard
                key={item.id}
                item={item}
                index={i}
                reducedMotion={reducedMotion}
                cardRef={(node) => {
                  cardRefs.current[i] = node;
                }}
              />
            ))}
          </div>

          <div className="mt-6 flex flex-col items-center gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <CarouselNavButton
                direction="prev"
                onClick={goPrev}
                disabled={activeIndex === 0}
                label="Previous value card"
              />

              <div className="flex flex-wrap items-center justify-center gap-2">
                {aboutValueProps.map((item, i) => {
                  const theme = valueCardThemes[item.id] ?? defaultValueCardTheme;
                  const isActive = activeIndex === i;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollToCard(i)}
                      aria-label={`Go to ${item.title}`}
                      aria-current={isActive ? "true" : undefined}
                      className={`rounded-full px-3 py-1.5 text-[10px] font-medium transition sm:text-[11px] ${
                        isActive
                          ? "text-white shadow-sm"
                          : "border border-border bg-surface text-muted hover:border-primary/40 hover:text-foreground"
                      }`}
                      style={
                        isActive
                          ? { background: theme.accent }
                          : undefined
                      }
                    >
                      {item.title}
                    </button>
                  );
                })}
              </div>

              <CarouselNavButton
                direction="next"
                onClick={goNext}
                disabled={activeIndex === count - 1}
                label="Next value card"
              />
            </div>

            <p className="text-[10px] font-medium tracking-[0.2em] text-faint">
              {String(activeIndex + 1).padStart(2, "0")} / {String(count).padStart(2, "0")} · SWIPE
              OR PRESS
            </p>
          </div>
        </div>

        <motion.div
          className="mt-10 flex justify-center sm:mt-12"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link
            to="/contact"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-8 text-sm font-medium text-white transition-colors hover:bg-[#0077ED]"
          >
            Let&apos;s work together
            <ChevronIcon direction="right" className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ValueSectionHeader() {
  return (
    <div className="text-center">
      <p className="text-xs font-medium tracking-[0.14em] text-muted">VALUE</p>
      <h2
        id="about-value-heading"
        className="mt-1 text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold tracking-tight"
      >
        Why teams hire me
      </h2>
      <p className="mx-auto mt-2 max-w-2xl text-sm text-muted sm:text-base">
        Think of it like a package deal: system design, production shipping, full stack ownership,
        AI guardrails, and product impact. All included.
      </p>
    </div>
  );
}
