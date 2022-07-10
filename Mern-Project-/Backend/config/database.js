const mongoose = require("mongoose");


const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongo Db connected with server: ${data.connection.host}`);
    })
    .catch((err) => console.log("could not connected", err));
};

module.exports = connectDatabase;
