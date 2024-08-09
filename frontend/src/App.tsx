/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import FilterBar from "./components/filterbar";
import RecipesGallery from "./components/recipesGallery";

interface Recipe {
  id: string;
  name: string;
  servings: number;
  ingredients: string;
  instructions: string;
  source: string;
  image: string;
  comments: string;
}

const url = "http://localhost:5273/api/Recipes";

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(url)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was a problem while fetching the recipes:", error);
        setLoading(false);
      });
  }, []);

  console.log(recipes);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <FilterBar />
      <RecipesGallery />
    </>
  );
}

export default App;
