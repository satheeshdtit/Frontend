import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headingbar from '../component/Headingbar'
import Home from '../Pages/Home'
import Listings from '../Pages/Listings'
import ContactUs from '../Pages/ContactUs'
import Footer from "./Footer";


const MainLayout = () => {
  return (
    <Router>
      <Headingbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default MainLayout;
