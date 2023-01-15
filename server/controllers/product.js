const Product = require("../models/products");

exports.getProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.json(products);
  });
};

exports.postProducts = (req, res) => {
  const title = req.body.title;
  const description = req.body.desc;
  const price = req.body.price;
  const imageUrl = req.body.imageUrl;
  const product = new Product(title, description, price, imageUrl);
  product.save();
};
