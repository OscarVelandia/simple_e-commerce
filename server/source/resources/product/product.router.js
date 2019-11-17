const { Router } = require("express");
const controllers = require("./product.controller");

const router = Router();

// /product
router.route("/").get(controllers.getAllProducts);

// /product/:id
router.route("/:id").get(controllers.getOneProduct);

module.exports = router;
