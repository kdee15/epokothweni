const contentful = require("contentful");

module.exports = {
  images: {
    loader: "imgix",
    path: "http://localhost:3000/",
    domains: ["images.ctfassets.net"],
  },
};
