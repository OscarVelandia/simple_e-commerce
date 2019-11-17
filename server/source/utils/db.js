const mongoose = require("mongoose");

const connect = async () => {
  const URL =
    process.env.MONGODB_URI ||
    "mongodb://localhost:27017/products_availability";

  mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

module.exports = connect;
