export const EVENT_CONTENT = `
  query GetEvents($slug: String!) {
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
  eventCollection{
    items {
      title
      slug
    }
  }
}
`;
