const express = require("express");

const dotenv = require("dotenv");
const getTopSellingBooks = require("./src/apis/getTopSellingBooks");
const getTotalSalesRevenue = require("./src/apis/getTotalSalesRevenue");

dotenv.config();

const app = express();

app.use(express.json());

getTopSellingBooks(app);
getTotalSalesRevenue(app);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
