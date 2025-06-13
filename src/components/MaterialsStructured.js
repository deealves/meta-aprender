import React from "react";
import Slider from "react-slick";
import { secondaryCarouselSettings } from "./carouselSettings";
import structuredMaterialIcon from "../assets/estruturado.png";

function MaterialsStructured({ openModal, allMaterials }) {
  if (!allMaterials || allMaterials.length === 0) {
    return null;
  }

  // Lista dos anos que estarão indisponíveis
  const unavailableYears = ["2º ANO", "3º ANO", "4º ANO", "5º ANO"];

  return (
    <section
      id="materiais-estruturados"
      className="materials-structured-section content-section"
    >
      <h2>Materiais Estruturados</h2>
      <div className="carousel-container">
        <Slider {...secondaryCarouselSettings}>
          {allMaterials.map((material) => {
            // Verifica se o ano do card atual está na lista de indisponíveis
            const isUnavailable = unavailableYears.includes(material.year);

            return (
              <div
                key={material.year}
                // Se estiver indisponível, a função de clique é desativada (null)
                // Adicionamos também uma classe para estilização opcional
                onClick={isUnavailable ? null : () => openModal(material.year)}
                className={`unified-card ${
                  isUnavailable ? "disabled-card" : ""
                }`}
              >
                <img
                  src={structuredMaterialIcon}
                  alt={`Ícone para ${material.year}`}
                />
                <div className="card-body">
                  <h3>{material.year}</h3>
                </div>
                <div className="card-footer">
                  {/* O texto e o estado 'disabled' do botão mudam com base na verificação */}
                  <button disabled={isUnavailable}>
                    {isUnavailable ? "Indisponível" : "Acessar Material"}
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default MaterialsStructured;
