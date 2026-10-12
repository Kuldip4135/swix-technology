export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "assets/js" });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
}
