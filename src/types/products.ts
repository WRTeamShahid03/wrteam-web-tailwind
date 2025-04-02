export interface Products {
    id: number;
    name: string;
    codecanyon_product_code: string;
    product_title: string;
    slug: string;
    price: number;
    sale_price: number | null;
    extended_sale_price: number | null;
    trending: string;
    icon_image: string;
    banner_image: string;
    codecanyon_link: string;
    sales: number;
    rating: number;
    rank: number;
    display_new_ui: number;
    theme_color: string;
    secondary_color: string | null;
    category: string | null;
    subcategory: string | null;
  }
  
  export interface ProductResponse {
    error: boolean;
    message: string;
    data: {
      current_page: number;
      data: Products[];
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