const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDataBase = require("./database/index");
const filterRouter = require("./router/filter");
const filterTypeRouter = require("./router/filterType");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/filter", filterRouter);
app.use("/filter-type", filterTypeRouter);
dotenv.config();
connectDataBase();
const port = process.env.PORT || 8016;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
