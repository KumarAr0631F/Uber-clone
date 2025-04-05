const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(process.env.CONNECT_DB)
    .then(() => {
      console.log("connected to DB");
    })
    .catch((err) => console.log(err));
}

module.exports = connectToDB;