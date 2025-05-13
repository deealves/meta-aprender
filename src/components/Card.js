import React from "react";

function Card({ year, onClick }) {
  return (
    <div className="review-card">
      <h3>{year}</h3>
      <button onClick={onClick}>Acessar Material</button>
    </div>
  );
}

export default Card;
