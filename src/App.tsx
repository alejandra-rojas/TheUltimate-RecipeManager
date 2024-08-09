/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import CountButton from "./components/CountButton";
import Recipes from "./components/Recipes";

function App() {
  return (
    <>
      <h1 className="text-xl font-bold">Your recipe collection</h1>
      <div className="card">
        <CountButton />
        <Recipes />
      </div>
    </>
  );
}

export default App;
