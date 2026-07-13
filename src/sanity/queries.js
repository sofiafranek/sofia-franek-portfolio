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
    category,
    description,
    gallery[] {
      _key,
      _type,

      _type == "wideImage" => {
        ...,
        alt
      },

      _type == "splitRow" => {
        leftImage {
          ...,
          alt
        },
        rightImage {
          ...,
          alt
        }
      }
    }
  }
`);

export const PROJECT_SLUGS_QUERY = defineQuery(`
  *[_type == "project" && defined(slug.current)] {
    "slug": slug.current
  }
`);
