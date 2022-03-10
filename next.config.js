const contentful = require("contentful");

module.exports = {
  images: {
    loader: "imgix",
    path: "https://epokothweni.imgix.net",
    domains: ["images.ctfassets.net"],
  },
};
