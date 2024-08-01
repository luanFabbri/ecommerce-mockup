import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index/index";
import MyCategories from "./pages/my-categories/my-categories";
import MyProducts from "./pages/my-products/my-products";
import CheckProduct from "./pages/check-product/check-product";
import InsertProduct from "./pages/insert-product/insert-product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/my-products" element={<MyProducts />} />
        <Route path="/my-categories" element={<MyCategories />} />
        <Route path="/check-product" element={<CheckProduct />} />
        <Route path="/insert-product" element={<InsertProduct />} />
        {/* <Route path="/insert-categories" element={<CheckProduct />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
