// src/components/HogCard.jsx
import React from "react";

function HogCard({ hog }) {
  return (
    <div className="ui card">
      <h3>{hog.name}</h3>
      <img src={hog.image} alt={hog.name} />
      <p>Specialty: {hog.specialty}</p>
      <p>Weight: {hog.weight} kg</p>
      <button>Details</button>
      <button>Hide Me</button>
    </div>
  );
}

export default HogCard;

