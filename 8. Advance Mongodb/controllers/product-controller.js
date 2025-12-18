const Product = require("../models/Product");

const insertSampleProduct = async (req, res) => {
  try {
    const sampleProducts = [
      {
        name: "Laptop",
        category: "Electronics",
        price: 999,
        inStock: true,
        tags: ["computer", "tech", "work"],
      },
      {
        name: "Smartphone",
        category: "Electronics",
        price: 699,
        inStock: true,
        tags: ["mobile", "tech", "communication"],
      },
      {
        name: "Headphones",
        category: "Electronics",
        price: 199,
        inStock: false,
        tags: ["audio", "tech", "music"],
      },
      {
        name: "Running Shoes",
        category: "Sports",
        price: 89,
        inStock: true,
        tags: ["footwear", "running", "athletic"],
      },
      {
        name: "Coffee Maker",
        category: "Home Appliances",
        price: 75,
        inStock: true,
        tags: ["kitchen", "beverage", "small appliance"],
      },
      {
        name: "Desk Lamp",
        category: "Home Decor",
        price: 45,
        inStock: true,
        tags: ["lighting", "office", "study"],
      },
      {
        name: "Novel (Sci-Fi)",
        category: "Books",
        price: 15,
        inStock: true,
        tags: ["reading", "fiction", "paperback"],
      },
      {
        name: "Gaming Console",
        category: "Electronics",
        price: 499,
        inStock: false,
        tags: ["gaming", "entertainment", "tech"],
      },
      {
        name: "Backpack",
        category: "Accessories",
        price: 55,
        inStock: true,
        tags: ["travel", "school", "bag"],
      },
      {
        name: "Water Bottle",
        category: "Fitness",
        price: 20,
        inStock: true,
        tags: ["hydration", "sports", "reusable"],
      },
      {
        name: "Smartwatch",
        category: "Electronics",
        price: 250,
        inStock: true,
        tags: ["wearable", "tech", "health"],
      },
      {
        name: "Cookware Set",
        category: "Kitchenware",
        price: 120,
        inStock: false,
        tags: ["cooking", "pots", "pans"],
      },
    ];
    const result = await Product.insertMany(sampleProducts);
    res.status(201).json({
      success: true,
      message: "Product successfully uploaded",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

module.exports = { insertSampleProduct };
