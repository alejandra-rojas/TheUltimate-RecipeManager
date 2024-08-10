import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import { Recipe } from "./types";
import FilterableGallery from "./components/filterableGallery";

const apiUrl = "http://localhost:5273/api/Recipes";

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(apiUrl)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was a problem while fetching the recipes:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <main className="absolute inset-0 w-full h-screen flex items-center justify-center ">
          <p className="font-robotomono text-4xl text-gray-400">Loading...</p>
        </main>
      ) : (
        <>
          <FilterableGallery recipes={recipes} />
        </>
      )}
    </>
  );
}

export default App;
