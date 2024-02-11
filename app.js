const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDataBase = require("./database/index")
const router = require("./router/index");
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

dotenv.config();
connectDataBase();
const port = process.env.PORT || 8016;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});