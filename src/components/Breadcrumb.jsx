import React from "react";
import Link from "next/link";
import { BreadcrumbSchema } from "./JsonLdSchema";

/**
 * Reusable Breadcrumb component with structured data
 * @param {Object} props Component props
 * @param {Array} props.items Breadcrumb items with name and url
 * @param {string} props.className Additional CSS classes
 */
export default function Breadcrumb({ items, className = "" }) {
  if (!items || !Array.isArray(items) || items.length < 1) {
    return null;
  }

  // Create a deep copy of the items for structured data
  const schemaItems = JSON.parse(JSON.stringify(items));

  // Fix any relative URLs for schema (schema requires absolute URLs)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://wrteam.in";
  schemaItems.forEach((item) => {
    if (item.url && item.url.startsWith("/")) {
      item.url = `${baseUrl}${item.url}`;
    }
  });

  // Add home as the first item if it's not already there
  if (schemaItems[0].name !== "Home") {
    schemaItems.unshift({
      name: "Home",
      url: baseUrl,
    });
  }

  return (
    <>
      {/* Add schema for SEO */}
      <BreadcrumbSchema items={schemaItems} />

      {/* Visual breadcrumb component */}
      <nav aria-label="Breadcrumb" className={`py-2 ${className}`}>
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <li>
                  <span className="mx-2 text-gray-400">/</span>
                </li>
              )}

              <li>
                {index === items.length - 1 ? (
                  <span className="font-medium text-gray-900">{item.name}</span>
                ) : (
                  <Link
                    href={item.url}
                    className="text-gray-500 hover:primaryColor hover:underline"
                    aria-current={
                      index === items.length - 1 ? "page" : undefined
                    }
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            </React.Fragment>
          ))}
        </ol>
      </nav>
    </>
  );
}
