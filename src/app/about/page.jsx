import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="about-page">
<header className="about-header">
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

      <section className="about-content">
        <span className="about-label">About</span>

        <h1>
          Sofia Franek is a graphic designer originally from the UK and
          now based in Portugal.
        </h1>

        <div className="about-copy">
          <p>
            Her work is driven by storytelling, curiosity and a love for
            creating meaningful visual experiences.
          </p>

          <p>
            Through branding, packaging, campaigns and digital design, she
            creates thoughtful work that balances creativity with clarity
            and connects with people in a genuine way.
          </p>
        </div>
      </section>
    </main>
  )
}