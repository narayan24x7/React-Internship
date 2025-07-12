import { useState } from "react"

function App() {
 let [color,setColor]=useState("black");
 const colors = ["red", "blue", "green"];
const [index, setIndex] = useState(0);

 function handleColorChanger() {
    const nextIndex = (index + 1) % colors.length;
    setColor(colors[nextIndex]);
    setIndex(nextIndex);
  }
  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor:color}}>
      <div className="bg-gray-500 text-white flex-col justify-center align-center">
      <h1 className="flex flex-warp gap-4">Bg Changer</h1>
      <div className="flex flex-warp gap-4">
      <button className="bg-red-700 p-2 rounded-lg"  onClick={()=>setColor("red")}>Red</button>
      <button className="bg-blue-700 p-2 rounded-lg" onClick={()=>setColor("blue")}>Blue</button>
      <button className="bg-green-700 p-2 rounded-lg" onClick={()=>setColor("green")}>Green</button>
      <button className="bg-black p-2 rounded-lg" onClick={()=> handleColorChanger()}>Change Color</button>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
