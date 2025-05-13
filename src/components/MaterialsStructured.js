import React from "react";
import review5 from "../assets/estruturado.png";

function MaterialsStructured({ openModal }) {
  return (
    <section id="materiais-estruturados" className="reviews-section">
      <h2>Materiais Estruturados</h2>
      <div className="cards-container">
        {[1].map((year) => (
          <div
            key={year}
            className="review-card"
            onClick={() => openModal(`${year}º ANO`)}
          >
            <img src={review5} alt="Avaliação 5" className="person-avatar" />
            <h3>{`${year}º ANO`}</h3>
            <button>Acessar Material</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MaterialsStructured;
