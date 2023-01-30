import React from "react";
import Typewriter from "typewriter-effect";

export default function Techstack() {
  return (
    <div className="container1">
      <div id="Tech Stack" className="text">
        <h3
          className="GlassCard"
          style={{ color: "black", fontSize: "2.5vw", padding: "1vw" }}
        >
          Tech stacks{" "}
        </h3>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 40,
            strings: ["ReactJS", "MongoDB", "Express JS", "Node JS", "Flutter"],
          }}
        />
      </div>
      <div className="container1"></div>
    </div>
  );
}
