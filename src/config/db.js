const { DB_URL } = require("../constants");

const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose.connect(DB_URL, {});
    console.log("++ CONNECTED TO DATABASE");
  } catch (error) {
    console.log("-- FAILED TO CONNECT TO DATABASE");
    console.log(error);
    process.exitCode(1);
  }
};

module.exports = connectDB;