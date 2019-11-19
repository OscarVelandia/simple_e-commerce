/* eslint-disable camelcase */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image, Grid, Item, Button } from "semantic-ui-react";

import "./ProductCard.scss";

function ProductDetail(props) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const result = await axios.get(
          `http://localhost:3001/products/:${props.product.id}`
        );
        setProduct(result.data);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("Error: ", err);
      }
    }

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { description, discount, image_url, list_price, price } = product;
  return (
    <>
      <Grid>
        <Grid.Column width={10}>
          <Image src={image_url} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Item>
            <Item.Content verticalAlign="middle">
              <Item.Extra>
                <Button floated="right">Volver</Button>
              </Item.Extra>
              <Item.Header className="final-price">{price}</Item.Header>
              <span className="list-price">{list_price}</span>
              <span className="discount">{discount}%OFF</span>
              <Item.Description>{description}</Item.Description>
            </Item.Content>
          </Item>
        </Grid.Column>
      </Grid>
    </>
  );
}

export default ProductDetail;
