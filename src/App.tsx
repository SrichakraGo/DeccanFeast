import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import { useAuth } from "./context/authContext";
import CartButton from "./components/CartButton";

function App() {
  const { token } = useAuth();

  return (
    <>
      <Routes>
        <Route path="/" element={token ? <Home /> : <Navigate to="/login" />} />
        <Route path="/cart" element={token ? <Cart /> : <Navigate to="/login" />} />
        <Route path="/checkout" element={token ? <Payment /> : <Navigate to="/login" />} />
        <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!token ? <Register /> : <Navigate to="/" />} />
      </Routes>

      {/* Floating Cart Button */}
      {token && <CartButton />}
    </>
  );
}

export default App;
