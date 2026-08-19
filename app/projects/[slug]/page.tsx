import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProject, projects } from "../../projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} | Dezso Kovi`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <article className="doc" id="main">
        <Link className="back-link" href="/#projects">
          <span aria-hidden="true">←</span> Back to projects
        </Link>

        <header className="doc-head">
          <p className="section-label">{project.context}</p>
          <h1 className="doc-title">{project.title}</h1>
          <p className="doc-tagline">{project.tagline}</p>

          <dl className="doc-meta">
            <div>
              <dt>Year</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>Repository</dt>
              <dd>{project.name}</dd>
            </div>
            <div className="doc-meta-wide">
              <dt>Stack</dt>
              <dd>
                <ul className="chips">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </header>

        <div className="doc-body">
          {project.blocks.map((block, i) =>
            block.kind === "text" ? (
              <p className="body" key={i}>
                {block.body}
              </p>
            ) : (
              <section className="doc-list" key={i}>
                <h2 className="skill-label">{block.heading}</h2>
                <ul className="bullets">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ),
          )}
        </div>

        <footer className="doc-foot">
          <h2 className="doc-foot-title">Source code</h2>
          <p className="body">
            The full project, including its documentation and generated output,
            is on GitHub.
          </p>
          <div className="cta-row">
            <a className="cta" href={project.repo}>
              View {project.name} on GitHub
            </a>
          </div>

          <nav className="doc-next" aria-label="More projects">
            <p className="skill-label">Next project</p>
            <Link className="doc-next-link" href={`/projects/${next.slug}`}>
              {next.title} <span aria-hidden="true">→</span>
            </Link>
          </nav>
        </footer>
      </article>
    </div>
  );
}
