import React from "react";
import "./Styles/Main-container.css";

function MainContainer() {
  return (
    <div className="all-main-image">
      <div className="image-top-main">
        <img
          src="https://sotni.ru/wp-content/uploads/2023/08/kristian-dior-zastavka-2.webp"
          alt="Main Top"
          className="image-top"
        />
      </div>

      <div className="two-images">
        <img
          src="https://i.pinimg.com/736x/a7/f9/c0/a7f9c0e9d92d267564b5fe41066d702a.jpg"
          alt="Two Images 1"
        />
        <img
          src="https://i.pinimg.com/736x/0c/83/6e/0c836e852565b22964f1a5f5f50e85d4.jpg"
          alt="Two Images 2"
        />
      </div>

      <div className="three-images">
        <img
          src="https://static.sobaka.ru/images/image/01/14/91/76/_normal.jpg?v=1562848407"
          alt="Three Images 1"
        />
        <img
          src="https://i.pinimg.com/originals/a5/29/db/a529dbf0d9d1dc5b54cc3ff67988aac4.jpg"
          alt="Three Images 2"
        />
        <img
          src="https://i.pinimg.com/736x/17/35/21/1735213357eebbf8b5796c6f6a222b0f.jpg"
          alt="Three Images 3"
        />
      </div>
    </div>
  );
}

export default MainContainer;
