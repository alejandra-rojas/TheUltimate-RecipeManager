/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import CountButton from "./components/CountButton";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <CountButton />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
