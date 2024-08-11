export interface Recipe {
  comments: string | null;
  createdAt: string;
  creationSource: string | null;
  dietKeys: DietKeyTypes[];
  id: string;
  imgURL: string;
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

export enum DietKeyTypes {
  Cold,
  GlutenFree,
  Nuts,
  Spicy,
  Vegan,
  Vegetarian,
}
