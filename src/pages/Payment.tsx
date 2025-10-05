// src/pages/Payment.tsx
import React, { useEffect, useState } from "react";
import { useCart } from "../context/cartContext";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const { cart, clearCart, replaceCart } = useCart();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true); // loading while fetching server cart
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [order, setOrder] = useState<any | null>(null);

  // form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "card">("cod");

  const userId = localStorage.getItem("userId") || "guest";
  const token = localStorage.getItem("token") || "";

  // Fetch server cart on mount and sync into client cart
  useEffect(() => {
    let mounted = true;
    const fetchServerCart = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL || ""}/cart/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) {
          // If backend returns 404 or empty, just set client cart to empty
          replaceCart([]);
        } else {
          const data = await res.json();
          // map server items -> CartItem shape expected by context with numeric coercion
          const mapped = (data || []).map((it: any) => ({
            id: it.id,
            placeId: it.placeId || it.place?.id || "",
            name: it.name || it.itemName || "Item",
            price: Number(it.price) || 0,
            quantity: Number(it.quantity) || 1,
          }));
          if (mounted) replaceCart(mapped);
        }
      } catch (err) {
        console.error("Failed to fetch server cart:", err);
        if (mounted) replaceCart([]);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchServerCart();
    return () => {
      mounted = false;
    };
    // we want to run this once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // compute total safely from client cart (which was synced above)
  const totalAmount = cart.reduce((acc, item) => {
    const price = Number(item.price) || 0;
    const qty = Number(item.quantity) || 0;
    return acc + price * qty;
  }, 0);

  const validate = () => {
    if (cart.length === 0) {
      setError("Your cart is empty.");
      return false;
    }
    if (!name.trim()) {
      setError("Please enter your name.");
      return false;
    }
    if (!phone.trim()) {
      setError("Please enter your phone number.");
      return false;
    }
    if (!address.trim()) {
      setError("Please enter a delivery address.");
      return false;
    }
    return true;
  };

  const handlePlaceOrder = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setError(null);
    if (!validate()) return;

    setSubmitting(true);
    try {
      const newOrder = {
        id: `ORDER_${Date.now()}`,
        userId,
        name: name.trim(),
        phone: phone.trim(),
        address: address.trim(),
        paymentMethod,
        amount: totalAmount,
        currency: "INR",
        status: paymentMethod === "cod" ? "confirmed" : "pending",
        cart,
        createdAt: new Date().toISOString(),
      };

      // If you have server-side dummy payment endpoint, call it here (optional).
      // Otherwise we will just delete server cart items and persist locally.

      // Delete all server cart items so server-side cart is cleared
      await Promise.all(
        cart.map((it) =>
          fetch(`${import.meta.env.VITE_API_URL || ""}/cart/${it.id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
          }).catch((err) => {
            console.warn("Failed to delete server cart item", it.id, err);
            // continue even if delete fails for some items
          })
        )
      );

      // clear client cart
      clearCart();

      // persist order locally for demo
      const existingRaw = localStorage.getItem("demo_orders");
      const existing = existingRaw ? JSON.parse(existingRaw) : [];
      existing.push(newOrder);
      localStorage.setItem("demo_orders", JSON.stringify(existing, null, 2));

      setOrder(newOrder);
    } catch (err) {
      console.error("Place order error:", err);
      setError("Failed to place order. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Loading state while fetching server cart
  if (loading) {
    return (
      <div className="max-w-lg mx-auto py-12 text-center">
        <div className="inline-block p-6 bg-white rounded shadow">
          <p className="text-gray-700">Loading your cart...</p>
        </div>
      </div>
    );
  }

  // Order success screen
  if (order) {
    return (
      <div className="max-w-lg mx-auto py-12">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold mb-4">Order placed successfully 🎉</h2>
          <p className="mb-2">Order ID: <span className="font-mono">{order.id}</span></p>
          <p className="mb-4">Amount: <strong>₹{order.amount.toFixed(2)}</strong></p>
          <p className="text-gray-600 mb-6">We have recorded your order and it will be processed shortly.</p>

          <div className="flex justify-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Back to Home
            </button>
            <button
              onClick={() => {
                const orders = JSON.parse(localStorage.getItem("demo_orders") || "[]");
                alert(`You have ${orders.length} saved demo order(s).`);
              }}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
            >
              View Demo Orders
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Regular checkout form
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
              <span>₹{(Number(it.price) * Number(it.quantity)).toFixed(2)}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹{totalAmount.toFixed(2)}</span>
        </div>
      </div>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handlePlaceOrder} className="bg-white p-6 rounded-lg shadow">
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Full name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Your full name"
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Mobile number"
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Delivery address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            rows={3}
            placeholder="House no, street, area, city, pincode"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Payment method</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
                className="h-4 w-4"
              />
              <span>Cash on Delivery</span>
            </label>

            <label className="flex items-center space-x-2 text-gray-400">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
                disabled
                className="h-4 w-4"
              />
              <span>Card (disabled in demo)</span>
            </label>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={submitting}
            className={`flex-1 bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition ${
              submitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {submitting ? "Placing order..." : `Place Order (₹${totalAmount.toFixed(2)})`}
          </button>

          <button
            type="button"
            onClick={() => navigate(-1)}
            disabled={submitting}
            className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          This is a demo checkout. No real payment will be processed. Orders are stored locally for demo.
        </p>
      </form>
    </div>
  );
}
