const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/config.env" });
const connectDatabase = require("./config/database");
// connecting to DataBase
connectDatabase();
app.use(express.json());
// Route
const contactRoute = require("./routes/contactRoute");
app.use(contactRoute);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT} `);
});
