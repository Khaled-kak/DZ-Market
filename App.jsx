import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { VendorPage } from "./pages/VendorPage";
import { BecomeVendorPage } from "./pages/BecomeVendorPage";
import { AboutPage } from "./pages/AboutPage";
import { CartPage } from "./pages/CartPage";
import { Layout } from "./components/Layout";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produit/:id" element={<ProductPage />} />
          <Route path="/vendeur/:id" element={<VendorPage />} />
          <Route path="/devenir-vendeur" element={<BecomeVendorPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/panier" element={<CartPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
