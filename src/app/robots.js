/**
 * Generates the robots.txt file for the site
 * Controls crawling & indexing based on environment
 */
export default function robots() {
  const isProduction = process.env.NEXT_PUBLIC_APP_ENV === "production";
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://wrteam.in";

  // 🚫 Non-production: block everything
  if (!isProduction) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  // ✅ Production: allow crawling with exclusions
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/admin/",
        "/_next/",
        "/thank-you/",
        "/product-category/",
        "/product-tag/",
        "/shop/",
        "/woolentor-template/",
        "/homepage/",
        "/undefined",
        "/our-team/",
        "/validator/",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}