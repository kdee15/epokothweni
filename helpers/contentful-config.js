const DELIVERY_KEY = process.env.C_DELIVERY_KEY;
const C_GRAPHQL_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.C_SPACE_ID}/environments/master`;

module.exports = {
  DELIVERY_KEY,
  C_GRAPHQL_URL,
};
