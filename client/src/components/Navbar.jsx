/* eslint-disable camelcase */
import React from "react";
import { Link } from "@reach/router";
import { Icon } from "semantic-ui-react";

import "./Navbar.scss";

function ProductCard() {
  return (
    <>
      <header>
        <a href="https://www.garbarino.com/">
          <img
            src="//dj4i04i24axgu.cloudfront.net/normi/statics/0.2.78/garbarino/images/logo-garbarino.svg"
            alt="Garbarino Logo"
          />
        </a>
        <Link to="/" className="return-icon">
          <Icon name="arrow left" size="big" aria-label="Volver" />
        </Link>
      </header>
    </>
  );
}

export default ProductCard;
