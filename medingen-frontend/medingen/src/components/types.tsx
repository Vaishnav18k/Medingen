export interface Product {
  id: number;
  name: string;
  description: string;
  uses: string[];
  howItWorks: string[];
  sideEffects: string[];
}

export interface Description {
  id : number;
  title: string;
  content: string;
}

export interface Review {
  rating: number;
  comment: string;
  created_at?: string;
}

// export interface Medicine {
//   id: number;
//   name: string;
//   manufacturer: string;
//   generic_name: string;
//   price: number;
//   discounted_price: number;
//   image_url: string;
//   rating: number; // add this extra
//   reviews: { comment: string }[];
// }