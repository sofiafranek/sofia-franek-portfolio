import Image from "next/image";

import { urlForImage } from "@/sanity/image";

function SanityImage({ image, alt, sizes, natural = false }) {
  if (!image) return null;

  const src = urlForImage(image).width(2400).quality(90).auto("format").url();

  if (natural) {
    return (
      <Image
        src={src}
        alt={image.alt || alt}
        width={2400}
        height={1600}
        sizes={sizes}
      />
    );
  }

  return (
    <Image src={src} alt={image.alt || alt} fill sizes={sizes} />
  );
}

function TextSection({ item }) {
  const classes = [
    "project-text-section",
    `project-text-${item.layout || "split"}`,
    `project-section-${item.theme || "cream"}`
  ].join(" ");

  return (
    <section className={classes}>
      {item.label && <span className="project-text-label">{item.label}</span>}

      <div className="project-text-content">
        <h2>{item.heading}</h2>

        {item.body && <p>{item.body}</p>}
      </div>
    </section>
  );
}

function StatementSection({ item }) {
  return (
    <section
      className={[
        "project-statement-section",
        `project-section-${item.theme || "pink"}`
      ].join(" ")}
    >
      <p>{item.text}</p>
    </section>
  );
}

export default function ProjectGallery({ gallery, projectTitle }) {
  if (!gallery?.length) return null;

  return (
    <section className="project-gallery" id="project-images">
      {gallery.map((item) => {
        if (item._type === "textSection") {
          return <TextSection item={item} key={item._key} />;
        }

        if (item._type === "statementSection") {
          return <StatementSection item={item} key={item._key} />;
        }

        if (item._type === "splitRow") {
          return (
            <div
              className={[
                "project-gallery-split",
                `project-split-${item.imageRatio || "portrait"}`
              ].join(" ")}
              key={item._key}
            >
              <div className="project-gallery-image">
                <SanityImage
                  image={item.leftImage}
                  alt={projectTitle}
                  sizes="(max-width: 767px) calc(100vw - 36px), 50vw"
                />
              </div>

              {item.rightImage && (
                <div className="project-gallery-image">
                  <SanityImage
                    image={item.rightImage}
                    alt={projectTitle}
                    sizes="(max-width: 767px) calc(100vw - 36px), 50vw"
                  />
                </div>
              )}
            </div>
          );
        }

        if (item._type === "wideImage") {
          const natural = item.imageRatio === "natural";

          return (
            <div
              className={[
                "project-gallery-image",
                `project-image-${item.imageRatio || "landscape"}`,
                natural ? "project-gallery-image-natural" : ""
              ].join(" ")}
              key={item._key}
            >
              <SanityImage
                image={item}
                alt={projectTitle}
                sizes="100vw"
                natural={natural}
              />
            </div>
          );
        }

        return null;
      })}
    </section>
  );
}
