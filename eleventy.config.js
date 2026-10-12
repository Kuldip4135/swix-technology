export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "assets/js" });

  const basePath = (process.env.BASE_PATH || "").replace(/\/+$/, "");

  eleventyConfig.addFilter("siteUrl", (url) => {
    if (!url || url.startsWith("#") || /^[a-z]+:/i.test(url)) return url;
    const normalizedUrl = url.startsWith("/") ? url : `/${url}`;
    return `${basePath}${normalizedUrl}`;
  });

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
