export interface Testimonial {
  id: number;
  name: string;
  image: string | null;
  ratings: number;
  description: string;
  rating_for: string;
  created_at: string;
  updated_at: string;
}

export interface TestimonialResponse {
  error: boolean;
  message: string;
  data: {
    current_page: number;
    data: Testimonial[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
      url: string | null;
      label: string;
      active: boolean;
    }[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  };
  code: number;
} 