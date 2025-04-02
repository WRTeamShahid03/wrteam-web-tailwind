'use client'
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";
import UserIcon from "../../../assets/images/homePage/Icon.svg";
import { useEffect, useState } from "react";
import { axiosClient } from "@/lib/api";
import { Testimonial } from "@/types/testimonial";

// Star rating component to display ratings
const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          className="text-[#e2a52d] fill-[#e2a52d] w-5 mr-0.5"
        />
      ))}
      {hasHalfStar && (
        <StarHalf className="text-[#e2a52d] fill-[#e2a52d] w-5 mr-0.5" />
      )}
      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
        <Star
          key={`empty-${i}`}
          className="text-yellow-400 mr-0.5"
        />
      ))}
      <span className="ml-1.5 font-semibold bg-[#2e71fe1f] py-1 px-4 rounded-full">{rating.toFixed(1)}</span>
    </div>
  );
};

// Skeleton loader for review card
const ReviewCardSkeleton = () => {
  return (
    <div className="flex flex-col h-full p-5 bg-white rounded-lg shadow-sm border border-gray-100 animate-pulse">
      <div className="flex items-center justify-between mb-3">
        {/* Blue user icon placeholder */}
        <div className="bg-blue-300 rounded-full w-8 h-8 flex items-center justify-center shrink-0"></div>
        {/* Stars placeholder */}
        <div className="bg-gray-200 h-4 w-20 rounded"></div>
      </div>
      {/* Text content placeholders */}
      <div className="space-y-2 mb-5">
        <div className="bg-gray-200 h-3 w-full rounded"></div>
        <div className="bg-gray-200 h-3 w-full rounded"></div>
        <div className="bg-gray-200 h-3 w-full rounded"></div>
        <div className="bg-gray-200 h-3 w-3/4 rounded"></div>
      </div>
      <div className="mt-auto">
        <div className="border-t border-gray-200 pt-3 mb-2"></div>
        <div className="space-y-2">
          <div className="bg-gray-200 h-4 w-24 rounded"></div>
          <div className="bg-gray-200 h-3 w-32 rounded"></div>
        </div>
      </div>
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
    <div className="break-inside-avoid mb-5 flex flex-col h-full p-5 bg-white rounded-2xl border border-[#d8deef]">
      <div className="flex items-center justify-between mb-3">
        {/* Blue user icon at top left */}
        <div className="primaryBg rounded-full w-8 h-8 flex items-center justify-center shrink-0">
          <Image src={UserIcon} alt="User Icon" width={15} height={15} />
        </div>
        {/* Stars displayed on the right side */}
        <div>
          <StarRating rating={rating} />
        </div>
      </div>
      <p className="text-gray-700 mb-5 mt-4 leading-relaxed">
        {testimonial}
      </p>
      <div className="mt-auto">
        <div className="border-t border-gray-200 pt-3 mb-2"></div>
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-xl">{name}</h4>
          <p className="font-medium text-gray-600">For {role}</p>
        </div>
      </div>
    </div>
  );
};

export default function ClientReviewSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setIsLoading(true);

        const response = await axiosClient.get('/api/testimonials', {
          timeout: 10000
        });

        if (response?.data?.data?.data && Array.isArray(response.data.data.data)) {
          setTestimonials(response.data.data.data);
        }
      } catch (error) {
        // Fallback to empty array is already set in initial state
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Use API data if available, otherwise use fallback data
  const displayTestimonials = testimonials.length > 0
    ? testimonials.map(item => ({
      name: item.name,
      role: item.rating_for,
      rating: item.ratings,
      testimonial: item.description
    }))
    : [];

  return (
    <section className="py-16">
      <div className="container space-y-12 md:space-y-16 lg:space-y-20'">
        <div className='flexColCenter gap-4 md:gap-6'>
          <span className='sectionTag text-black'>Read Their Experiences</span>
          <h3 className='sectionTitle'>Client Reviews - Hear It in Their Words</h3>
        </div>

        <div className="max-479:columns-1 max-1199:columns-2 columns-3 gap-6 md:gap-8">
          {isLoading ? (
            // Show skeleton cards while loading (same layout as actual cards)
            [...Array(6)].map((_, index) => (
              <ReviewCardSkeleton key={`skeleton-${index}`} />
            ))
          ) : (
            // Show actual testimonial cards when data is loaded
            displayTestimonials.map((review, index) => (
              <ReviewCard
                key={index}
                name={review.name}
                role={review.role}
                rating={Number(review.rating)}
                testimonial={review.testimonial}
              />
            ))
          )}
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
