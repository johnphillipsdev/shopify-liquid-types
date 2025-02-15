export interface IProduct {
  id: number;
  title: string;
  handle: string;
  description: string;
  available: boolean;
  price: number;
  compare_at_price?: number;
  tags: string[];
  vendor: string;
  images: string[];
}
