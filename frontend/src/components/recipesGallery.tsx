import { Recipe } from "../types";
import RecipeCard from "./recipeCard";

export default function Recipes({ recipes }: { recipes: Recipe[] }) {
  console.log("Props", recipes);
  return (
    <main className="mx-auto max-w-7xl flex flex-col flex-wrap gap-5 mt-8 px-4 py-6 sm:px-6  sm:flex-row sm:gap-6 lg:gap-6 lg:px-8">
      {recipes.map((recipe) => {
        return (
          <RecipeCard
            comments={recipe.comments}
            createdAt={recipe.createdAt}
            creationSource={recipe.creationSource}
            id={recipe.id}
            name={recipe.name}
            servings={recipe.servings}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            image={recipe.image}
            source={recipe.source}
            rating={recipe.rating}
          />
        );
      })}
    </main>
  );
}
