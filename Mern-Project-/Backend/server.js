const app = require("./app");

const dotenv = require("dotenv");
dotenv.config({ path: "Backend/config/.env" });
//config

//conecting database after config
const connectDatbase = require("./config/database");
connectDatbase();
app.listen(process.env.PORT, () => {
  console.log(`Server is working on port :${process.env.PORT}`);
});
