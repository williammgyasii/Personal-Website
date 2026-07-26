import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { useLenis } from "lenis/react";
import { ChevronIcon } from "../icons/ChevronIcon";
import { aboutSnippet, profileInfo } from "../../data/about";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";

export function AboutHeroSection() {
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const lenis = useLenis();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -24]);

  const scrollToExpertise = () => {
    if (lenis) {
      lenis.scrollTo("#expertise", { offset: -96, duration: 1.85 });
      return;
    }
    document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {!reducedMotion && (
        <ParallaxBanner className="pointer-events-none absolute inset-x-0 top-0 h-[min(42vh,420px)]">
          <ParallaxBannerLayer speed={-18} className="absolute inset-0">
            <div className="about-hero-gradient absolute inset-0" />
          </ParallaxBannerLayer>
          <ParallaxBannerLayer speed={-28} className="absolute inset-0 flex items-center justify-center">
            <p
              className="select-none text-center text-[clamp(3.5rem,16vw,10rem)] font-bold leading-[0.88] tracking-[-0.05em] text-foreground/[0.04]"
              aria-hidden="true"
            >
              ABOUT
            </p>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      )}

      <div className="relative z-10 mx-auto max-w-[1320px] px-4 pb-10 pt-28 sm:px-6 sm:pb-14 sm:pt-32">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(240px,300px)_1fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-[300px] lg:mx-0"
            style={reducedMotion ? undefined : { y: imageY }}
          >
            <Parallax speed={-6} disabled={reducedMotion}>
              <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-secondary shadow-[0_16px_48px_rgba(0,0,0,0.08)]">
                <img
                  src={profileInfo.profileImage}
                  alt={`${profileInfo.shortName}, ${profileInfo.title}`}
                  className="aspect-[4/5] w-full object-cover"
                  width={300}
                  height={375}
                />
              </div>
            </Parallax>
            <p className="mt-4 text-center text-xs text-muted lg:text-left">{profileInfo.location}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            style={reducedMotion ? undefined : { y: textY }}
          >
            <p className="text-xs font-medium tracking-[0.14em] text-muted">ABOUT</p>
            <h1 className="mt-2 text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.08] tracking-tight">
              {profileInfo.headline}
            </h1>
            <p className="mt-3 text-base text-primary sm:text-lg">{profileInfo.title}</p>

            <div className="mt-6 space-y-4">
              {profileInfo.bioParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-3xl text-sm leading-relaxed text-foreground/88 sm:text-base sm:leading-[1.65]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="mt-6 flex flex-wrap gap-2">
              {aboutSnippet.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-surface-secondary px-3 py-1.5 text-[11px] font-medium text-foreground/80"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-medium text-white transition-colors hover:bg-[#0077ED]"
              >
                Get in touch
              </Link>
              <Link
                to="/work"
                className="inline-flex h-11 items-center rounded-full border border-border px-6 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                View work history
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex justify-center lg:mt-12">
          <button
            type="button"
            onClick={scrollToExpertise}
            className="flex flex-col items-center gap-2 text-[10px] font-medium tracking-[0.18em] text-faint transition hover:text-primary"
            aria-label="Scroll to expertise section"
          >
            <span>EXPLORE EXPERTISE</span>
            <ChevronIcon direction="down" className="hero-scroll-cue-arrow h-4 w-4 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}
