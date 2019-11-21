import request from "../utils/request";

const PRODUCT_URL = "http://localhost:3001/products";

const product = {
  allProducts() {
    return request(PRODUCT_URL);
  },
  oneProduct(productId) {
    return request(PRODUCT_URL, productId);
  }
};

export default product;
