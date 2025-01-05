import React from "react";
import ProductCard from "./Components/Product-card";
import product from "./data/product.json"; // Предполагаем, что данные в этом файле верны

function MainContainer() {
  return (
    <div className="main-container">
      {product.map((item) => (
        <ProductCard
          key={item.id}
          name={item.name}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default MainContainer;
