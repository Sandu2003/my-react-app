import React from "react";

function AwesomePlaces() {
  const places = [
    { name: "Sigiriya Rock", img: "https://via.placeholder.com/200x150" },
    { name: "Ella Gap", img: "https://via.placeholder.com/200x150" },
    { name: "Nuwara Eliya", img: "https://via.placeholder.com/200x150" },
  ];

  return (
    <section style={{ padding: "50px", textAlign: "center" }}>
      <h2>Awesome Places</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginTop: "30px" }}>
        {places.map((place, index) => (
          <div key={index} style={{ width: "200px" }}>
            <img src={place.img} alt={place.name} style={{ width: "100%", borderRadius: "10px" }} />
            <h4>{place.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AwesomePlaces;
