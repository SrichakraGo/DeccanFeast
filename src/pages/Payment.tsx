// src/pages/Payment.tsx
import React, { useState } from "react";
import { useCart } from "../context/cartContext";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const { cart, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // compute total rupees
  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleDummyPayment = () => {
  if (cart.length === 0) {
    setError("Your cart is empty.");
    return;
  }
  
  setError(null);
  // simulate processing
  setTimeout(() => {
    clearCart();
    navigate("/", { state: { payment: { total: totalAmount, success: true } } });
  }, 500);
};


  return (
    <div className="max-w-lg mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-gray-700 font-medium">Items</span>
          <span className="text-gray-700 font-medium">Total</span>
        </div>

        <ul className="divide-y">
          {cart.map((it) => (
            <li key={it.id} className="py-2 flex justify-between">
              <span>{it.name} × {it.quantity}</span>
              <span>₹{(it.price * it.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹{totalAmount.toFixed(2)}</span>
        </div>
      </div>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <div className="flex gap-3">
        <button
          onClick={handleDummyPayment}
          className={`flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Processing..." : `Pay ₹${totalAmount.toFixed(2)} (Demo)`}
        </button>

        <button
          onClick={() => navigate(-1)}
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300"
          disabled={loading}
        >
          Cancel
        </button>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        This is a demo payment gateway for showcase. No real money is transferred.
      </p>
    </div>
  );
}
