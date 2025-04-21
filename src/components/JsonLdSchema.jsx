import Script from "next/script";

/**
 * JSON-LD Schema component for adding structured data to pages
 * Implements Schema.org structured data to improve search engine understanding of content
 */
export function OrganizationSchema() {
  // Organization schema for company information
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WRTeam",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://wrteam.in",
    logo: "https://wrteam.in/logo.png",
    description:
      "WRTeam has a creative and dedicated group of developers who are masters in app development and Web development with a niche to deliver quality solutions to customers across the globe.",
    sameAs: [
      process.env.NEXT_PUBLIC_FACEBOOK || "https://www.facebook.com/wrteam.in",
      process.env.NEXT_PUBLIC_INSTAGRAM ||
        "https://www.instagram.com/wrteam.in",
      process.env.NEXT_PUBLIC_LINKEDIN ||
        "https://www.linkedin.com/company/wrteam",
      process.env.NEXT_PUBLIC_YOUTUBE ||
        "https://www.youtube.com/channel/UCLt9XRUuiWsqKng4236LuTQ",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 97979 45459",
      contactType: "customer service",
      email: "support@wrteam.in",
      areaServed: "Worldwide",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "#262-263, Time Square Empire, SH 42 Mirjapar Highway",
      addressLocality: "Bhuj - Kutch",
      addressRegion: "Gujarat",
      postalCode: "370001",
      addressCountry: "IN",
    },
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}

/**
 * LocalBusiness Schema for improved local search results
 * Enhances visibility in Google Maps and local search
 */
export function LocalBusinessSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareCompany",
    name: "WRTeam",
    image: "https://wrteam.in/logo.png",
    "@id": process.env.NEXT_PUBLIC_SITE_URL || "https://wrteam.in",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://wrteam.in",
    telephone: "+91 97979 45459",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "#262-263, Time Square Empire, SH 42 Mirjapar Highway",
      addressLocality: "Bhuj - Kutch",
      addressRegion: "Gujarat",
      postalCode: "370001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "23.2419997",
      longitude: "69.6669324",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:30",
        closes: "18:30",
      },
    ],
    sameAs: [
      process.env.NEXT_PUBLIC_FACEBOOK || "https://www.facebook.com/wrteam.in",
      process.env.NEXT_PUBLIC_INSTAGRAM ||
        "https://www.instagram.com/wrteam.in",
      process.env.NEXT_PUBLIC_LINKEDIN ||
        "https://www.linkedin.com/company/wrteam",
      process.env.NEXT_PUBLIC_YOUTUBE ||
        "https://www.youtube.com/channel/UCLt9XRUuiWsqKng4236LuTQ",
    ],
    email: "support@wrteam.in",
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}

/**
 * BreadcrumbList Schema for page navigation structure
 * @param {Object} props - Component props
 * @param {Array} props.items - Breadcrumb items with name and url
 */
export function BreadcrumbSchema({ items }) {
  if (!items || !Array.isArray(items) || items.length < 2) {
    return null;
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}

/**
 * Product Schema specifically for software products
 * @param {Object} props - Component props
 * @param {Object} props.product - Product data
 */
export function SoftwareProductSchema({ product }) {
  if (!product) return null;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name || product.product_title,
    applicationCategory: "Application",
    operatingSystem: "Android, iOS, Web",
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${
        process.env.NEXT_PUBLIC_SITE_URL || "https://wrteam.in"
      }/product-details/${product.slug}`,
    },
    aggregateRating: product.rating
      ? {
          "@type": "AggregateRating",
          ratingValue: product.rating,
          ratingCount: product.sales || 10,
          bestRating: "5",
          worstRating: "1",
        }
      : undefined,
    image: product.banner_image || product.icon_image,
    description: product.seo_description || product.description,
  };

  return (
    <Script
      id="product-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
    />
  );
}

/**
 * FAQ Schema for frequently asked questions
 * @param {Object} props - Component props
 * @param {Array} props.questions - FAQ items with question and answer
 */
export function FaqSchema({ questions }) {
  if (!questions || !Array.isArray(questions) || questions.length === 0) {
    return null;
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
