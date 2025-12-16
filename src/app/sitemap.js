/**
 * Dynamic sitemap generator for Next.js
 * Generates sitemap only in production
 * @returns {import('next').MetadataRoute.Sitemap}
 */
export default async function sitemap() {
  const isProduction = process.env.NEXT_PUBLIC_APP_ENV === "production";

  // ❌ Do not generate sitemap in dev
  if (!isProduction) {
    console.log("Sitemap disabled for non-production environment");
    return [];
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_WEB_URL || "https://www.wrteam.in";

  // -------------------- Static Routes --------------------
  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // ... keep rest as-is
  ];

  // -------------------- Products --------------------
  let productRoutes = [];
  try {
    const initialResponse = await fetch(
      "https://backend.wrteam.in/api/products?page=1",
      { cache: "no-store" }
    );

    if (initialResponse.ok) {
      const initialData = await initialResponse.json();
      const totalPages = initialData?.data?.last_page || 1;

      let allProducts = initialData?.data?.data || [];

      if (totalPages > 1) {
        const requests = [];
        for (let page = 2; page <= totalPages; page++) {
          requests.push(
            fetch(`https://backend.wrteam.in/api/products?page=${page}`, {
              cache: "no-store",
            })
              .then(res => res.json())
              .then(res => res?.data?.data || [])
              .catch(() => [])
          );
        }

        const results = await Promise.all(requests);
        results.forEach(items => {
          allProducts.push(...items);
        });
      }

      productRoutes = allProducts.map(product => ({
        url: `${baseUrl}/product-details/${product.slug || product.id}`,
        lastModified: new Date(
          product.updated_at || product.created_at || new Date()
        ),
        changeFrequency: "weekly",
        priority: 0.9,
      }));
    }
  } catch (err) {
    console.error("Product sitemap error:", err);
  }

  // -------------------- Blogs --------------------
  let blogRoutes = [];
  try {
    const initialResponse = await fetch(
      "https://backend.wrteam.in/api/blogs?page=1",
      { cache: "no-store" }
    );

    if (initialResponse.ok) {
      const initialData = await initialResponse.json();
      const totalPages = initialData?.data?.last_page || 1;

      let allBlogs = initialData?.data?.data || [];

      if (totalPages > 1) {
        const requests = [];
        for (let page = 2; page <= totalPages; page++) {
          requests.push(
            fetch(`https://backend.wrteam.in/api/blogs?page=${page}`, {
              cache: "no-store",
            })
              .then(res => res.json())
              .then(res => res?.data?.data || [])
              .catch(() => [])
          );
        }

        const results = await Promise.all(requests);
        results.forEach(items => {
          allBlogs.push(...items);
        });
      }

      blogRoutes = allBlogs.map(blog => ({
        url: `${baseUrl}/blog/${blog.slug || blog.id}`,
        lastModified: new Date(
          blog.updated_at || blog.created_at || new Date()
        ),
        changeFrequency: "weekly",
        priority: 0.6,
      }));
    }
  } catch (err) {
    console.error("Blog sitemap error:", err);
  }

  const allRoutes = [...staticRoutes, ...productRoutes, ...blogRoutes];

  console.log(`Sitemap generated (${allRoutes.length} URLs)`);

  return allRoutes;
}
