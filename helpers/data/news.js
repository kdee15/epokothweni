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
