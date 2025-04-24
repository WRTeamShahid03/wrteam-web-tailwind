/**
 * Generates the robots.txt file for the site
 * Controls which pages search engines are allowed to crawl
 * @returns {import('next').MetadataRoute.Robots} The robots.txt configuration
 */
export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://wrteam.in";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/_next/", "/thank-you/","/product-category/","/product-tag/","/shop/","/woolentor-template/","/homepage/","/undefined","/our-team/","/validator/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
