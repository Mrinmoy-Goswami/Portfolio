import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="container1">
      <ul id="container3" className="GlassCard">
        <li style={{ scrollBehaviour: "smooth" }}>
        <Link  to="Home" spy={true} smooth={true} duration={1000}>Home</Link>
        </li>
        <li style={{ scrollBehaviour: "smooth" }}>
        <Link  to="Tech Stack" spy={true} smooth={true} duration={1000}>Tech Stacks</Link>
        </li>
        <li style={{ scrollBehaviour: "smooth" }}>
        <Link  to="About" spy={true} smooth={true} duration={1000}>About</Link>
        </li>
        <li style={{ scrollBehaviour: "smooth" }}>
        <Link  to="Contact" spy={true} smooth={true} duration={1000}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}
