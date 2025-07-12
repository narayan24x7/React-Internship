import { useRef } from "react";
import TextAnalysis from "./components/TextAnalysis";
import useAnalyzeText from "./hooks/useAnalyzeText";

function App() {
  const { text, setText, stats } = useAnalyzeText();
  const inputRef = useRef(null); 

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4 bg-gray-300">
      <div>
        <textarea
          ref={inputRef}
          name="input"
          className="border-2 border-blue-400 w-96 h-24 p-2 rounded"
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <TextAnalysis stats={stats} />
    </div>
  );
}

export default App;
