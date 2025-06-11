export interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  categories: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
