import { useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { projects, type Project } from "../../data/projects";
import { useIsMobile, usePrefersReducedMotion } from "../../hooks/useMediaQuery";
import { TechBubbles } from "./TechBubbles";
import { ProjectShowcaseImage } from "./ProjectShowcaseImage";

function smoothstep(t: number) {
  const x = Math.max(0, Math.min(1, t));
  return x * x * (3 - 2 * x);
}

function useSmoothScrollProgress(progress: MotionValue<number>, enabled: boolean) {
  return useSpring(progress, {
    stiffness: enabled ? 64 : 300,
    damping: enabled ? 24 : 40,
    mass: 0.85,
    restDelta: 0.0005,
  });
}

export function SelectedWorks() {
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollVhPerProject = isMobile ? 105 : 88;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSmoothScrollProgress(scrollYProgress, !reducedMotion);

  return (
    <section id="works" className="relative isolate scroll-mt-28 bg-surface">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <Parallax speed={-4} disabled={reducedMotion} className="absolute inset-0">
          <div className="works-gradient-bg absolute inset-0 min-h-full" />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-b from-surface-secondary/50 via-transparent to-surface" />
      </div>

      <div className="relative z-10 px-4 pt-8 sm:px-6 sm:pt-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3 sm:mb-8 sm:gap-4">
            <div>
              <p className="text-xs font-medium tracking-[0.14em] text-muted">PORTFOLIO</p>
              <h2 className="mt-1 text-[clamp(1.5rem,4vw,2.5rem)] font-semibold tracking-tight">
                Selected works
              </h2>
            </div>
            <motion.div
              whileHover={reducedMotion ? undefined : { y: -2 }}
              whileTap={reducedMotion ? undefined : { scale: 0.98, y: 0 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
            >
              <Link
                to="/projects"
                className="inline-flex h-9 items-center rounded-full border border-border bg-surface/80 px-4 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
              >
                View all projects
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {reducedMotion ? (
        <div className="relative z-10 mx-auto max-w-5xl space-y-8 px-4 pb-20 sm:px-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6"
            >
              <WorksCardContent project={project} isMobile={isMobile} />
            </article>
          ))}
        </div>
      ) : (
        <div
          ref={containerRef}
          className="relative z-10"
          style={{ height: `${projects.length * scrollVhPerProject}vh` }}
        >
          <div className="sticky top-[4.75rem] flex h-[calc(100dvh-5.5rem)] flex-col sm:top-28 sm:h-[calc(100dvh-7.25rem)]">
            <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 sm:px-6">
              <WorksScrollProgress progress={smoothProgress} total={projects.length} />

              <div className="relative min-h-[240px] flex-1 sm:min-h-0">
                {projects.map((project, index) => (
                  <WorksPinnedCard
                    key={project.id}
                    project={project}
                    index={index}
                    total={projects.length}
                    progress={smoothProgress}
                    isMobile={isMobile}
                  />
                ))}
              </div>

              <p className="hidden pb-3 text-center text-[10px] font-medium tracking-[0.2em] text-faint sm:block">
                SCROLL TO EXPLORE
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="h-10 bg-surface sm:h-14" aria-hidden="true" />
    </section>
  );
}

function WorksScrollProgress({
  progress,
  total,
}: {
  progress: MotionValue<number>;
  total: number;
}) {
  const activeLabel = useTransform(progress, (v) => {
    const index = Math.min(total - 1, Math.max(0, Math.round(v * (total - 1))));
    return `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
  });

  return (
    <div className="mb-3 flex items-center justify-between gap-3 sm:mb-4 sm:gap-4">
      <motion.p className="text-xs tabular-nums text-muted sm:text-sm">{activeLabel}</motion.p>
      <div className="flex items-center gap-1.5" aria-hidden="true">
        {Array.from({ length: total }).map((_, index) => (
          <WorksProgressDot key={index} index={index} total={total} progress={progress} />
        ))}
      </div>
    </div>
  );
}

function WorksProgressDot({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const focus = (index + 0.5) / total;

  const width = useTransform(progress, (v) => {
    const distance = Math.abs(v - focus) * total;
    return 6 + 14 * Math.max(0, 1 - distance * 1.15);
  });

  const opacity = useTransform(progress, (v) => {
    const distance = Math.abs(v - focus) * total;
    return 0.28 + 0.72 * Math.max(0, 1 - distance * 1.15);
  });

  return (
    <motion.span
      className="block h-1.5 rounded-full bg-primary"
      style={{ width, opacity }}
    />
  );
}

function WorksPinnedCard({
  project,
  index,
  total,
  progress,
  isMobile,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
  isMobile: boolean;
}) {
  const step = 1 / total;
  const start = index * step;
  const enterLead = step * 0.08;
  const enterEnd = start + step * 0.42;
  const enterY = isMobile ? 36 : 52;

  const opacity = useTransform(progress, (v) => {
    if (v < start - enterLead) return 0;
    if (v < enterEnd) {
      return smoothstep((v - (start - enterLead)) / (enterEnd - (start - enterLead)));
    }
    return 1;
  });

  const y = useTransform(progress, (v) => {
    if (v < start - enterLead) return enterY;
    if (v < enterEnd) {
      const t = smoothstep((v - (start - enterLead)) / (enterEnd - (start - enterLead)));
      return enterY * (1 - t);
    }
    return 0;
  });

  const scale = useTransform(progress, (v) => {
    if (index === total - 1) return 1;
    const end = (index + 1) * step;
    const compressStart = end - step * 0.2;
    const compressEnd = Math.min(end + step * 0.45, 1);
    if (v <= compressStart) return 1;
    if (v >= compressEnd) return 0.945;
    return 1 - 0.055 * smoothstep((v - compressStart) / (compressEnd - compressStart));
  });

  const brightness = useTransform(progress, (v) => {
    if (index === total - 1) return 1;
    const end = (index + 1) * step;
    const compressStart = end - step * 0.2;
    const compressEnd = Math.min(end + step * 0.45, 1);
    if (v <= compressStart) return 1;
    if (v >= compressEnd) return 0.92;
    return 1 - 0.08 * smoothstep((v - compressStart) / (compressEnd - compressStart));
  });

  const cardFilter = useMotionTemplate`brightness(${brightness})`;
  const pointerEvents = useTransform(opacity, (o) => (o > 0.35 ? "auto" : "none"));

  return (
    <motion.article
      className="absolute inset-0 flex items-start justify-center will-change-transform sm:items-center"
      style={{
        opacity,
        y,
        scale,
        filter: cardFilter,
        zIndex: index + 1,
        pointerEvents,
      }}
    >
      <div className="w-full overflow-hidden rounded-2xl border border-border bg-surface p-4 shadow-[0_12px_40px_rgba(0,0,0,0.07)] sm:max-h-full sm:overflow-y-auto sm:p-6">
        <WorksCardContent project={project} isMobile={isMobile} />
      </div>
    </motion.article>
  );
}

function WorksCardContent({ project, isMobile }: { project: Project; isMobile: boolean }) {
  return (
    <>
      <div className="mb-3 flex items-center justify-between gap-2 sm:mb-4 sm:gap-3">
        <p className="text-xs text-muted sm:text-sm">{project.category}</p>
        {project.flagship && (
          <span className="rounded-full border border-primary/30 bg-primary/8 px-2 py-0.5 text-[9px] font-medium text-primary sm:px-2.5">
            FLAGSHIP
          </span>
        )}
      </div>

      <div className="grid items-start gap-3 sm:gap-4 lg:grid-cols-2 lg:items-center lg:gap-5">
        <div className="order-2 flex flex-col gap-2.5 sm:gap-3 lg:order-1 lg:gap-4">
          <h3 className="text-xl font-semibold leading-[1.12] tracking-tight sm:text-[clamp(1.5rem,4vw,2.25rem)] sm:leading-[1.1]">
            {project.name}
          </h3>

          <p className="text-sm leading-relaxed text-foreground/85 sm:text-base sm:leading-[1.6]">
            {project.summary}
          </p>

          <TechBubbles items={project.technologies} />

          <div className="flex flex-wrap gap-2 border-t border-border pt-3 sm:pt-4">
            <WorksActionLink to={`/projects/${project.id}`} variant="primary">
              Case study
            </WorksActionLink>
            <WorksActionLink href={project.link} variant="secondary">
              Live site
            </WorksActionLink>
          </div>
        </div>

        <div className={`order-1 lg:order-2 ${isMobile ? "max-h-[200px] overflow-hidden rounded-xl" : ""}`}>
          <ProjectShowcaseImage project={project} compact />
        </div>
      </div>
    </>
  );
}

function WorksActionLink({
  children,
  variant,
  to,
  href,
}: {
  children: ReactNode;
  variant: "primary" | "secondary";
  to?: string;
  href?: string;
}) {
  const className =
    variant === "primary"
      ? "inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 text-sm font-medium text-white transition-colors hover:bg-[#0077ED] sm:h-10 sm:px-5"
      : "inline-flex h-9 items-center justify-center rounded-full border border-border bg-surface-secondary px-4 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary sm:h-10 sm:px-5";

  const motionWrap = (node: ReactNode) => (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
    >
      {node}
    </motion.div>
  );

  if (to) {
    return motionWrap(<Link to={to} className={className}>{children}</Link>);
  }

  return motionWrap(
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>,
  );
}
