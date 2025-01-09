import React from "react";
import ProductCard from "./Product-card";
import product from "../data/product.json";
import { Link } from "react-router-dom";
import "../Styles/ProductCard.css"

function Man() {
  return (
    <div className="Man-container">
      {product.map((item) => (
        <Link to={`/product/${item.id}`} key={item.id} className="product-link">
          <ProductCard
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
          />
        </Link>
      ))}
    </div>
  );
}

export default Man;
