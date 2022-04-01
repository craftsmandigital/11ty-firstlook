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





const Image = require("@11ty/eleventy-img");

(async () => {
  // let url = "https://mikaelkirken.no/wp-content/uploads/sites/2/2022/03/20200428_164658-scaled.jpg";
  let url = "./myimages/IMG-4373.jpeg";

  console.log("production or develeopment environment --> " + process.env.NODE_ENV);
  let stats = await Image(url, {
    outputDir: "./_site/img/",
    widths: [200, 400, null],
    formats: ["jpg"]
  });


  console.log(stats);
})();
