const { connect, connection } = require("mongoose");

const URI = process.env.MONGO_PORT
  ? process.env.MONGO_PORT
  : ` mongodb://localhost:27017/`;

const options = {
  dbName: "productAvailability",
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  reconnectInterval: 10000
};

const mongoConnection = async () => {
  try {
    await connect(URI, options);

    return connection.once("open", () => {
      // eslint-disable-next-line no-console
      console.log(`Se conecto correctamente? ${!!connection.readyState}`);
    });
  } catch (err) {
    return new Error(err);
  }
};

connection.on("error", err => new Error(err));

module.exports = mongoConnection;
