import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headingbar from "../component/Headingbar";
import Home from "../Pages/Home";
import Listings from "../Pages/Listings";
import ContactUs from "../Pages/ContactUs";
import Footer from "./Footer";

const MainLayout = () => {
  const homeRef = useRef(null);
  const handleNavigate = (section, tab = null) => {
    if (homeRef.current && typeof homeRef.current.navigate === "function") {
      homeRef.current.navigate(section, tab);
    } else {
      console.warn("Home ref not ready (might be on a different route).", section, tab);
    }
  };

  return (
    <Router>
      <Headingbar onNavigate={handleNavigate} />
      <Routes>
        <Route path="/" element={<Home ref={homeRef} />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer onNavigate={handleNavigate} />
    </Router>
  );
};

export default MainLayout;
