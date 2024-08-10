import { Recipe } from "../types";
import RecipeCard from "./recipeCard";

export default function Recipes({ recipes }: { recipes: Recipe[] }) {
  console.log("Props", recipes);
  return (
    <main className="mx-auto max-w-7xl flex flex-col flex-wrap gap-5 mt-8 px-4 py-6 sm:px-6  sm:flex-row sm:gap-6 lg:gap-6 lg:px-8">
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </main>
  );
}
