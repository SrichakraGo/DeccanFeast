const fs = require("fs");
const path = require("path");
const express = require("express");

const router = express.Router(); // <-- create router

// Path to cart file
const cartFile = path.join(__dirname, "cart.json");

// Get all cart items for a user
router.get("/:userId", (req, res) => {
  const userId = req.params.userId;
  fs.readFile(cartFile, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read cart." });
    const cart = JSON.parse(data).filter(item => item.userId === userId);
    res.json(cart);
  });
});

// Add item to cart
router.post("/", (req, res) => {
  const newItem = req.body; // { userId, placeId, name, price, quantity }
  fs.readFile(cartFile, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read cart." });
    const cart = JSON.parse(data);
    newItem.id = String(Date.now());
    cart.push(newItem);
    fs.writeFile(cartFile, JSON.stringify(cart, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Failed to save cart." });
      res.status(201).json(newItem);
    });
  });
});

// Update cart item quantity
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { quantity } = req.body;
  fs.readFile(cartFile, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read cart." });
    const cart = JSON.parse(data);
    const index = cart.findIndex(item => item.id === id);
    if (index === -1) return res.status(404).json({ error: "Item not found" });
    cart[index].quantity = quantity;
    fs.writeFile(cartFile, JSON.stringify(cart, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Failed to update cart." });
      res.json(cart[index]);
    });
  });
});

// Delete cart item
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  fs.readFile(cartFile, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read cart." });
    let cart = JSON.parse(data);
    cart = cart.filter(item => item.id !== id);
    fs.writeFile(cartFile, JSON.stringify(cart, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Failed to delete cart item." });
      res.json({ message: "Item removed" });
    });
  });
});

module.exports = router; // <-- export router, not app
