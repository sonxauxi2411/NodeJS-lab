const express = require("express");
const app = express();
const cors = require("cors");
const { getProducts, postProducts } = require("./controllers/product");

app.use(cors());
app.use(express.json());

app.get("/api", getProducts);
app.post("/api", postProducts);

app.listen(5000);
