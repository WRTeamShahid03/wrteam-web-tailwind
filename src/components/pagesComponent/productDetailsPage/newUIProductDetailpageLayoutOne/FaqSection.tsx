import { useState, useRef, useEffect } from "react";
import { ProductFaqs } from "@/types";

// FAQ Item component - keeping the original UI
const FaqItem = ({
  faq,
  isExpanded,
  toggleFaq,
}: {
  faq: { id: string; question: string; answer: string };
  isExpanded: boolean;
  toggleFaq: (id: string) => void;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border rounded-md mb-4 overflow-hidden shadow-sm transition-all duration-300">
      <div
        className="flex justify-between items-center p-4 bg-white cursor-pointer"
        onClick={() => toggleFaq(faq.id)}
      >
        <h3 className="font-medium text-gray-800">{faq.question}</h3>
        <button className="productDetailPrimaryColor bg-[--productPage-primary-color]/10 rounded-full p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isExpanded ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 12H6"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v12M18 12H6"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Answer with smooth height animation */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isExpanded
            ? `${contentRef.current?.scrollHeight || 1000}px`
            : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <div ref={contentRef} className="p-4 bg-white border-t">
          <p className="text-gray-700">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function FaqSection({ faqs }: { faqs?: ProductFaqs }) {

  // State to track which FAQ is expanded
  const [expandedId, setExpandedId] = useState<string>("");
  // State to track active category
  const [activeCategory, setActiveCategory] = useState<string>("");
  // Filtered FAQs based on category
  const [filteredFaqs, setFilteredFaqs] = useState<{id: string; question: string; answer: string}[]>([]);
  // Categories derived from faqs
  const [categories, setCategories] = useState<{id: string; name: string}[]>([]);

  // Process the incoming faqs data
  useEffect(() => {
    if (!faqs) return;

    // Extract categories and create category objects
    const categoryList = Object.keys(faqs).map(categoryName => ({
      id: categoryName,
      name: categoryName
    }));
    
    setCategories(categoryList);
    
    // Set default active category to first one if not set
    if (!activeCategory && categoryList.length > 0) {
      setActiveCategory(categoryList[0].id);
    }
  }, [faqs, activeCategory]);

  // Filter FAQs whenever category changes
  useEffect(() => {
    if (!faqs || !activeCategory) return;
    
    // Get FAQs for the active category
    const categoryFaqs = faqs[activeCategory];
    if (!categoryFaqs) return;
    
    // Flatten the nested structure and create unique IDs
    const flattened = categoryFaqs.flat().flat().map((faq, index) => ({
      id: `${activeCategory}-${index}`,
      question: faq.question,
      answer: faq.answer
    }));
    
    setFilteredFaqs(flattened);
  }, [faqs, activeCategory]);

  // Toggle expanded state of FAQ items
  const toggleFaq = (id: string) => {
    setExpandedId(expandedId === id ? "" : id);
  };

  // Set active category
  const setCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    // Reset expanded FAQ when changing category
    setExpandedId("");
  };

  // Fallback data if needed
  const fallbackCategories = [
    { id: "1", name: "Product" },
    { id: "2", name: "Customization of products" },
  ];

  const displayCategories = categories.length > 0 ? categories : fallbackCategories;

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* FAQ Header */}
        <div className="flexColCenter commonTextGap lg:w-[70%] xl:w-[50%] text-center m-auto mb-6 md:mb-12">
          <h2 className="sectionTitle !font-bold">
            Here Are Answers to Most Asked Questions from Our Customers
          </h2>
          <p className="sectionPara">
            Curious about something? Get the information you need! Explore our
            most frequently asked questions.
          </p>
        </div>

        {/* Mobile Categories (horizontal scrollable tabs) */}
        <div className="md:hidden mb-6 no-scrollbar flex overflow-x-auto md:overflow-x-visible md:flex-wrap gap-3 pb-2 md:pb-0 scrollbar-hide">
          <div className="flex whitespace-nowrap">
            {displayCategories.map((category) => (
              <div
                key={category.id}
                className={`p-3 mx-1 rounded-md inline-block cursor-pointer transition-all duration-300 ${
                  activeCategory === category.id
                    ? "productPrimaryBg text-white"
                    : "relative productDetailPrimaryBg overflow-hidden"
                }`}
                onClick={() => setCategory(category.id)}
              >
                <span className="font-medium text-sm">{category.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Categories and Questions */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Desktop Categories - hidden on mobile */}
          <div className="hidden md:block md:w-1/4">
            {displayCategories.map((category) => (
              <div
                key={category.id}
                className={`py-3 px-4 rounded-[8px] mb-4 cursor-pointer !font-bold ${
                  activeCategory === category.id
                    ? "productPrimaryBg text-white"
                    : "relative productDetailPrimaryBg overflow-hidden"
                }`}
                onClick={() => setCategory(category.id)}
              >
                <h3 className="">{category.name}</h3>
              </div>
            ))}
          </div>

          {/* Questions and Answers - full width on mobile */}
          <div className="md:w-3/4 w-full">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <FaqItem
                  key={faq.id}
                  faq={faq}
                  isExpanded={expandedId === faq.id}
                  toggleFaq={toggleFaq}
                />
              ))
            ) : (
              <div className="bg-white p-8 rounded-md text-center shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto text-gray-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  No matching questions found
                </h3>
                <p className="text-gray-600">
                  Try selecting a different category to find what you&apos;re
                  looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
