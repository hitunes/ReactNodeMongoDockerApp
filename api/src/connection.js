// connection.js
const mongoose = require("mongoose");
const User = require("./User.model");
const connection = "addkey";
const connectDb = () => {
 return mongoose.connect(connection);
};
module.exports = connectDb;
