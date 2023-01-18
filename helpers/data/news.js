export const NEWS_CONTENT = `
  query GetNews($slug: String!) {
    newsCollection(where: { slug: $slug }, limit: 1) {
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
            }
        }
    }
  }
`;

export const NEWS_SLUG = `
query {
    newsCollection{
    items {
      title
      slug
    }
  }
}
`;
