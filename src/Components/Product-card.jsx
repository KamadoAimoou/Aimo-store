import React from "react";
import '../Styles/ProductCard.css';

function ProductCard({ name, image, description, price }) {
  return (
    <div className="product-card">
      <img src={`/images/${image}`} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="price">${price}</p>
    </div>
  );
}

export default ProductCard;
