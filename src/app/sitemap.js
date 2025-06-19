/**
 * Dynamic sitemap generator for Next.js
 * Regenerates weekly to ensure search engines have the latest content
 * @returns {import('next').MetadataRoute.Sitemap} The sitemap configuration
 */
export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_WEB_URL || "https://www.wrteam.in/";

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
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
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
      url: `${baseUrl}/services/ui-ux-design`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/customization`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/installation`,
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
    {
      url: `${baseUrl}/our-work/design`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/our-work/development`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/thank-you`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/free-source-code`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/license`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/installtion-terms-of-use`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/11-offer-page`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/career`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/exclusive-license`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];

  // Fetch dynamic products
  let productRoutes = [];
  try {
    console.log("Attempting to fetch products...");

    // First fetch page 1 to get total pages info
    const initialResponse = await fetch(
      "https://backend.wrteam.in/api/products?page=1",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        cache: "no-store"
      }
    ).catch(error => {
      console.error("Fetch products network error:", error);
      return { ok: false, status: "Network Error" };
    });

    if (initialResponse && initialResponse.ok) {
      const initialData = await initialResponse.json();

      // Get total pages from the first response
      const totalPages = initialData?.data?.last_page || 1;
      console.log(`Product API: Found ${totalPages} total pages`);

      let allProducts = [];

      // Add products from first page
      if (initialData?.data?.data && Array.isArray(initialData.data.data)) {
        allProducts = [...initialData.data.data];
      }

      // Fetch remaining pages if more than 1 page exists
      if (totalPages > 1) {
        const pagePromises = [];

        // Create promises for pages 2 to totalPages
        for (let page = 2; page <= totalPages; page++) {
          pagePromises.push(
            fetch(`https://backend.wrteam.in/api/products?page=${page}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
              },
              cache: "no-store"
            })
              .then(res => res.json())
              .then(pageData => pageData?.data?.data || [])
              .catch(error => {
                console.error(`Error fetching product page ${page}:`, error);
                return [];
              })
          );
        }

        // Wait for all page requests to complete
        const pagesResults = await Promise.all(pagePromises);

        // Combine all products from all pages
        pagesResults.forEach(pageProducts => {
          if (Array.isArray(pageProducts)) {
            allProducts = [...allProducts, ...pageProducts];
          }
        });
      }

      console.log(`Product API: Successfully retrieved ${allProducts.length} total products`);

      // Map products to routes
      if (allProducts.length > 0) {
        productRoutes = allProducts.map((product) => ({
          url: `${baseUrl}/product-details/${product.slug || product.id || "unknown"}`,
          lastModified: new Date(product.updated_at || product.created_at || new Date()),
          changeFrequency: "weekly",
          priority: 0.9,
        }));
        console.log(`Successfully mapped ${productRoutes.length} product routes`);
      } else {
        console.error("No products found after fetching all pages");
      }
    } else {
      console.error("Initial product API request failed:", initialResponse?.status || "Unknown error");
    }
  } catch (error) {
    console.error("Error processing products for sitemap:", error.message, error.stack);
  }

  // Fetch dynamic blogs
  let blogRoutes = [];
  try {
    console.log("Attempting to fetch blogs...");

    // First fetch page 1 to get total pages info
    const initialResponse = await fetch(
      "https://backend.wrteam.in/api/blogs?page=1",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        cache: "no-store"
      }
    ).catch(error => {
      console.error("Fetch blogs network error:", error);
      return { ok: false, status: "Network Error" };
    });

    if (initialResponse && initialResponse.ok) {
      const initialData = await initialResponse.json();

      // Get total pages from the first response
      const totalPages = initialData?.data?.last_page || 1;
      console.log(`Blog API: Found ${totalPages} total pages`);

      let allBlogs = [];

      // Add blogs from first page
      if (initialData?.data?.data && Array.isArray(initialData.data.data)) {
        allBlogs = [...initialData.data.data];
      }

      // Fetch remaining pages if more than 1 page exists
      if (totalPages > 1) {
        const pagePromises = [];

        // Create promises for pages 2 to totalPages
        for (let page = 2; page <= totalPages; page++) {
          pagePromises.push(
            fetch(`https://backend.wrteam.in/api/blogs?page=${page}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
              },
              cache: "no-store"
            })
              .then(res => res.json())
              .then(pageData => pageData?.data?.data || [])
              .catch(error => {
                console.error(`Error fetching blog page ${page}:`, error);
                return [];
              })
          );
        }

        // Wait for all page requests to complete
        const pagesResults = await Promise.all(pagePromises);

        // Combine all blogs from all pages
        pagesResults.forEach(pageBlogs => {
          if (Array.isArray(pageBlogs)) {
            allBlogs = [...allBlogs, ...pageBlogs];
          }
        });
      }

      console.log(`Blog API: Successfully retrieved ${allBlogs.length} total blogs`);

      // Map blogs to routes
      if (allBlogs.length > 0) {
        blogRoutes = allBlogs.map((blog) => ({
          url: `${baseUrl}/blog/${blog.slug || blog.id || "unknown"}`,
          lastModified: new Date(blog.updated_at || blog.created_at || new Date()),
          changeFrequency: "weekly",
          priority: 0.6,
        }));
        console.log(`Successfully mapped ${blogRoutes.length} blog routes`);
      } else {
        console.error("No blogs found after fetching all pages");
      }
    } else {
      console.error("Initial blog API request failed:", initialResponse?.status || "Unknown error");
    }
  } catch (error) {
    console.error("Error processing blogs for sitemap:", error.message, error.stack);
  }

  // Combine all routes
  const allRoutes = [...staticRoutes, ...productRoutes, ...blogRoutes];
  console.log(`Sitemap generated with ${allRoutes.length} total routes: ${staticRoutes.length} static, ${productRoutes.length} products, ${blogRoutes.length} blogs`);

  return allRoutes;
}
