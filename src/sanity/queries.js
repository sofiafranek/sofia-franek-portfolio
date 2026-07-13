import { defineQuery } from "next-sanity";

export const HOME_PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && defined(slug.current)]
  | order(projectNumber asc) {
    _id,
    title,
    "slug": slug.current,
    projectNumber,
    homepageHeight,
    homepageOffset,
    featuredImage {
      ...,
      alt
    }
  }
`);

export const PROJECT_QUERY = defineQuery(`
  *[
    _type == "project" &&
    slug.current == $slug
  ][0] {
    _id,
    title,
    "slug": slug.current,
    projectNumber,
    categories,
    description,

    gallery[] {
      _key,
      _type,

      _type == "wideImage" => {
        ...,
        alt,
        imageRatio
      },

      _type == "splitRow" => {
        imageRatio,

        leftImage {
          ...,
          alt
        },

        rightImage {
          ...,
          alt
        }
      },

      _type == "textSection" => {
        label,
        heading,
        body,
        layout,
        theme
      },

      _type == "statementSection" => {
        text,
        theme
      }
    },

    nextProject-> {
      _id,
      title,
      "slug": slug.current,
      projectNumber,
      category,
      description,
      featuredImage {
        ...,
        alt
      }
    }
  }
`);

export const PROJECT_SLUGS_QUERY = defineQuery(`
  *[_type == "project" && defined(slug.current)] {
    "slug": slug.current
  }
`);
