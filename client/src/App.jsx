import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home/Home";
//import Product from "./pages/Products"; // Ensure you import this
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart";
import Display from "./pages/Display";
import Product from "./pages/Product";
import Service from "./pages/Service";
import Signup from "./pages/LoginSignup/Signup";
import Login from "./pages/LoginSignup/Login";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import { CartProvider } from "./Context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/display" element={<Display />} />
          <Route path="/service" element={<Service />} />
          {/* <Route path="/product/:productId" element={<Display />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/product"  element={<Product />} >
     <Route path=":productId" element={<Product />} />
    </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}
