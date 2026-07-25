import { Link, Navigate, useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/projectDetails";
import { ProjectDetailContent } from "../components/projects/ProjectDetailContent";

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <div className="mx-auto max-w-[1320px] px-4 pt-28 sm:px-6 sm:pt-32">
        <Link
          to="/projects"
          className="mb-6 inline-flex text-xs font-medium text-muted transition hover:text-primary"
        >
          ← Back to projects
        </Link>
        <p className="mb-3 text-xs tracking-tight text-muted">CASE STUDY</p>
        <h1 className="mb-2 text-[clamp(2rem,7vw,4rem)] font-semibold leading-tight tracking-tighter">
          {project.name}
        </h1>
        <p className="max-w-2xl text-sm text-muted">{project.subline}</p>
      </div>
      <ProjectDetailContent project={project} />
    </>
  );
}
