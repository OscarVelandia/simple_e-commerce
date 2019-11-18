const mongoose = require("mongoose");

module.exports.connect = async () => {
  const URI = process.env.MONGODB_URI
    ? process.env.MONGODB_URI
    : `mongodb+srv://admin:${process.env.MONGO_ATLAS_PWD}@garbarinoproducts-dtjh1.mongodb.net/test?retryWrites=true&w=majority`;

  mongoose.createConnection(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  console.log("Database is connected");
};
