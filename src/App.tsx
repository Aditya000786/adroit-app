import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductOrder from "./components/order/ProductOrder";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<ProductOrder />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
