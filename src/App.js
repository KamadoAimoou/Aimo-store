import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MainContainer from "./Main-container";
import Man from "./Components/Man";
import Footer from "./Components/Footer-123";
import ProductDetails from "./Components/ProductDetails";
import Favorites from "./Components/Favorite";

function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => {
      // Проверяем, чтобы не было дубликатов
      if (prevFavorites.some((item) => item.id === product.id)) {
        return prevFavorites;
      }
      return [...prevFavorites, product];
    });
  };

  const removeFromFavorites = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== productId)
    );
  };

  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/Man" element={<Man />} />
        <Route
          path="/product/:id"
          element={<ProductDetails addToFavorites={addToFavorites} />}
        />
        <Route
          path="/Favorite"
          element={<Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
