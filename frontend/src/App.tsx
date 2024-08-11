import { useState } from "react";
import Navbar from "./components/navbar";
import { Recipe } from "./types";
import FilterableGallery from "./components/filterableGallery";
import NewRecipeModal from "./components/newRecipeModal";
import { useQuery } from "@tanstack/react-query";

export const apiUrl = "http://localhost:5273/api/Recipes";

function App() {
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);

  const { error, data, isFetching } = useQuery<Recipe[]>({
    queryKey: ["repoRecipes"],
    queryFn: async () => {
      const response = await fetch(apiUrl);
      return await response.json();
    },
  });

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Navbar
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
      />
      <NewRecipeModal
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
      />

      {isFetching ? (
        <main className="absolute inset-0 w-full h-screen flex items-center justify-center ">
          <p className="font-robotomono text-4xl text-gray-400">Loading...</p>
        </main>
      ) : (
        <>
          <FilterableGallery recipes={data ?? []} />
        </>
      )}
    </>
  );
}

export default App;
