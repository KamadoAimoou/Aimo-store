import React from "react";
import "../Styles/Favorites.css";

function Favorites({ favorites, removeFromFavorites }) {
  return (
    <div className="favorites-container">
      <h2>Избранные товары</h2>
      {favorites.length === 0 ? (
        <p>Список избранного пуст.</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((item) => (
            <div key={item.id} className="favorite-item">
              <img src={`/images/${item.image}`} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price} ₸</p>
              <div>
                <button
                  className="remove-button"
                  onClick={() => removeFromFavorites(item.id)}
                >
                  Убрать из избранного
                </button>
                <button className="buy-now-button">Купить сейчас</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
