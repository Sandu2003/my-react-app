import React from "react";

function Features() {
  const features = [
    "Real-Time Booking: Instant reservations with live availability",
    "GPT-Powered Assistant: 24/7 AI travel support",
    "QR Code Check-In: Secure, paperless access at partner locations"
  ];

  return (
    <section style={{ padding: "50px", backgroundColor: "#F8F9FA", textAlign: "center" }}>
      <h2>Features That Make Roamia Exceptional</h2>
      {features.map((f, i) => <p key={i}>{f}</p>)}
    </section>
  );
}

export default Features;
