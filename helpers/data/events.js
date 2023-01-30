export const EVENT_CONTENT = `
  query GetEvents($slug: String!) {
    pageEventtCollection(where: { slug: $slug }, limit: 1) {
      items {
        title
        slug
        description {
          json
        }
      }
    }
  }
`;

export const EVENT_SLUG = `
query {
  pageEventtCollection{
    items {
      title
      slug
    }
  }
}
`;
