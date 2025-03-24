import { Star, StarHalf } from "lucide-react";
import Image from "next/image";
import UserIcon from "@/assets/images/homePage/icon.svg";
// Star rating component to display ratings
const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400 mr-0.5"
        />
      ))}
      {hasHalfStar && (
        <StarHalf className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400 mr-0.5" />
      )}
      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
        <Star
          key={`empty-${i}`}
          className="w-3.5 h-3.5 text-yellow-400 mr-0.5"
        />
      ))}
      <span className="ml-1.5 text-sm font-medium">{rating.toFixed(1)}</span>
    </div>
  );
};

// Client review card component
const ReviewCard = ({
  name,
  role,
  rating,
  testimonial,
}: {
  name: string;
  role: string;
  rating: number;
  testimonial: string;
}) => {
  return (
    <div className="flex flex-col h-full p-5 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        {/* Blue user icon at top left */}
        <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center shrink-0">
          <Image src={UserIcon} alt="User Icon" width={15} height={15} />
        </div>
        {/* Stars displayed on the right side */}
        <div>
          <StarRating rating={rating} />
        </div>
      </div>
      <p className="text-gray-700 mb-5 text-sm leading-relaxed">
        {testimonial}
      </p>
      <div className="mt-auto">
        <div className="border-t border-gray-200 pt-3 mb-2"></div>
        <div>
          <h4 className="font-bold text-sm">{name}</h4>
          <p className="text-xs text-gray-600">For {role}</p>
        </div>
      </div>
    </div>
  );
};

export default function ClientReviewSection() {
  const reviews = [
    {
      name: "Akam_Barznji",
      role: "Code Quality",
      rating: 4.8,
      testimonial:
        "Amazing! The team is amazing. The professionalism is high level. They respond to you whenever you want. They are the high discipline team I have worked with so far. Our plan is building ICS app for this as well.",
    },
    {
      name: "Johnepse",
      role: "Customer Support",
      rating: 4.7,
      testimonial:
        "I would say WRTeam is one of the most professional teams I dealt with, they do their best to help you with your problems in a short time. Also, the code quality is incredible, I am not a fluent flutter developer and it was easy for me to edit the code.",
    },
    {
      name: "Ajayambaliya",
      role: "Customer Support",
      rating: 4.9,
      testimonial:
        "Best app ever I seen on codecanyon, and best part is the service..they provide best services.. keep it up team.",
    },
    {
      name: "Abdul Samad",
      role: "Customer Support",
      rating: 4.7,
      testimonial:
        "I recently had the pleasure of engaging with the customer support team at WRTeam, and I am compelled to share the outstanding experience I had. WRTeam's commitment to providing top-notch customer support.",
    },
    {
      name: "Sanjay",
      role: "Customer Support",
      rating: 4.8,
      testimonial:
        "The organization with Great post sale customer support. The team are really supportive and expert. I would like to recommend them with open heart.",
    },
    {
      name: "Dafrii",
      role: "Customer Support",
      rating: 4.6,
      testimonial:
        "I would like to give 10 stars to these guys for the good work they are doing but unfortunately, the Codecanyon only allows me to give up to 5 stars wherever WRTeam deserves more than 5 stars because they are doing a great job.",
    },
    {
      name: "musharoz.kck",
      role: "Code Quality & Support",
      rating: 5.0,
      testimonial:
        "I'm very satisfied with both the code quality and support. I can easily say that they have the fastest support team I have ever seen here.",
    },
    {
      name: "TPM",
      role: "Customer Support",
      rating: 5.0,
      testimonial:
        "Can explain of these guys. They are so talented and customer support is beyond the limit. Recommended them to all. They work professionally. Awesome!!",
    },
    {
      name: "ckkapet",
      role: "Customer Support",
      rating: 4.7,
      testimonial:
        "WRTeam, we are continually impressed by the robustness, performance and scalability of the code developed for our app. Your rigorous standards and best practices deliver optimized, bug-free code of the highest quality.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="inline-block text-sm font-medium uppercase text-blue-800 bg-blue-50 px-4 py-1 rounded-full mb-2">
            Read Their Experiences
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Client Reviews – Hear It in Their Words
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              role={review.role}
              rating={review.rating}
              testimonial={review.testimonial}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-black text-white font-medium rounded hover:bg-gray-800 transition duration-300">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
}
