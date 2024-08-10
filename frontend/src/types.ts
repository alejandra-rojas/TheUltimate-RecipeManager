export interface Recipe {
  id: string;
  createdAt: string;
  creationSource: string | null;
  name: string;
  servings: number;
  ingredients: string;
  instructions: string;
  source: string | null;
  image: string | null;
  comments: string | null;
  rating: number;
}
