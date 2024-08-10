import { Recipe } from "../types";
import RecipeCard from "./recipeCard";

export default function Recipes({
  recipes,
  filterText,
}: {
  recipes: Recipe[];
  filterText: string;
}) {
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <main className="mx-auto max-w-7xl flex flex-col flex-wrap gap-5 mt-8 px-4 py-6 sm:px-6  sm:flex-row sm:gap-6 lg:gap-6 lg:px-8">
      {filteredRecipes.map((recipe) => {
        return (
          <RecipeCard
            comments={recipe.comments}
            createdAt={recipe.createdAt}
            creationSource={recipe.creationSource}
            dietKeys={recipe.dietKeys}
            key={recipe.id}
            name={recipe.name}
            servings={recipe.servings}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            imgURL={recipe.imgURL}
            source={recipe.source}
            rating={recipe.rating}
            recipeType={recipe.recipeType}
          />
        );
      })}
    </main>
  );
}
