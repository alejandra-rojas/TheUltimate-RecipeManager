/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from "./components/navbar";
import FilterBar from "./components/filterbar";
import RecipesGallery from "./components/recipesGallery";

function App() {
  return (
    <>
      <Navbar />
      <FilterBar />
      <RecipesGallery />
    </>
  );
}

export default App;
