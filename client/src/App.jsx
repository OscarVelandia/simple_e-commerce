import React, { useState, useEffect } from "react";
import axios from "axios";
import { Router } from "@reach/router";
import { Loader, Dimmer } from "semantic-ui-react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ProductDetail from "./components/ProductDetail";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const result = await axios.get("http://localhost:3001/products");
        setProducts(result.data);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("Error: ", err);
      }
    }

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar props={products} />
      {products.length ? (
        <ProductCard />
      ) : (
        <>
          <Dimmer active>
            <Loader indeterminate>Trayendo los productos</Loader>
          </Dimmer>
        </>
      )}

      <Router>
        <ProductCard path="/" />
        <ProductDetail path="/products/:id" />
      </Router>
    </>
  );
}

export default App;
