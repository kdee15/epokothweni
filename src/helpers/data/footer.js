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
