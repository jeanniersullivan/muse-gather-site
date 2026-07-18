module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addFilter("readingTime", (html) => {
    const text = String(html || "").replace(/<[^>]+>/g, " ");
    const words = text.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  });
  eleventyConfig.addFilter("readableDate", (d) => {
    const date = d instanceof Date ? d : new Date(d);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  });
  eleventyConfig.addFilter("isoDate", (d) => {
    const date = d instanceof Date ? d : new Date(d);
    return isNaN(date) ? "" : date.toISOString();
  });
  eleventyConfig.addFilter("monthYear", (d) => {
    const date = d instanceof Date ? d : new Date(d);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  });
  eleventyConfig.addFilter("day", (d) => new Date(d).getDate());
  eleventyConfig.addFilter("monthAbbr", (d) => new Date(d).toLocaleDateString("en-US", { month: "short" }));

  const now = () => new Date();
  eleventyConfig.addFilter("upcoming", (events) =>
    (events || []).filter((e) => new Date(e.data.eventDate) >= now())
      .sort((a, b) => new Date(a.data.eventDate) - new Date(b.data.eventDate)));
  eleventyConfig.addFilter("past", (events) =>
    (events || []).filter((e) => new Date(e.data.eventDate) < now())
      .sort((a, b) => new Date(b.data.eventDate) - new Date(a.data.eventDate)));

  eleventyConfig.addFilter("byDate", (items) =>
    [...(items || [])].sort((a, b) => new Date(b.date) - new Date(a.date)));
  eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));
  eleventyConfig.addFilter("exclude", (arr, url) => (arr || []).filter((i) => i.url !== url));

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
