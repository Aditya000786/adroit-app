import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import OrdersPage from "./components/order/OrdersPage";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<OrdersPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
