import {Category} from "./category";

export interface Product {

  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  created_at: string;
}
