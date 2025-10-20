import React from "react";

function Hero() {
  return (
    <section style={{ display: "flex", alignItems: "center", padding: "50px", backgroundColor: "#E9ECEF" }}>
      <div style={{ flex: 1 }}>
        <h1>Discover Sri Lanka Smarter With Roamia!</h1>
        <p>Elevate Your Travel Journey</p>
        <button style={{ marginRight: "10px" }}>Book A Trip Now</button>
        <button>Know More</button>
      </div>
      <div style={{ flex: 1 }}>
        <img src="https://via.placeholder.com/500x300" alt="Sri Lanka" style={{ width: "100%", borderRadius: "10px" }} />
      </div>
    </section>
  );
}

export default Hero;
