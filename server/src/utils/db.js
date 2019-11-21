const { connect } = require("mongoose");

const mongoConnection = async () => {
  const URI = process.env.MONGO_PORT
    ? process.env.MONGO_PORT
    : `mongodb://database/productAvailability`;

  try {
    await connect(URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    return connection.once("open", () => {
      console.log(`Se conecto correctamente? ${!!connection.readyState}`);
    });
  } catch (err) {
    return new Error(err);
  }
};

module.exports = mongoConnection;
