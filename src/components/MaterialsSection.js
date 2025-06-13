import React from "react";
import Slider from "react-slick";
import { mainCarouselSettings } from "./carouselSettings"; // Importa as configurações

// Importando as imagens
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import person5 from "../assets/person5.png";
import recomposicaoIcon from "../assets/meta.png";
import jesuitaIcon from "../assets/meta.png";

const teacherData = [
  {
    name: "Maria Dalva",
    series: "1º Ano",
    image: person1,
    link: "https://drive.google.com/drive/folders/17sA7G5fuC4hDkc8JHoPWl1YDfWScW22c?usp=sharing",
  },
  {
    name: "Adamara Santos",
    series: "2º Ano",
    image: person2,
    link: "https://drive.google.com/drive/folders/1kLrwMqqaqPyiOMguOogQDXt9SADvg7Z5?usp=sharing",
  },
  {
    name: "Shirley Valéria",
    series: "3º Ano",
    image: person3,
    link: "https://drive.google.com/drive/folders/1QpSLgjFknUPYPiSXBgCmEaQKaAYeZZf6?usp=sharing",
  },
  {
    name: "Maria José",
    series: "4º/5º Ano",
    subject: "Português",
    image: person4,
    link: "https://drive.google.com/drive/folders/1p4mLZLNEWNi0IKAXJT10g-i5tSdUxYJK?usp=sharing",
  },
  {
    name: "Lyandra Letícia",
    series: "4º/5º Ano",
    subject: "Matemática",
    image: person5,
    link: "https://drive.google.com/drive/folders/1nNcrvfPaJLInuH2LiY8fu8MxzifVEPKo?usp=sharing",
  },
  {
    name: "Recomposição da Aprendizagem",
    series: null,
    image: recomposicaoIcon,
    link: "https://drive.google.com/drive/folders/1qx7VlcmLIUiatQpfgHzS1aqb1ZJ5Bl22?usp=sharing",
  },
  {
    name: "Jesuíta Guedes",
    series: null,
    image: jesuitaIcon,
    link: "https://drive.google.com/drive/folders/1QwrYV6CmuH6Lq0cAQIun7OKDX1yLudjP?usp=sharing",
  },
];

function MaterialsSection() {
  return (
    <section id="materiais" className="materials-section content-section">
      <h2>Materiais</h2>
      <div className="carousel-container">
        <Slider {...mainCarouselSettings}>
          {teacherData.map((teacher, index) => (
            <div key={index} className="unified-card">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="person-avatar"
              />

              <div className="card-body">
                <h3>{teacher.name}</h3>
                {teacher.subject && <h6>{teacher.subject}</h6>}
                {teacher.series && <h4>{teacher.series}</h4>}
              </div>

              <div className="card-footer">
                <a
                  href={teacher.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Acessar Material
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default MaterialsSection;
