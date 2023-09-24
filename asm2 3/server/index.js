const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const multer = require('multer');

const adminRoute = require("./routes/admin");
const customerRoute = require("./routes/customer");
const sellerRoute = require("./routes/seller");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const categoryRoute = require("./routes/category");

const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
});


app.use(cors());
app.use(express.json());

app.use("/api/admin", adminRoute); 
app.use("/api/seller", sellerRoute);
app.use("/api/customer", customerRoute);
app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);

app.listen(5001, () => {
  console.log("Backend server is running!");
});
