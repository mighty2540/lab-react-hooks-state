import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false);

  // TODO: Implement state for cart management
  const [cart, setCart] = useState([]);

  // TODO: Implement state for category filtering
  const [selectCategory, setSelectedCategory] = useState("all");

  // Turn to dark mode
  const toggleDarkMode = () =>{
    setIsDarkMode(!isDarkMode)
  }


  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
  }
  return (
    <div className={isDarkMode ? `dark-mode` : `light-mode`}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}

      <DarkModeToggle 
      isDarkMode = {isDarkMode}
      toggleDarkMode ={toggleDarkMode}
      />

      {/* TODO: Implement category filter dropdown */}

      <label>Filter by Category: </label>
      <select value={selectCategory} onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList 
      selectCategory={selectCategory}

      onAddToCart={handleAddToCart}
          
      />

      <Cart cartItems={cart} />


    </div>
  )
}

export default App
