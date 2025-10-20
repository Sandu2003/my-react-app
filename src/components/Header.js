import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ padding: "20px", backgroundColor: "#0D6EFD", color: "white" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>ROAMIA</h2>
        <nav>
          <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
            <li><Link style={{color:"white", textDecoration:"none"}} to="/">Home</Link></li>
            <li><Link style={{color:"white", textDecoration:"none"}} to="/about">About</Link></li>
            <li>Tour</li>
            <li>Package</li>
            <li>Book Trip</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
