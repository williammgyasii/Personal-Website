import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { useLenis } from "lenis/react";
import { contactInfo } from "../../data/contact";
import { ChevronIcon } from "../icons/ChevronIcon";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";

export function ContactHeroSection() {
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 32]);

  const scrollToChannels = () => {
    if (lenis) {
      lenis.scrollTo("#contact-channels", { offset: -96, duration: 1.85 });
      return;
    }
    document.getElementById("contact-channels")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={sectionRef} className="relative overflow-hidden">
      {!reducedMotion && (
        <ParallaxBanner className="pointer-events-none absolute inset-x-0 top-0 h-[min(36vh,340px)]">
          <ParallaxBannerLayer speed={-18} className="absolute inset-0">
            <div className="contact-hero-gradient absolute inset-0" />
          </ParallaxBannerLayer>
          <ParallaxBannerLayer speed={-28} className="absolute inset-0 flex items-center justify-center">
            <p
              className="select-none text-center text-[clamp(3.5rem,16vw,10rem)] font-bold leading-[0.88] tracking-[-0.05em] text-foreground/[0.04]"
              aria-hidden="true"
            >
              CONTACT
            </p>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      )}

      <div className="relative z-10 mx-auto max-w-[1320px] px-4 pt-28 sm:px-6 sm:pt-32">
        <motion.div style={reducedMotion ? undefined : { y: textY }}>
          <motion.p
            className="text-xs font-medium tracking-[0.14em] text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            CONTACT
          </motion.p>
          <motion.h1
            className="mt-2 max-w-3xl text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.08] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {contactInfo.headline}
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/88 sm:text-base sm:leading-[1.65]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {contactInfo.intro}
          </motion.p>
          <motion.p
            className="mt-3 text-xs text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.14, duration: 0.5 }}
          >
            {contactInfo.location} · {contactInfo.timezone}
          </motion.p>
        </motion.div>

        <div className="mt-6 flex justify-center pb-2 sm:mt-8">
          <button
            type="button"
            onClick={scrollToChannels}
            className="flex flex-col items-center gap-2 text-[10px] font-medium tracking-[0.18em] text-faint transition hover:text-primary"
            aria-label="Scroll to contact channels"
          >
            <span>REACH ME</span>
            <ChevronIcon direction="down" className="hero-scroll-cue-arrow h-4 w-4 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
}
