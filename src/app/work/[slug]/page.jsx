import Link from "next/link";
import { notFound } from "next/navigation";

import ProjectGallery from "@/components/ProjectGallery";
import { client } from "@/sanity/client";
import { PROJECT_QUERY, PROJECT_SLUGS_QUERY } from "@/sanity/queries";

export const revalidate = 60;

export async function generateStaticParams() {
  const projects = await client.fetch(PROJECT_SLUGS_QUERY);

  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = await client.fetch(PROJECT_QUERY, { slug });

  if (!project) {
    notFound();
  }

  return (
    <main className="project-page">
      <header className="project-header">
        <Link href="/" className="home-wordmark">
          sofia franek.
        </Link>

        <Link href="/" className="header-link">
          <span>Back to menu</span>

          <span className="header-link-icon" aria-hidden="true">
            ✳
          </span>
        </Link>
      </header>

      <section className="project-hero">
        <div className="project-summary">
          <span className="project-number">
            {String(project.projectNumber).padStart(2, "0")}.
          </span>

          <div className="project-copy">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <span className="project-category">{project.category}</span>
          </div>

          <a
            href="#project-images"
            className="project-scroll"
            aria-label="Scroll to project images"
          >
            ↓
          </a>
        </div>
      </section>

      <ProjectGallery gallery={project.gallery} projectTitle={project.title} />
    </main>
  );
}
