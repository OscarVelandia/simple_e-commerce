const { connect, connection } = require("mongoose");

const mongoConnection = async () => {
  const URI = process.env.MONGO_PORT
    ? process.env.MONGO_PORT
    : ` mongodb://localhost/productAvailability`;

  try {
    connect(URI, {
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
