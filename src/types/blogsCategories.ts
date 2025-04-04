export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  blogs_count: number;
}

export interface BlogCategoryResponse {
  error: boolean;
  message: string;
  data: {
    current_page: number;
    data: BlogCategory[];
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