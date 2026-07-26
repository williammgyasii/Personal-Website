import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ContactHeroSection } from "../components/contact/ContactHeroSection";
import { SocialIcon } from "../components/icons/SocialIcons";
import {
  contactCardThemes,
  defaultContactCardTheme,
} from "../components/contact/contactCardThemes";
import { contactChannels, contactInfo, type ContactChannel } from "../data/contact";
import { usePrefersReducedMotion } from "../hooks/useMediaQuery";

function SectionIntro({
  label,
  title,
  description,
  id,
}: {
  label: string;
  title: string;
  description?: string;
  id?: string;
}) {
  return (
    <div>
      <p className="text-xs font-medium tracking-[0.14em] text-muted">{label}</p>
      <h2 id={id} className="mt-1 text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">{description}</p>
      )}
    </div>
  );
}

function ContactPricingCard({
  channel,
  index,
  reducedMotion,
}: {
  channel: ContactChannel;
  index: number;
  reducedMotion: boolean;
}) {
  const theme = contactCardThemes[channel.id] ?? defaultContactCardTheme;
  const featured = channel.featured === true;
  const isEmail = channel.id === "email";
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
  };

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 32 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        reducedMotion
          ? undefined
          : {
              y: featured ? -10 : -6,
              scale: featured ? 1.025 : 1.015,
              transition: { type: "spring", stiffness: 400, damping: 24 },
            }
      }
      className={`pricing-value-card group relative flex h-full flex-col overflow-hidden rounded-3xl ${
        featured ? "pricing-value-card-featured lg:-mt-2" : ""
      }`}
      style={{
        border: featured ? `1.5px solid ${theme.accent}55` : `1px solid ${theme.border}`,
        boxShadow: featured
          ? "0 24px 60px rgba(0, 113, 227, 0.12)"
          : "0 10px 36px rgba(0,0,0,0.05)",
      }}
    >
      <div className="pointer-events-none absolute inset-0" style={{ background: theme.surface }} aria-hidden />

      {featured && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1"
          style={{ background: `linear-gradient(90deg, transparent, ${theme.accent}, transparent)` }}
          aria-hidden
        />
      )}

      <div
        className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
        style={{ background: theme.glow }}
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40%] overflow-hidden" aria-hidden>
        <p
          className="expertise-card-watermark absolute right-[-0.04em] top-[0.2em] max-w-[108%] text-right text-[clamp(2.25rem,10vw,3.75rem)] font-bold uppercase leading-[0.82] tracking-tighter"
          style={{ backgroundImage: theme.watermarkGradient }}
        >
          {channel.label}
        </p>
      </div>

      <div className="relative z-10 flex min-h-[17rem] flex-1 flex-col p-6 sm:min-h-[18rem] sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <span
            className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]"
            style={{ background: `${theme.accent}14`, color: theme.accent }}
          >
            {channel.badge}
          </span>
          {featured && (
            <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
              Featured
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center gap-3">
          <span
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
            style={{
              background: featured ? theme.accent : `${theme.accent}12`,
              color: featured ? "#fff" : theme.accent,
            }}
          >
            <SocialIcon name={channel.icon} />
          </span>
          <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            {channel.label}
          </h3>
        </div>

        <p
          className="mt-3 text-[clamp(1.25rem,3vw,1.5rem)] font-semibold leading-tight tracking-tight"
          style={{ color: theme.accent }}
        >
          {channel.tagline}
        </p>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/85 sm:text-[0.9375rem] sm:leading-[1.65]">
          {channel.description}
        </p>

        {isEmail && (
          <p className="mt-4 text-sm font-medium tracking-tight text-foreground/75">
            {contactInfo.email}
          </p>
        )}

        <a
          href={channel.href}
          target="_blank"
          rel="noreferrer"
          className="contact-card-btn relative z-20 mt-6 flex h-14 w-full items-center justify-center rounded-full px-5 text-center text-base font-semibold tracking-tight transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:shadow-[0_10px_28px_rgba(0,0,0,0.14)] sm:text-lg"
          style={{
            background: featured ? theme.accent : `${theme.accent}10`,
            color: featured ? "#ffffff" : theme.accent,
            border: featured ? "none" : `1px solid ${theme.border}`,
            ["--contact-btn-accent" as string]: theme.accent,
          }}
        >
          {channel.cta}
        </a>

        {isEmail && (
          <button
            type="button"
            onClick={() => void copyEmail()}
            aria-live="polite"
            className={`relative z-20 mt-3 text-xs font-medium transition ${
              copied ? "text-primary" : "text-muted hover:text-primary"
            }`}
          >
            {copied ? "Copied!" : "Copy email address"}
          </button>
        )}
      </div>
    </motion.article>
  );
}

export function ContactPage() {
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    document.title = contactInfo.seoTitle;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", contactInfo.seoDescription);
  }, []);

  return (
    <section className="border-b border-border bg-surface">
      <ContactHeroSection />

      <div
        id="contact-channels"
        className="scroll-mt-28 border-t border-border/60 bg-surface-secondary pb-14 pt-8 sm:pb-16 sm:pt-10"
        aria-labelledby="contact-channels-heading"
      >
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionIntro
              label="CHANNELS"
              id="contact-channels-heading"
              title="Reach me here"
              description="Email for scope and roles. GitHub for code. LinkedIn for background."
            />
          </motion.div>

          <div className="mt-6 grid gap-5 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:items-stretch">
            {contactChannels.map((channel, i) => (
              <ContactPricingCard
                key={channel.id}
                channel={channel}
                index={i}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <Link
              to="/projects"
              className="inline-flex h-10 items-center rounded-full border border-border bg-surface px-5 text-sm font-medium transition hover:border-primary hover:text-primary"
            >
              View projects
            </Link>
            <Link
              to="/work"
              className="inline-flex h-10 items-center rounded-full border border-border bg-surface px-5 text-sm font-medium transition hover:border-primary hover:text-primary"
            >
              Work history
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
