/* eslint-disable camelcase */
import React, { useState, useEffect } from "react";
import { Image, Grid, Header } from "semantic-ui-react";
import { Redirect } from "@reach/router";
import productRequests from "../services/products";
import { formatCurrency } from "../utils/auxiliarMethods";
import { paymentMethods } from "../utils/auxiliarData";

import Loader from "./GeneralLoader";

import "./ProductDetail.scss";

function ProductDetail(props) {
  const [product, setProduct] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const loaderMessage = "Cargando su producto";
  const { productId } = props;
  const { description, discount, image_url, list_price, price } = product;

  useEffect(() => {
    const getProduct = async () => {
      try {
        const enabledProducts = await productRequests.oneProduct(productId);

        setProduct(enabledProducts);
        return setIsLoading(false);
      } catch (_) {
        setIsError(true);
        return setIsLoading(false);
      }
    };

    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && <Loader message={loaderMessage} />}
      {isError && <Redirect to="/error" noThrow />}
      {!isError && !isLoading && (
        <Grid className="detail" columns="2" divided>
          <Grid.Column width={10} className="product-picture">
            <Header as="h2">{description}</Header>
            <Image centered src={image_url} />
          </Grid.Column>
          <Grid.Column width={5} textAlign="center" className="product-price">
            <div className="final-price">{formatCurrency(price)}</div>
            <span className="list-price">{formatCurrency(list_price)}</span>
            <span className="discount">
              {discount}
              %OFF
            </span>

            <fieldset className="payment-information">
              <legend>Pagá con todos los medios</legend>
              <Grid columns={4} padded>
                {paymentMethods.map(method => (
                  <Grid.Column key={method.id}>
                    <img
                      className="payments-methods"
                      alt={method.paymentDescription}
                      src={method.src}
                    />
                  </Grid.Column>
                ))}
              </Grid>

              <p className="promo-title">Promociones bancarias</p>
              <ul className="promo-list">
                <li>
                  <span className="benefits">3, 6 y 12 cuotas sin interés</span>{" "}
                  con Visa{" "}
                </li>
                <li>
                  <span className="benefits">3, 6 y 12 cuotas sin interés</span>{" "}
                  con Mastercard{" "}
                </li>
                <li>
                  <span className="benefits">3, 6 y 12 cuotas sin interés</span>{" "}
                  con American Express Ahora 12-18
                </li>
              </ul>
              <a href="https://www.garbarino.com">Mirá todas las promociones</a>
            </fieldset>
          </Grid.Column>
        </Grid>
      )}
    </>
  );
}

export default ProductDetail;
