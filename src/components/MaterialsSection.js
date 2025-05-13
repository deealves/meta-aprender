import React from "react";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import person5 from "../assets/person5.webp";

function MaterialsSection() {
  return (
    <section id="materiais" className="materials-section">
      <h2>Materiais</h2>
      <div className="cards-container">
        <div className="card">
          <img src={person1} alt="Pessoa 1" className="person-avatar" />
          <h3>Maria Dalva</h3>
          <h4>1º Ano</h4>
          <a
            href="https://drive.google.com/drive/folders/17sA7G5fuC4hDkc8JHoPWl1YDfWScW22c?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar Material
          </a>
        </div>
        <div className="card">
          <img src={person2} alt="Pessoa 2" className="person-avatar" />
          <h3>Adamara Santos</h3>
          <h4>2º Ano</h4>
          <a
            href="https://drive.google.com/drive/folders/1kLrwMqqaqPyiOMguOogQDXt9SADvg7Z5?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar Material
          </a>
        </div>
        <div className="card">
          <img src={person3} alt="Pessoa 3" className="person-avatar" />
          <h3>Shirley Valéria</h3>
          <h4>3º Ano</h4>
          <a
            href="https://drive.google.com/drive/folders/1QpSLgjFknUPYPiSXBgCmEaQKaAYeZZf6?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar Material
          </a>
        </div>
        <div className="card">
          <img src={person4} alt="Pessoa 4" className="person-avatar" />
          <h3>Maria José</h3>
          <h6>Português</h6>
          <h4>4º/5º Ano</h4>
          <a
            href="https://drive.google.com/drive/folders/1p4mLZLNEWNi0IKAXJT10g-i5tSdUxYJK?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar Material
          </a>
        </div>
        <div className="card">
          <img src={person5} alt="Pessoa 5" className="person-avatar" />
          <h3>Lyandra Letícia</h3>
          <h6>Matemática</h6>
          <h4>4º/5º Ano</h4>
          <a
            href="https://drive.google.com/drive/folders/1nNcrvfPaJLInuH2LiY8fu8MxzifVEPKo?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar Material
          </a>
        </div>
      </div>
    </section>
  );
}

export default MaterialsSection;
