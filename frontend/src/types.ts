export interface Recipe {
  comments: string | null;
  createdAt: string;
  creationSource: string | null;
  id: string;
  image: string | null;
  ingredients: string;
  instructions: string;
  recipeType: RecipeType;
  name: string;
  rating: number;
  servings: number;
  source: string | null;
}

export enum RecipeType {
  BreakfastAndBrunch,
  Bite,
  Cupboard,
  Main,
  Desserts,
  Salads,
  SaucesAndDips,
  Sides,
  Snacks,
  SoupsAndStews,
  Sweets,
}
