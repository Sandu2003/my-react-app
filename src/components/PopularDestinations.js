import React from "react";

function PopularDestinations() {
  const places = ["Sigiriya", "Kandy", "Mirissa"];

  return (
    <section style={{ padding: "50px", textAlign: "center" }}>
      <h2>Explore Sri Lanka's Most Loved Places</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginTop: "30px" }}>
        {places.map((place, i) => (
          <div key={i}>
            <img src="https://via.placeholder.com/200x150" alt={place} style={{ borderRadius: "10px" }} />
            <h4>{place}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularDestinations;
