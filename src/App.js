import React from "react";
import { Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MainContainer from "./Main-container";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path='/' element={<MainContainer />}  />

      </Routes>
     
    </div>
  );
}

export default App;
