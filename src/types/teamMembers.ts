export interface TeamMember {
  id: number;
  name: string;
  gender: string;
  designation: string;
  image: string;
  rank: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface TeamMemberResponse {
  error: boolean;
  message: string;
  data: {
    current_page: number;
    data: TeamMember[];
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