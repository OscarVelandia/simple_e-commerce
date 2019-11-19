/* eslint-disable camelcase */
import React from "react";
import "./Navbar.scss";

function ProductCard(props) {
  const { description } = props;

  return (
    <>
      <header>
        <a href="https://www.garbarino.com/">
          <img
            src="//dj4i04i24axgu.cloudfront.net/normi/statics/0.2.78/garbarino/images/logo-garbarino.svg"
            alt={description}
          />
        </a>
      </header>
    </>
  );
}

export default ProductCard;
