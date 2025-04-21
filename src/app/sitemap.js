/**
 * Dynamic sitemap generator for Next.js
 * Regenerates weekly to ensure search engines have the latest content
 * @returns {import('next').MetadataRoute.Sitemap} The sitemap configuration
 */
export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://wrteam.in";

  // Define static routes
  const staticRoutes = [
    {
      url: `${baseUrl}`,
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
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/web-development`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/app-development`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/digital-marketing`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/hire-us`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/our-work`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-use`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/copyright-and-disclaimer`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.3,
    },
  ];

  // Fetch dynamic products
  let productRoutes = [];
  try {
    const productResponse = await fetch(
      "https://backend.wrteam.in/api/products?limit=100",
      { next: { revalidate: 604800 } } // Revalidate weekly (7 days = 604800 seconds)
    );

    if (productResponse.ok) {
      const productData = await productResponse.json();

      if (!productData.error && productData.data) {
        productRoutes = productData.data.map((product) => ({
          url: `${baseUrl}/product-details/${product.slug}`,
          lastModified: new Date(product.updated_at || product.created_at),
          changeFrequency: "weekly",
          priority: 0.9,
        }));
      }
    }
  } catch (error) {
    console.error("Error fetching products for sitemap:", error);
  }

  // Fetch dynamic blogs
  let blogRoutes = [];
  try {
    const blogResponse = await fetch(
      "https://backend.wrteam.in/api/blogs?limit=100",
      { next: { revalidate: 604800 } } // Revalidate weekly
    );

    if (blogResponse.ok) {
      const blogData = await blogResponse.json();

      if (!blogData.error && blogData.data) {
        blogRoutes = blogData.data.map((blog) => ({
          url: `${baseUrl}/blogs/${blog.slug}`,
          lastModified: new Date(blog.updated_at || blog.created_at),
          changeFrequency: "weekly",
          priority: 0.6,
        }));
      }
    }
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
  }

  // Combine all routes
  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
