import React from "react";
import "./booking.css";
import Checkout from "./Checkout";
import Navbar from "../Navbar/Navbar";

const booking = () => {
  return (
    <div>
      <div class="container">
        <Navbar />
        <div className="booking">
          <Checkout />
        </div>
      </div>
    </div>
  );
};

export default booking;
