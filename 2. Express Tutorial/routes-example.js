const express = require("express");

const app = express();

const PORT = 3000;

//root route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to home page" });
});

//get all products
app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      label: "product-1",
    },
    {
      id: 2,
      label: "product-2",
    },
    {
      id: 3,
      label: "product-3",
    },
  ];

  res.json(products);
});

//get single product
app.get("/product/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const products = [
    {
      id: 1,
      label: "product-1",
    },
    {
      id: 2,
      label: "product-2",
    },
    {
      id: 3,
      label: "product-3",
    },
  ];
  const getSingnleProduct = products.find(
    (product) => product.id == productId
  );
  if (getSingnleProduct) {
    res.json(getSingnleProduct);
  } else {
    res
      .status(404)
      .json({ message: "product not found! please try with different id" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is now starting at port ${PORT}`);
});
