


const htmlmin = require("html-minifier");


const minify = (eleventyConfig) => {
  // minifying all html files in whole project
  // https://www.11ty.dev/docs/config/#transforms-example-minify-html-output
  // https://learneleventyfromscratch.com/lesson/31.html#minifying-html-output
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

module.exports = function(eleventyConfig) {


  // Create a helpful production flag
  const isProduction = process.env.NODE_ENV === 'PROD';

  if (isProduction) {
    minify(eleventyConfig);
  }

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





const Image = require("@11ty/eleventy-img");

(async () => {
  // let url = "https://mikaelkirken.no/wp-content/uploads/sites/2/2022/03/20200428_164658-scaled.jpg";
  let url = "./myimages/IMG-4373.jpeg";

  let stats = await Image(url, {
    outputDir: "./_site/img/",
    widths: [200, 400, null],
    formats: ["jpg"]
  });


  console.log(stats);
})();


