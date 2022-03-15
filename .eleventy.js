module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/tailwind.css");
  return {
    dir: {
      input: "src"
    }
  }
};
