/* eslint-disable camelcase */
import React, { useState, useEffect } from "react";
import { Image, Grid, Header } from "semantic-ui-react";
import { Redirect } from "@reach/router";
import productRequests from "../services/products";
import formatCurrency from "../utils/formatCurrency";

import Loader from "./GeneralLoader";
import "./ProductDetail.scss";

function ProductDetail(props) {
  const [product, setProduct] = useState([]);
  const loaderMessage = "Cargando su producto";
  const { productId } = props;
  const { description, discount, image_url, list_price, price } = product;
  const paymentMethods = [
    {
      id: "gba-payment-visa-debito",
      paymentDescription: "visa",
      src:
        "//d3lfzbr90tctqz.cloudfront.net/epi/resource/r/d/2b02baec5de45de28b27c2d1f23ff6a242ebe947dc2a98f75ba23a855e81920f"
    },
    {
      id: "gba-payment-visa-debito",
      paymentDescription: "visa débito",
      src:
        "//d3lfzbr90tctqz.cloudfront.net/epi/resource/r/d/c57287e3c97689e9598fe6b80a45f67bfa1ab24c881d2bb6e07664783f358d3d"
    },
    {
      id: "gba-payment-mastercard",
      paymentDescription: "mastercard",
      src:
        "//d3lfzbr90tctqz.cloudfront.net/epi/resource/r/d/f36da9316ef09bf88849bb98ab8916e55c09d3afcf1f5bae00167069e2c82e56"
    },
    {
      id: "gba-payment-visa-naranja",
      paymentDescription: "visa naranja",
      src:
        "//d3lfzbr90tctqz.cloudfront.net/epi/resource/r/d/9d315642097efa176aeb7d4e2097ffe60adfde8d10622f9baad7d9bbbec76198"
    },
    {
      id: "gbc-ahora-12",
      paymentDescription: "ahora 12",
      src:
        "//d16pzmpb3xz65p.cloudfront.net/statics/2.0.386/images/logos/ahora12.svg"
    },
    {
      id: "gbc-ahora-18",
      paymentDescription: "ahora 18",
      src:
        "//d16pzmpb3xz65p.cloudfront.net/statics/2.0.386/images/logos/ahora18.svg"
    }
  ];

  useEffect(() => {
    const getProduct = async () => {
      try {
        const enabledProducts = await productRequests.oneProduct(productId);
        return setProduct(enabledProducts);
      } catch (_) {
        return <Redirect to="/app" noThrow />;
      }
    };

    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!Object.keys(product).length ? (
        <Loader message={loaderMessage} />
      ) : (
        <Grid className="border-right-box" columns="2" divided>
          <Grid.Column width={10}>
            <Header as="h2">{description}</Header>
            <Image centered src={image_url} size="large" />
          </Grid.Column>
          <Grid.Column width={5} textAlign="center" className="product">
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
