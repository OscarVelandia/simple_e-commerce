const start = require("./server");
const mongoConnection = require("./utils/db");

mongoConnection();
start();
