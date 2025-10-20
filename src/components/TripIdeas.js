import React from "react";

function TripIdeas() {
  const ideas = [
    { title: "Arugam Bay", desc: "Surfing paradise, best from May to September", img: "https://via.placeholder.com/200x150" },
    { title: "Peradeniya", desc: "Botanical garden experience", img: "https://via.placeholder.com/200x150" },
  ];

  return (
    <section style={{ padding: "50px", backgroundColor: "#F8F9FA", textAlign: "center" }}>
      <h2>Trip Ideas To Inspire You</h2>
      <p>Uncover unique escapes and hidden gems across Sri Lanka</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginTop: "30px" }}>
        {ideas.map((idea, i) => (
          <div key={i} style={{ width: "200px" }}>
            <img src={idea.img} alt={idea.title} style={{ width: "100%", borderRadius: "10px" }} />
            <h4>{idea.title}</h4>
            <p>{idea.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TripIdeas;
