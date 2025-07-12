import { useState } from "react";
function App() {
  const [color, setColor] = useState("black");
  function generateRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  function handleChangeColor() {
    const newColor = generateRandomRgbColor();
    setColor(newColor);
  }
  return (
    <div className="w-full h-screen transition-colors duration-500" style={{ backgroundColor: color }}>
      <div className="flex flex-col items-center justify-center h-full bg-opacity-0">
        <h1 className="text-white text-4xl font-bold mb-8">Random Background Color</h1>
        <button className="bg-white text-black px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 transition"onClick={handleChangeColor}>Change Background Color</button>
      </div>
    </div>
  );
}
export default App;
