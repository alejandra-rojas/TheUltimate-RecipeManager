import RecipesGallery from "./recipesGallery";
import Filterbar from "./filterbar";
import { Recipe } from "../types";
import { useState } from "react";

export default function FilterableGallery({ recipes }: { recipes: Recipe[] }) {
  const [filterText, setFilterText] = useState<string>("");

  return (
    <>
      <Filterbar filterText={filterText} onFilterTextChange={setFilterText} />
      <RecipesGallery filterText={filterText} recipes={recipes} />
    </>
  );
}
