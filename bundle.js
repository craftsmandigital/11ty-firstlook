



const minify = (eleventyConfig) => {
  // minifying all html files in whole project
  // https://www.11ty.dev/docs/config/#transforms-example-minify-html-output
  // https://learneleventyfromscratch.com/lesson/31.html#minifying-html-output
  const htmlmin = require("html-minifier");
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (this.outputPath && this.outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });
};



module.exports = {
  minify
}
