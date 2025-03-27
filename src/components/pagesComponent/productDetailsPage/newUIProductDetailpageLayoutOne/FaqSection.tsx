import { useState, useRef, useEffect } from "react";

// FAQ data structure for better maintainability
const faqData = [
  {
    id: 1,
    question: "What is recommended server?",
    answer:
      "VPS server is required to efficiently manage the multi-tenancy feature, as the system creates and handles separate databases for each school.",
    category: 1, // Product category
  },
  {
    id: 2,
    question: "Does it have fee feature and instalment feature?",
    answer:
      "Yes, our system includes comprehensive fee management with instalment options, allowing schools to set up flexible payment plans for students.",
    category: 1, // Product category
  },
  {
    id: 3,
    question: "What are the payment gateways for fee and subscription payment?",
    answer:
      "We support multiple payment gateways including PayPal, Stripe, Razorpay, and other regional payment processors to facilitate easy fee collection.",
    category: 1, // Product category
  },
  {
    id: 4,
    question: "Does this system have bank transfer feature?",
    answer:
      "Yes, the system supports manual bank transfer options. Administrators can record and verify bank transfers made by parents/students.",
    category: 2, // Customization category
  },
  {
    id: 5,
    question: "Does it have live class feature?",
    answer:
      "Yes, our platform includes integrated live class functionality with video conferencing capabilities, screen sharing, and recording options.",
    category: 2, // Customization category
  },
];

// Category data
const categories = [
  { id: 1, name: "Product", active: true },
  { id: 2, name: "Customization of products", active: false },
  // Add more categories as needed
];

// FAQ Item component for better organization
const FaqItem = ({
  faq,
  isExpanded,
  toggleFaq,
}: {
  faq: (typeof faqData)[0];
  isExpanded: boolean;
  toggleFaq: (id: number) => void;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border rounded-md mb-4 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
      <div
        className="flex justify-between items-center p-4 bg-white cursor-pointer"
        onClick={() => toggleFaq(faq.id)}
      >
        <h3 className="font-medium text-gray-800">{faq.question}</h3>
        <button className="text-green-500 bg-green-50 rounded-full p-1">
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

export default function FaqSection() {
  // State to track which FAQ is expanded
  const [expandedId, setExpandedId] = useState<number>(1);
  // State to track active category
  const [activeCategory, setActiveCategory] = useState<number>(1);
  // Filtered FAQs based on category
  const [filteredFaqs, setFilteredFaqs] = useState(faqData);

  // Filter FAQs whenever category changes
  useEffect(() => {
    let result = faqData;

    // Filter by category
    if (activeCategory > 0) {
      result = result.filter((faq) => faq.category === activeCategory);
    }

    setFilteredFaqs(result);

    // If current expanded FAQ is no longer in filtered list, collapse it
    if (expandedId > 0 && !result.some((faq) => faq.id === expandedId)) {
      setExpandedId(0);
    }
  }, [activeCategory, expandedId]);

  // Toggle expanded state of FAQ items
  const toggleFaq = (id: number) => {
    setExpandedId(expandedId === id ? 0 : id);
  };

  // Set active category
  const setCategory = (id: number) => {
    setActiveCategory(id);
    // Reset expanded FAQ when changing category
    setExpandedId(0);
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* FAQ Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Here Are Answers to Most Asked Questions from Our Customers
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Curious about something? Get the information you need! Explore our
            most frequently asked questions.
          </p>
        </div>

        {/* Mobile Categories (horizontal scrollable tabs) */}
        <div className="md:hidden mb-6 overflow-x-auto pb-2 no-scrollbar">
          <div className="flex whitespace-nowrap">
            <div
              className={`p-3 mx-1 rounded-md inline-block cursor-pointer transition-all duration-300 ${
                activeCategory === 0
                  ? "bg-green-500 text-white shadow-md"
                  : "bg-white hover:bg-green-50"
              }`}
              onClick={() => setCategory(0)}
            >
              <span className="font-medium text-sm">All Categories</span>
            </div>

            {categories.map((category) => (
              <div
                key={category.id}
                className={`p-3 mx-1 rounded-md inline-block cursor-pointer transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-green-500 text-white shadow-md"
                    : "bg-white hover:bg-green-50"
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
            {/* All Categories option */}
            <div
              className={`p-4 rounded-md mb-2 cursor-pointer transition-all duration-300 ${
                activeCategory === 0
                  ? "bg-green-500 text-white shadow-md"
                  : "bg-white hover:bg-green-50"
              }`}
              onClick={() => setCategory(0)}
            >
              <h3 className="font-medium">All Categories</h3>
            </div>

            {categories.map((category) => (
              <div
                key={category.id}
                className={`p-4 rounded-md mb-2 cursor-pointer transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-green-500 text-white shadow-md"
                    : "bg-white hover:bg-green-50"
                }`}
                onClick={() => setCategory(category.id)}
              >
                <h3 className="font-medium">{category.name}</h3>
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
