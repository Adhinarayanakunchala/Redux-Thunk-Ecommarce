import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Sidecart from "./components/Sidecart";
import Footer from "./components/Footer";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProductPage";
import Cart from "./pages/CartPage";
import Default from "./pages/Default";
import { getProducts } from "./store/actions/products";

function App(props) {
  useEffect(() => {
    props.getProducts();
  }, []);

  return (
    <React.Fragment>
      {/** navbar,sidebar,cart,footer */}
      <Navbar />
      <Sidebar />
      <Sidecart />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<SingleProduct />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route element={<Default />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default connect(null, { getProducts })(App);
