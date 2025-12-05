import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import ContactPage from "../pages/ContactPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
