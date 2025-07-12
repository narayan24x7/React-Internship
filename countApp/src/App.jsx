import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1 className="p-4">Counter Application (Hooks)</h1>
      <div className="p-4">
        <button onClick={() => setCounter(counter + 1)} className="bg-red-500 text-white p-2 mx-2"> + </button>
        <input type="number" min={0} max={100} value={counter}/>
        <button onClick={() => setCounter(counter - 1)}className="bg-red-500 text-white p-2 mx-2"> - </button>
        <br/>
        <button onClick={() => setCounter(0)} className="mt-4 bg-gray-500 text-white p-2">Reset</button>
      </div>
    </>
  );
}

export default App;
