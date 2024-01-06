export const EVENT_CONTENT = `
  query GetEvents($slug: String!) {
    pageEventCollection(where: { slug: $slug }, limit: 1) { 
      items {
        title
        slug
        link
        isFeatured
        image  {
          title
          url
          width
          height
        }
        description {
          json
          links {
            entries {
              block {
                __typename
                sys {
                  id
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
        copy {
          json
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

export const EVENTS_PAGE = `
query GetEventIndex($id: String!)  {
  pageContent ({id: $id})  {
    title
    slug
    sys {
      id
    }
  }
 }
`;

export const FOOTER_CONTENT = `
    query {
        componentFooterCollection {
            items {
                title
                logo {
                title
                url
                width
                height
                }
                socialMediaLinksCollection {
                items {
                    title
                    url
                }
                }
                footerMenuCollection {
                items {
                    title
                    link
                }
                }
                qrCodeText
            }
        }
    }
`;
