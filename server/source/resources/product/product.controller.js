const axios = require("axios");
const ProductAvailabilityModel = require("./product.model");

const URL =
  "http://garbarino-mock-api.s3-website-us-east-1.amazonaws.com/products";

const getProductsFromGarbarinoEndpoint = async () => {
  try {
    return axios
      .get(URL)
      .then(products => products)
      .then(products =>
        products.data.items.map(product => {
          return { ...product, enabled: true };
        })
      );
  } catch (err) {
    return new Error(err);
  }
};

const searchNotAvailableProduct = (product, productIsNotAvailable) => {
  return productIsNotAvailable.some(productNotAvailable => {
    return (
      productNotAvailable.product_id === product.id &&
      productNotAvailable.enabled === false
    );
  });
};

const requiredProduct = (garbarinoProducts, id) => {
  return garbarinoProducts.reduce((requiredProd, product) => {
    return product.id === id ? (requiredProd = product) : requiredProd;
  }, {});
};

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const garbarinoProducts = await getProductsFromGarbarinoEndpoint();

      const productsNotAvailable = await ProductAvailabilityModel.find();

      const products = garbarinoProducts.map(product => {
        const productIsNotAvailable = searchNotAvailableProduct(
          product,
          productsNotAvailable
        );

        if (productIsNotAvailable) {
          return { ...product, enabled: false };
        }

        return { ...product, enabled: true };
      });

      res.status(200).json({ data: products });
    } catch (err) {
      req.error = err;
      res.status(400).end();
    }
  },

  getOneProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const garbarinoProducts = await getProductsFromGarbarinoEndpoint();
      const productNotAvailable = await ProductAvailabilityModel.findOne({
        product_id: id
      }).and({ enabled: false });
      const products = requiredProduct(garbarinoProducts, id);

      if (productNotAvailable) {
        return res
          .status(400)
          .send("El producto que busca no está disponible")
          .end();
      }

      if (Object.keys(products).length === 0) {
        return res
          .status(400)
          .send("El producto que busca no existe")
          .end();
      }

      return res.status(200).json({ data: products });
    } catch (err) {
      req.error = err;

      return res.status(400).end();
    }
  },

  setProductAvailability: async (req, res) => {
    try {
      const { enabled } = req.body;
      const { id } = req.params;
      const garbarinoProducts = await getProductsFromGarbarinoEndpoint();
      const products = requiredProduct(garbarinoProducts, id);
      const message = enabled
        ? "El producto ha sido habilitado"
        : "El producto ha sido deshabilitado";
      const existingProductInDB = await ProductAvailabilityModel.findOne({
        product_id: id
      });

      if (Object.keys(products).length === 0) {
        return res
          .status(400)
          .send("El producto que intenta deshabilitar no existe")
          .end();
      }

      if (!existingProductInDB) {
        await ProductAvailabilityModel.create({
          product_id: id,
          enabled
        });
      } else {
        await ProductAvailabilityModel.findOneAndUpdate(
          { product_id: id },
          { enabled }
        );
      }

      return res.status(200).json({
        message,
        productId: req.params.id
      });
    } catch (err) {
      req.error = err;

      return res.status(400).end();
    }
  }
};
