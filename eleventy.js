module.exports = function (eleventyConfig) {
  // Copy static assets and the CMS admin straight through to the built site
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy("admin");

  // Reading time from rendered HTML body (~200 wpm)
  eleventyConfig.addFilter("readingTime", (html) => {
    const text = String(html || "").replace(/<[^>]+>/g, " ");
    const words = text.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  });

  // Friendly date, e.g. "May 12, 2026"
  eleventyConfig.addFilter("readableDate", (d) => {
    const date = d instanceof Date ? d : new Date(d);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  });
  // ISO 8601 date for JSON-LD / <meta> (e.g. "2026-03-15")
  eleventyConfig.addFilter("isoDate", (d) => {
    const date = d instanceof Date ? d : new Date(d);
    return isNaN(date) ? "" : date.toISOString();
  });
  // Short date, e.g. "May 2026"
  eleventyConfig.addFilter("monthYear", (d) => {
    const date = d instanceof Date ? d : new Date(d);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  });
  // Day number + month abbr for event chips
  eleventyConfig.addFilter("day", (d) => new Date(d).getDate());
  eleventyConfig.addFilter("monthAbbr", (d) => new Date(d).toLocaleDateString("en-US", { month: "short" }));

  // Upcoming / past event splitting (compares to build time)
  const now = () => new Date();
  eleventyConfig.addFilter("upcoming", (events) =>
    (events || []).filter((e) => new Date(e.data.eventDate) >= now())
      .sort((a, b) => new Date(a.data.eventDate) - new Date(b.data.eventDate)));
  eleventyConfig.addFilter("past", (events) =>
    (events || []).filter((e) => new Date(e.data.eventDate) < now())
      .sort((a, b) => new Date(b.data.eventDate) - new Date(a.data.eventDate)));

  // Sort essays newest first
  eleventyConfig.addFilter("byDate", (items) =>
    [...(items || [])].sort((a, b) => new Date(b.date) - new Date(a.date)));

  // Collection items of one type, sorted by optional `order` then title
  eleventyConfig.addFilter("whereType", (items, type) =>
    (items || []).filter((i) => i.data.type === type)
      .sort((a, b) => ((a.data.order ?? 999) - (b.data.order ?? 999)) || String(a.data.title).localeCompare(String(b.data.title))));

  eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));
  eleventyConfig.addFilter("exclude", (arr, url) => (arr || []).filter((i) => i.url !== url));

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};