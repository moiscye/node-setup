const mongoose = require("mongoose");
const keys = require("../config/keys");

module.exports = async () => {
  //setting up the DB
  try {
    await mongoose.connect(keys.mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log(`Connected to ${keys.mongoURI}...`);
  } catch (err) {
    console.log(err);
  }
};
