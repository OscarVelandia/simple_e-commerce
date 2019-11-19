/* eslint-disable camelcase */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "semantic-ui-react";
import { Link } from "@reach/router";

import "./ProductCard.scss";

function ProductCard() {
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
      <Grid columns={4} padded>
        {products.map(
          product =>
            product.enabled && (
              <Grid.Column key={product.id}>
                <div className="ui card product-card">
                  <Link to={`/products/${product.id}`} className="pet">
                    <div className="image">
                      <img src={product.image_url} alt={product.description} />
                    </div>
                  </Link>
                  <div className="content">
                    <div className="header final-price">{product.price}</div>
                    <div className="meta">
                      <span className="list-price">{product.list_price}</span>
                      <span className="discount">{product.discount}%OFF</span>
                    </div>
                    <div className="description">{product.description}</div>
                  </div>
                </div>
              </Grid.Column>
            )
        )}
      </Grid>
    </>
  );
}

export default ProductCard;
