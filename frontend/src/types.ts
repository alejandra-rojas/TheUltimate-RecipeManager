export interface Recipe {
  id: string;
  createdAt: string;
  name: string;
  servings: number;
  ingredients: string;
  instructions: string;
  source: string;
  image: string;
  comments: string;
  rating: number;
}
