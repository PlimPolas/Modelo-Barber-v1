export interface Review {
  id: string;
  authorName: string;
  rating: number;
  excerpt: string;
  source: string;
  publishedAt?: string;
  verified: boolean;
  featured: boolean;
}
