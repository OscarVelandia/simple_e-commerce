const mongoose = require("mongoose");

const URL =
  process.env.MONGODB_URI || "mongodb://localhost:27017/products_availability";

const connect = mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = connect;
