export const EVENT_CONTENT = `
  query pageEventCollection($slug: String!) {
    eventCollection(where: { slug: $slug }, limit: 1) {
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
  pageEventCollection{
    items {
      title
      slug
    }
  }
}
`;
