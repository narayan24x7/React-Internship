import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import logo from "/src/img/01.jpg";
import logo2 from "/src/img/02.jpg";

function App() {
  let menu = ["Home", "About", "Products", "Contact"];
  return (
    <Router>
      <Header logo="My Logo" nav_menu={menu} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 className="text-blue-500 font-bold text-3xl text-center mt-6">
                Hello, Tailwind Project
              </h1>
              
              <div className="flex items-center justify-center h-screen px-8 gap-0">
                <div className="flex-1 flex justify-end">
                  <img
                    src={logo}
                    alt="Left"
                    className="rounded-4xl shadow-lg w-80"
                  />
                </div>
                <div className="flex-1 flex justify-center">
                  <img src={logo2} alt="Right" />
                </div>
              </div>
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer company="XYZ.com" year="2025" />
    </Router>
  );
}

export default App;
