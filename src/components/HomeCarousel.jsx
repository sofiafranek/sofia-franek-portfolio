"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { urlForImage } from "@/sanity/image";

export default function HomeCarousel({ projects = [] }) {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [cardOffsets, setCardOffsets] = useState([]);

  const calculateOffsets = useCallback(() => {
    const firstCard = cardRefs.current[0];

    if (!firstCard) {
      setCardOffsets([]);
      return;
    }

    const firstCardLeft = firstCard.offsetLeft;

    const nextOffsets = cardRefs.current.map((card) => {
      if (!card) return 0;

      return card.offsetLeft - firstCardLeft;
    });

    setCardOffsets(nextOffsets);
  }, []);

  useEffect(() => {
    calculateOffsets();

    const observer = new ResizeObserver(calculateOffsets);

    if (trackRef.current) {
      observer.observe(trackRef.current);
    }

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    window.addEventListener("resize", calculateOffsets);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", calculateOffsets);
    };
  }, [calculateOffsets, projects.length]);

  const handleNext = () => {
    setActiveIndex((current) => Math.min(current + 1, projects.length - 1));
  };

  const handlePrevious = () => {
    setActiveIndex((current) => Math.max(current - 1, 0));
  };

  return (
    <main className="home">
      <header className="home-header">
        <Link href="/" className="home-wordmark">
          sofia franek.
        </Link>

        <a href="mailto:hello@sofiafranek.com" className="header-link">
          <span>hello@sofiafranek.com</span>

          <span className="header-link-icon" aria-hidden="true">
            ✳
          </span>
        </a>
      </header>

      <section className="home-project-window" aria-label="Selected projects">
        <div
          ref={trackRef}
          className="home-project-track"
          style={{
            transform: `translate3d(-${
              cardOffsets[Math.min(activeIndex, cardOffsets.length - 1)] || 0
            }px, 0, 0)`
          }}
        >
          {projects.map((project, index) => {
            if (!project.featuredImage) return null;

            const imageUrl = urlForImage(project.featuredImage)
              .width(1400)
              .quality(90)
              .auto("format")
              .url();

            return (
              <Link
                key={project._id}
                href={`/work/${project.slug}`}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                className={[
                  "home-project-card",
                  `project-height-${project.homepageHeight || "standard"}`,
                  `project-offset-${project.homepageOffset || "centre"}`
                ].join(" ")}
              >
                <div className="home-project-heading">
                  <span className="home-project-number">
                    {String(project.projectNumber).padStart(2, "0")}.
                  </span>

                  <h2>{project.title}</h2>
                </div>

                <div className="home-project-image">
                  <Image
                    src={imageUrl}
                    alt={
                      project.featuredImage?.alt || `${project.title} project`
                    }
                    fill
                    loading={index < 2 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    sizes="(max-width: 767px) calc(100vw - 36px), 414px"
                  />
                </div>
              </Link>
            );
          })}

          <div className="home-track-space" aria-hidden="true" />
        </div>
      </section>

      {activeIndex > 0 && (
        <button
          type="button"
          className="home-slider-button home-slider-button-previous"
          onClick={handlePrevious}
          aria-label="Show previous project"
        >
          <span className="button-arrow" aria-hidden="true" />
        </button>
      )}

      {activeIndex < projects.length - 1 && (
        <button
          type="button"
          className="home-slider-button home-slider-button-next"
          onClick={handleNext}
          aria-label="Show next project"
        >
          <span className="button-arrow" aria-hidden="true" />
        </button>
      )}
    </main>
  );
}
