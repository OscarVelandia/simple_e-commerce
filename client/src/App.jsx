import React from "react";
import { Router } from "@reach/router";

import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <ProductCard path="/" />
        <ProductDetail path="/products/:id" />
      </Router>
    </>
  );
}

export default App;
