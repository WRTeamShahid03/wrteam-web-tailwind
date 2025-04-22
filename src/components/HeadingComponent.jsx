import React from "react";

/**
 * SEO-friendly heading component
 * Ensures proper heading hierarchy throughout the site
 *
 * @param {Object} props Component props
 * @param {string} props.level Heading level (h1, h2, h3, h4, h5, h6)
 * @param {string} props.className CSS classes for styling
 * @param {React.ReactNode} props.children Content of the heading
 *
 * @example
 * // Using HeadingComponent directly
 * <HeadingComponent level="h2" className="text-2xl font-bold">My Heading</HeadingComponent>
 *
 * // Using predefined heading components
 * <PageTitle>Page Title</PageTitle>
 * <SectionTitle>Section Title</SectionTitle>
 * <SubsectionTitle>Subsection Title</SubsectionTitle>
 */
export default function HeadingComponent({
  level = "h2",
  className = "",
  children,
}) {
  // Ensure only one h1 per page for SEO best practices
  const Tag = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(level)
    ? level
    : "h2";

  // Default class styles based on heading level
  const defaultClasses = {
    h1: "text-3xl md:text-4xl font-bold mb-4",
    h2: "text-2xl md:text-3xl font-bold mb-3",
    h3: "text-xl md:text-2xl font-semibold mb-2",
    h4: "text-lg md:text-xl font-semibold mb-2",
    h5: "text-base md:text-lg font-medium mb-1",
    h6: "text-sm md:text-base font-medium mb-1",
  };

  const combinedClasses = `${defaultClasses[Tag]} ${className}`.trim();

  return React.createElement(Tag, { className: combinedClasses }, children);
}

/**
 * SEO-optimized page title (h1) component
 * Ensures there's only one h1 per page
 *
 * @example
 * <PageTitle className="text-3xl font-bold">
 *   My Page Title
 * </PageTitle>
 */
export function PageTitle({ className = "", children }) {
  return (
    <HeadingComponent level="h1" className={className}>
      {children}
    </HeadingComponent>
  );
}

/**
 * Section title (h2) component
 *
 * @example
 * <SectionTitle className="text-2xl font-semibold">
 *   My Section Title
 * </SectionTitle>
 */
export function SectionTitle({ className = "", children }) {
  return (
    <HeadingComponent level="h2" className={className}>
      {children}
    </HeadingComponent>
  );
}

/**
 * Subsection title (h3) component
 *
 * @example
 * <SubsectionTitle className="text-xl font-medium">
 *   My Subsection Title
 * </SubsectionTitle>
 */
export function SubsectionTitle({ className = "", children }) {
  return (
    <HeadingComponent level="h3" className={className}>
      {children}
    </HeadingComponent>
  );
}
