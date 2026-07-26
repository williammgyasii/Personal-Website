import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLenis } from "lenis/react";
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import type { ProjectDetail } from "../../types/project";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";

type FeaturedProjectSectionProps = {
  project: ProjectDetail;
};

export function FeaturedProjectSection({ project }: FeaturedProjectSectionProps) {
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const lenis = useLenis();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "4%"]);
  const contentY = useTransform(scrollYProgress, [0, 0.55, 1], [0, -24, -64]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65, 0.92], [1, 1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 0.35]);
  const labelOpacity = useTransform(scrollYProgress, [0, 0.15], [0.4, 1]);

  const scrollToGrid = () => {
    if (lenis) {
      lenis.scrollTo("#more-projects", { offset: -96, duration: 1.85 });
      return;
    }
    document.getElementById("more-projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (reducedMotion) {
    return (
      <section className="border-b border-border bg-surface-secondary px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[1320px]">
          <FeaturedProjectStatic project={project} onExplore={scrollToGrid} />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0b0b0c] text-white"
      style={{ height: "165vh" }}
      aria-labelledby="featured-project-heading"
    >
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        <ParallaxBanner className="absolute inset-0">
          <ParallaxBannerLayer speed={-18} className="absolute inset-0">
            <div className="featured-project-gradient absolute inset-0" />
          </ParallaxBannerLayer>

          <ParallaxBannerLayer speed={-28} className="absolute inset-0 flex items-center justify-center">
            <p
              className="pointer-events-none select-none text-center text-[clamp(4rem,18vw,12rem)] font-bold leading-[0.85] tracking-[-0.05em] text-white/[0.04]"
              aria-hidden="true"
            >
              FEATURED
            </p>
          </ParallaxBannerLayer>

          <ParallaxBannerLayer speed={-6} className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0b0c]/20 to-[#0b0b0c]" />
          </ParallaxBannerLayer>
        </ParallaxBanner>

        <motion.div
          style={{ opacity: overlayOpacity }}
          className="pointer-events-none absolute inset-0 z-20 bg-[#f5f5f7]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex h-full max-w-[1320px] flex-col px-4 sm:px-6">
          <motion.p
            style={{ opacity: labelOpacity }}
            className="pt-28 text-xs font-medium tracking-[0.18em] text-white/50 sm:pt-32"
          >
            FEATURED PROJECT
          </motion.p>

          <motion.div style={{ y: contentY, opacity: contentOpacity }} className="flex flex-1 flex-col pb-24">
            <h2
              id="featured-project-heading"
              className="mt-4 max-w-4xl text-[clamp(2.5rem,8vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.03em]"
            >
              {project.name}
            </h2>
            <p className="mt-4 max-w-2xl text-base text-primary sm:text-xl">{project.subline}</p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base sm:leading-[1.65]">
              {project.description}
            </p>

            <div className="relative mt-8 flex-1 overflow-hidden rounded-3xl border border-white/10 sm:mt-10">
              <motion.div style={{ scale: imageScale, y: imageY }} className="h-full min-h-[240px] sm:min-h-[320px] lg:min-h-[420px]">
                <Parallax speed={-10} className="h-full">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover"
                  />
                </Parallax>
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-transparent to-transparent" />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to={`/projects/${project.slug}`}
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-white transition-colors hover:bg-[#0077ED] sm:h-14 sm:px-10 sm:text-base"
              >
                View case study →
              </Link>
              <button
                type="button"
                onClick={scrollToGrid}
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-8 text-sm font-medium text-white transition hover:border-white/40 sm:h-14 sm:px-10 sm:text-base"
              >
                More projects ↓
              </button>
            </div>
          </motion.div>

          <motion.button
            type="button"
            onClick={scrollToGrid}
            style={{ opacity: contentOpacity }}
            className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-medium tracking-[0.18em] text-white/45 transition hover:text-primary"
            aria-label="Scroll to more projects"
          >
            <span>MORE PROJECTS</span>
            <span className="hero-scroll-cue-arrow text-primary">↓</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectStatic({
  project,
  onExplore,
}: {
  project: ProjectDetail;
  onExplore: () => void;
}) {
  return (
    <>
      <p className="text-xs font-medium tracking-[0.18em] text-muted">FEATURED PROJECT</p>
      <h2 className="mt-3 text-[clamp(2rem,6vw,3.5rem)] font-semibold tracking-tight">{project.name}</h2>
      <p className="mt-2 text-lg text-primary">{project.subline}</p>
      <p className="mt-4 max-w-2xl text-muted">{project.description}</p>
      <img
        src={project.image}
        alt={project.name}
        className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover"
      />
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex h-12 items-center rounded-full bg-primary px-8 text-sm font-medium text-white"
        >
          View case study →
        </Link>
        <button
          type="button"
          onClick={onExplore}
          className="inline-flex h-12 items-center rounded-full border border-border px-8 text-sm font-medium"
        >
          More projects ↓
        </button>
      </div>
    </>
  );
}
