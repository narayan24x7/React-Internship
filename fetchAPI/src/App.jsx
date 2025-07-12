// App.js
import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import AddProductPage from "./pages/AddProductPage"

import ThemeContextProvider from './context/ThemeContextProvider'
import ToggleBtn from './components/ToggleBtn'
import themeContext from './context/themeContext' 

function AppContent() {
  const { theme } = useContext(themeContext)

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
      <BrowserRouter>
        <div className="bg-orange-100">
          <Header />
        </div>
        <div className="p-4">
          <ToggleBtn />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/addproduct" element={<AddProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


function App() {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  )
}

export default App
