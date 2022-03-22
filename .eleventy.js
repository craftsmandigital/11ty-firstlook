module.exports = function(eleventyConfig) {
  // Copy any .jpg file to `_site`, via Glob pattern
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("./src/tailwind.css");
  eleventyConfig.addPassthroughCopy("./src/**/*.jpg");
  return {
    dir: {
      input: "src"
    }
  }
};
