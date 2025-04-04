export interface Blog {
  id: number;
  title: string;
  slug: string;
  image: string;
  description: string;
  short_description: string;
  category_id: number;
  created_at: string;
  updated_at: string;
  seo_title: string;
  seo_keywords: string | null;
  seo_description: string;
  seo_image: string | null;
  category: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface BlogResponse {
  error: boolean;
  message: string;
  data: {
    current_page: number;
    data: Blog[];
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