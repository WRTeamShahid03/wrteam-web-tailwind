import React from "react";
import Link from "next/link";

/**
 * Reusable page header component with title and breadcrumb navigation
 * @param title - Main page title
 * @param breadcrumbs - Array of breadcrumb items (name and path)
 * @param className - Additional CSS classes for the container
 */
interface BreadcrumbItem {
  name: string;
  path?: string; // Optional for the last item which is current page
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  className?: string;
}

export default function PageHeader({
  title,
  breadcrumbs,
  className = "",
}: PageHeaderProps) {
  return (
    <div
      className={`w-full text-center bg-blue-50 py-8 sm:py-12 -mx-0 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
          {title}
        </h1>
        {breadcrumbs.length > 0 && (
          <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm">
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="text-gray-400">»</span>}
                {item.path ? (
                  <Link href={item.path} className="hover:text-blue-600">
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-blue-600">{item.name}</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
