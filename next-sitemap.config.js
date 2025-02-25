/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://varahaheritage.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: "public",
  generateIndexSitemap: false,
  priority: 1,
  exclude: ["/contact"],
};
