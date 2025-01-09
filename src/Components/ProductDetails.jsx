import React from "react";
import { useParams } from "react-router-dom";
import product from "../data/product.json";
import "../Styles/ProductDetails.css";

function ProductDetails({ addToFavorites }) {
  const { id } = useParams();
  const selectedProduct = product.find((item) => item.id === Number(id));

  if (!selectedProduct) {
    return <h2 className="not-found">Товар не найден!</h2>;
  }

  return (
    <div className="product-details">
      <div className="product-container">
        <div className="product-images">
          <img
            src={`/images/${selectedProduct.image}`}
            alt={selectedProduct.name}
            className="product-main-image"
          />
        </div>
        <div className="product-info">
          <h1 className="product-name">{selectedProduct.name}</h1>
          <p className="product-description">{selectedProduct.description}</p>
          <p className="product-price">Цена: {selectedProduct.price} ₸</p>
          <div className="product-actions">
            <button
              className="add-to-cart-button"
              onClick={() => addToFavorites(selectedProduct)}
            >
              Добавить в избранное
            </button>
            <button className="buy-now-button">Купить сейчас</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
