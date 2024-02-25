const express = require("express");
const Item = require("../model/item.modal");
const router = express.Router();

router.get("/health", (req, res) => {
  res
    .status(200)
    .send({ message: "docker backend application working properly!" });
});

router.get("/items", async (req, res) => {
  try {
    const response = await Item.find();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json("error fetching item");
  }
});

router.post("/item", async (req, res) => {
  try {
    const { name, description } = req.body;
    const newItem = new Item({ name, description });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    console.error("Error creating item:", error);
    res.status(500).json("Error creating item");
  }
});

module.exports = router;
