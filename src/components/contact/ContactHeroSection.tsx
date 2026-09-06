import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLenis } from "lenis/react";
import { contactInfo } from "../../data/contact";
import { ChevronIcon } from "../icons/ChevronIcon";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";
import { ContactRobot } from "./ContactRobot";

export function ContactHeroSection() {
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const wordY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const robotY = useTransform(scrollYProgress, [0, 1], [0, -56]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 28]);

  const scrollToChannels = () => {
    if (lenis) {
      lenis.scrollTo("#contact-channels", { offset: -96, duration: 1.85 });
      return;
    }
    document.getElementById("contact-channels")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={sectionRef} className="relative overflow-hidden">
      <div className="contact-hero-gradient absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[min(70vh,620px)] max-w-[1320px] items-center justify-center px-4 pt-24 sm:min-h-[min(62vh,580px)] sm:px-6 sm:pt-28">
        <motion.p
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center text-[clamp(5.5rem,28vw,13rem)] font-extrabold leading-none tracking-[-0.07em] text-foreground/[0.07]"
          style={reducedMotion ? undefined : { y: wordY }}
          aria-hidden="true"
        >
          CONTACT
        </motion.p>

        <motion.div
          className="relative z-10"
          style={reducedMotion ? undefined : { y: robotY }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <ContactRobot />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px] px-4 pb-6 sm:px-6 sm:pb-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          style={reducedMotion ? undefined : { y: copyY }}
        >
          <motion.h1
            className="text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.08] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {contactInfo.headline}
          </motion.h1>
          <motion.p
            className="mt-4 text-sm leading-relaxed text-foreground/88 sm:text-base sm:leading-[1.65]"
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

        <div className="mt-8 flex justify-center pb-2">
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
