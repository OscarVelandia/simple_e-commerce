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

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const products = await getProductsFromGarbarinoEndpoint();
      const productsAvailability = await ProductAvailabilityModel.find()
        .exec()
        .then(docs => console.log(docs));

      res.json(productsAvailability);
      res.status(200).json({ data: products });
    } catch (err) {
      req.error = err;
      res.status(400).end();
    }
  },

  getOneProduct: async (req, res) => {
    try {
      const productAvailability = await ProductAvailabilityModel.findOne({
        createdBy: req.user.id,
        _id: req.params.id
      })
        .lean()
        .exec();

      if (!productAvailability) {
        return res.status(400).end();
      }

      return res.status(200).send(productAvailability);
    } catch (err) {
      req.error = err;

      return res.status(400).end();
    }
  }
};
