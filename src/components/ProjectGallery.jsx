import Image from 'next/image'

import {urlForImage} from '@/sanity/image'

function SanityImage({image, alt, sizes}) {
  if (!image) return null

  const src = urlForImage(image)
    .width(2400)
    .quality(90)
    .auto('format')
    .url()

  return (
    <Image
      src={src}
      alt={image.alt || alt}
      fill
      sizes={sizes}
      quality={90}
    />
  )
}

export default function ProjectGallery({gallery, projectTitle}) {
  if (!gallery?.length) return null

  return (
    <section className="project-gallery" id="project-images">
      {gallery.map((item) => {
        if (item._type === 'splitRow') {
          return (
            <div className="project-gallery-split" key={item._key}>
              <div className="project-gallery-image project-gallery-image-tall">
                <SanityImage
                  image={item.leftImage}
                  alt={projectTitle}
                  sizes="(max-width: 767px) calc(100vw - 36px), 50vw"
                />
              </div>

              <div className="project-gallery-image project-gallery-image-tall">
                <SanityImage
                  image={item.rightImage}
                  alt={projectTitle}
                  sizes="(max-width: 767px) calc(100vw - 36px), 50vw"
                />
              </div>
            </div>
          )
        }

        return (
          <div
            className="project-gallery-image project-gallery-image-wide"
            key={item._key}
          >
            <SanityImage
              image={item}
              alt={projectTitle}
              sizes="100vw"
            />
          </div>
        )
      })}
    </section>
  )
}