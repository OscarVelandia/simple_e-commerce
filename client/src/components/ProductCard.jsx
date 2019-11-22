import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { Link } from "@reach/router";
import { formatCurrency } from "../utils/auxiliarMethods";
import productRequests from "../services/products";

import Loader from "./GeneralLoader";
import "./ProductCard.scss";

function ProductCard() {
  const loaderMessage = "Cargando los productos.";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const enabledProducts = await productRequests
        .allProducts()
        .then(fetchedProducts =>
          fetchedProducts.filter(product => product.enabled)
        );

      setProducts(enabledProducts);
    };

    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!products.length ? (
        <Loader message={loaderMessage} />
      ) : (
        <Grid columns={4} padded>
          {products.map(product => (
            <Grid.Column key={product.id}>
              <div className="ui card product">
                <Link to={`/products/${product.id}`} className="pet">
                  <div className="image">
                    <img src={product.image_url} alt={product.description} />
                  </div>
                </Link>
                <div className="content">
                  <div className="header final-price">
                    {formatCurrency(product.price)}
                  </div>
                  <div className="meta">
                    <span className="list-price">
                      {formatCurrency(product.list_price)}
                    </span>
                    <span className="discount">
                      {product.discount}
                      %OFF
                    </span>
                  </div>
                  <div className="description">{product.description}</div>
                </div>
              </div>
            </Grid.Column>
          ))}
        </Grid>
      )}
    </>
  );
}

export default ProductCard;
