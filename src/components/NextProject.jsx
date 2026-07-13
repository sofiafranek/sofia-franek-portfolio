import Link from "next/link";

function Marquee({ children }) {
  return (
    <div className="next-project-marquee">
      <div className="next-project-marquee-track">
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index}>{children}</span>
        ))}
      </div>
    </div>
  );
}

export default function NextProject({ project }) {
  if (!project) {
    return (
      <section className="next-project-section portfolio-end">
        <Link
        href={`/`}
        className="next-project-link"
        scroll>
        <Marquee>
          Thank you for viewing&nbsp;—&nbsp;end of portfolio&nbsp;—&nbsp;
        </Marquee>
          </Link>
      </section>
    );
  }

  return (
    <section className="next-project-section">
      <Link
        href={`/work/${project.slug}`}
        className="next-project-link"
        scroll
      >
        <Marquee>
          Next project&nbsp;—&nbsp;
          {project.title}&nbsp;—&nbsp;
        </Marquee>
      </Link>
    </section>
  );
}