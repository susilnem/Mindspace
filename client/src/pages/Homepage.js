import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
// import Footer from '../components/Footer'
import Footer from "../components/Footer";
import LoginForm from "./Login";
import Signup from "./Signup";
import Pricing from "../components/Pricing";
import Booking from "../components/booking/Booking";
import Context from "../components/Context";
import "./home.css";

function Homepage() {
  return (
    <>
      <Box sx={{ minHeight: "80px" }}>
        <Navbar />
      </Box>
      <div className="banner1"></div>
      <div className="bannerText">Let's Talk Mental Health.</div>
      <Context />
      <Booking />
      <Pricing />
      <Footer />
    </>
  );
}

export default Homepage;
