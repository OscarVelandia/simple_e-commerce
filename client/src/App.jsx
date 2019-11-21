import React from "react";
import { Router } from "@reach/router";

import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ProductDetail from "./components/ProductDetail";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <ErrorPage path="/error" />
        <ProductCard path="/" />
        <ProductDetail path="/products/:productId" />
      </Router>
    </>
  );
}

export default App;
