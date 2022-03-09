const contentful = require("contentful");

module.exports = {
  images: {
    loader: "imgix",
    path: "https://epokothweni.netlify.app",
    domains: ["images.ctfassets.net"],
  },
};
