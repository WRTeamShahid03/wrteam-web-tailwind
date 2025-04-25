export interface VideoTestimonial {
  id: number;
  product_id: number;
  name: string;
  url: string;
  thumbnail: string;
  status: number;
  product: {
    id: number;
    codecanyon_product_code: string;
    name: string;
    product_title: string;
    slug: string;
    price: number;
    sale_price: number | null;
    extended_sale_price: number | null;
    trending: string;
    icon_image: string;
    icon_image2: string;
    category: string;
    banner_image: string;
    codecanyon_link: string;
    sales: number;
    rating: number;
    description: string;
    checkout_url: string;
    content_id: string;
    seo_title: string;
    seo_keywords: string;
    seo_description: string;
    seo_image: string | null;
    codecanyon_other_data: string;
    rank: number;
    theme_color: string;
    secondary_color: string;
    extended_license_link: string;
    extended_license_price: number;
    style: number;
    display_new_ui: number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
  };
}

export interface VideoTestimonialResponse {
  error: boolean;
  message: string;
  data: VideoTestimonial[];
  code: number;
}
