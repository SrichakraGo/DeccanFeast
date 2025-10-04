// paymentRoutes.js
const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

// Path to payments file
const paymentsFile = path.join(__dirname, "payments.json");

// Helper: ensure payments file exists
if (!fs.existsSync(paymentsFile)) {
  fs.writeFileSync(paymentsFile, JSON.stringify([], null, 2));
}

// POST /payment/dummy
// Body: { cart: [{ id, name, price, quantity }], userId: string, metadata?: {} }
router.post("/dummy", (req, res) => {
  try {
    const { cart = [], userId = "guest", metadata = {} } = req.body;
    if (!Array.isArray(cart) || cart.length === 0) {
      return res.status(400).json({ error: "Cart is empty or invalid." });
    }

    // compute amount in rupees
    const amount = cart.reduce((sum, item) => {
      const p = Number(item.price) || 0;
      const q = Number(item.quantity) || 1;
      return sum + p * q;
    }, 0);

    // create fake transaction object
    const transaction = {
      id: `txn_${Date.now()}`,          // simple unique id
      userId,
      amount,                          // in rupees
      currency: "INR",
      status: "succeeded",             // always succeed for dummy
      cart,
      metadata,
      createdAt: new Date().toISOString(),
    };

    // read, append, save
    const raw = fs.readFileSync(paymentsFile, "utf8");
    const payments = JSON.parse(raw || "[]");
    payments.push(transaction);
    fs.writeFileSync(paymentsFile, JSON.stringify(payments, null, 2));

    // return transaction
    res.json({ success: true, transaction });
  } catch (err) {
    console.error("Dummy payment error:", err);
    res.status(500).json({ error: "Failed to process payment." });
  }
});

module.exports = router;
