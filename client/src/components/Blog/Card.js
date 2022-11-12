import React from "react";
import "./Blog.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="container">
        <img src={props.img} alt="images" className="img" />
        <p>{props.title}</p>
        <h4>
          <b>{props.title}</b>
        </h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
