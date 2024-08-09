/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from "./components/navbar";
import FilterBar from "./components/filterbar";
import RecipesGallery from "./components/recipes-gallery";

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
