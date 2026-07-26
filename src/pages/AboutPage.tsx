import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronIcon } from "../components/icons/ChevronIcon";
import { AboutExpertiseSection } from "../components/about/AboutExpertiseSection";
import { AboutHeroSection } from "../components/about/AboutHeroSection";
import { AboutValueSection } from "../components/about/AboutValueSection";
import {
  aboutRolePreview,
  profileInfo,
} from "../data/about";

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

export function AboutPage() {
  useEffect(() => {
    document.title = profileInfo.seoTitle;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", profileInfo.seoDescription);
  }, []);

  return (
    <>
      <AboutHeroSection />
      <AboutExpertiseSection />
      <AboutValueSection />

      <div className="mx-auto max-w-[1320px] space-y-16 px-4 pb-24 sm:space-y-20 sm:px-6 sm:pb-32">
        <section id="about-roles" className="scroll-mt-28" aria-labelledby="about-roles-heading">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <SectionIntro
              label="CAREER"
              id="about-roles-heading"
              title="Recent roles"
              description="Full timeline and responsibilities on the work page."
            />
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary underline decoration-primary/30 underline-offset-4 transition hover:decoration-primary"
            >
              Full work history
              <ChevronIcon direction="right" className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="space-y-4">
            {aboutRolePreview.map((entry, i) => (
              <motion.article
                key={entry.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className={`rounded-2xl border bg-surface p-5 sm:p-6 ${
                  entry.current ? "border-primary/25 ring-1 ring-primary/10" : "border-border"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{entry.title}</h3>
                    <p className="text-sm text-primary">{entry.company}</p>
                  </div>
                  <div className="text-right text-xs text-muted">
                    <p>{entry.duration}</p>
                    <p>{entry.country}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/88 sm:text-base sm:leading-[1.65]">
                  {entry.description}
                </p>
                <p className="mt-3 text-xs font-medium text-primary">{entry.metric}</p>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
