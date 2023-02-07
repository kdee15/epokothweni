export const EVENT_CONTENT = `
  query GetEvents($slug: String!) {
    pageEventCollection(where: { slug: $slug }, limit: 1) {
      items {
        title
        slug
        description {
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
      }
    }
  }
`;

export const EVENT_SLUG = `
query {
  pageEventCollection{
    items {
      title
      slug
    }
  }
}
`;
