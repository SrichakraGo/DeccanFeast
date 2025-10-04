import React, { useState, useEffect } from "react";
import { ShoppingCart, X, Trash2 } from "lucide-react";
import axios from "axios";
import { useAuth } from "../context/authContext";

interface CartItem {
  id: string;
  userId: string;
  placeId: string;
  itemId: string;
  name: string;
  price: number;
  quantity: number;
}

const CartButton: React.FC = () => {
  const { token } = useAuth();
  const userId = localStorage.getItem("userId") || "guest";

  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const fetchCart = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/cart/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCartItems(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (isOpen) fetchCart();
  }, [isOpen]);

  const handleRemove = async (id: string) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/cart/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCartItems(cartItems.filter(item => item.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-all z-50"
      >
        <ShoppingCart className="w-6 h-6" />
      </button>

      {/* Slide-over panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40">
          <div className="w-96 bg-white h-full p-6 overflow-y-auto relative shadow-lg">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between items-center border-b pb-2">
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-orange-600">₹{(item.price * item.quantity).toFixed(2)}</span>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="p-1 rounded hover:bg-gray-200 transition-all"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                ))}

                <div className="mt-4 flex justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>

                <button
                  className="w-full mt-4 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-all"
                  onClick={() => alert("Proceed to payment")}
                >
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CartButton;
