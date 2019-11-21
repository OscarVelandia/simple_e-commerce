import axios from "axios";

const productsRequest = async () => {
  try {
    const result = await axios.get("http://localhost:3001/products");
    const enabledProducts = result.data.filter(product => product.enabled);

    return enabledProducts;
  } catch (err) {
    // eslint-disable-next-line no-console
    return console.error("Error: ", err);
  }
};

export default productsRequest;
