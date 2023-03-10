import React from "react";

export default function Projects(props) {
  return (
    <div id="card" className="GlassCard">
      <div>
        <img
          id="cardDetails1"
          style={{ color: "black", height: "9vw", width: "10vw" }}
          src={props.image}
          alt={props.alt}
        />
      </div>
      <div id="cardDetails2">
        <p id="cardDetails3">{props.name}</p>
        <p id="cardDetails4">{props.des}</p>
      </div>
    </div>
  );
}
