import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import Context from "../components/Context";
import Hello from "../components/Slider";

function Homepage() {
  return (
    <>
      <Box sx={{ minHeight: "80px" }}>
        <Navbar />
      </Box>
      <Hello />
      <Context />
      <Pricing />
      <Footer />
    </>
  );
}

export default Homepage;
