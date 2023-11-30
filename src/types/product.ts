export interface Product {
  href: string;
  slug: string;
  src: string;
  name: string;
  price: string;
  type: string;
  advice: string;
  details: string;
  detailsList: string[];
  productImages: string[];
  engravable?: boolean;
}
