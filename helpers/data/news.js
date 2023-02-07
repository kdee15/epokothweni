export const NEWS_CONTENT = `
  query GetNews($slug: String!) {
    pageNewsCollection(where: { slug: $slug }, limit: 1) {
      items {
          title
          slug
          image {
              title
              url
              width
              height
          }
          copy {
              json
              links {
                entries {
                  block {
                    __typename
                    sys {
                      id
                    }
                    ... on ComponentVideoPlayer {
                      title
                      videoUrl
                    }
                  }
                  inline {
                    sys {
                      id
                    }
                  }
                }
                assets {
                  block {
                    __typename
                    url
                    sys {
                      id
                    }
                  }

                }
              }
          }
          link
          isFeatured
      }
    }
  }
`;

export const NEWS_SLUG = `
query {
    pageNewsCollection{
    items {
      title
      slug
    }
  }
}
`;

export const NEWS_PAGE = `
query GetNewsIndex($id: String!)  {
  pageContent ({id: $id})  {
    title
    slug
    sys {
      id
    }
  }
 }
`;
