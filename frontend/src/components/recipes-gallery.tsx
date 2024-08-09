import { useEffect, useState } from "react";

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

export default function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  //   useEffect(() => {
  //     fetch(url)
  //       .then((results) => {
  //         return results.json();
  //       })
  //       .then((data) => {
  //         setRecipes(data);
  //       });
  //   }, []);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const recipes = await fetchRecipes(url);
        setRecipes(recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    getRecipes();
  }, []);

  const fetchRecipes = async (url: string): Promise<Recipe[]> => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  };

  console.log(recipes);

  if (loading) return <div>Loading...</div>;

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Your content */}
      </div>
    </main>
  );
}
