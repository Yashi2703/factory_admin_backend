const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDataBase = require("./database/index");
const filterRouter = require("./router/filter");
const filterTypeRouter = require("./router/filterType");
const orderRouter = require("./router/order");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/filter", filterRouter);
app.use("/filter-type", filterTypeRouter);
app.use("/order", orderRouter);
dotenv.config();
connectDataBase();
const port = process.env.PORT || 8016;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
