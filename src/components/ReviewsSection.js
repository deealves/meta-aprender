import React from "react";
import Slider from "react-slick";
import { secondaryCarouselSettings } from "./carouselSettings";

import review1 from "../assets/saev.png";
import review2 from "../assets/cnca.png";
import review3 from "../assets/parc.png";
import review4 from "../assets/siave.png";
import review5 from "../assets/meta.png";

const reviewsData = [
  {
    imgSrc: review1,
    altText: "Logo SAEV",
    title: "SAEV",
    link: "https://drive.google.com/drive/folders/1mUvRCgt1dkuZqC-A356e3K586ORi_KAS?usp=sharing",
  },
  {
    imgSrc: review2,
    altText: "Logo CNCA",
    title: "CNCA",
    link: "https://drive.google.com/drive/folders/1cPw58yuDUYiWHm1UdV4KuIrQOc7Mteqd?usp=sharing",
  },
  {
    imgSrc: review3,
    altText: "Logo PARC",
    title: "PARC",
    link: "https://drive.google.com/drive/folders/19xBZp0Jg5lzrRf3GCojYU6d0Xa7ilHsu?usp=sharing",
  },
  {
    imgSrc: review4,
    altText: "Logo SIAVE",
    title: "SIAVE",
    link: "https://drive.google.com/drive/folders/1_sKHpgekuk0tXoFBlvAkwMG8f3-8v2yl?usp=sharing",
  },
  {
    imgSrc: review5,
    altText: "Logo META APRENDER",
    title: "META APRENDER",
    subtitle: "Simulados",
    link: "https://drive.google.com/drive/folders/1_4DLvRrJJML45PCLAD4vdbg0pWPzF5mm?usp=sharing",
  },
];

function ReviewsSection() {
  return (
    <section id="avaliacoes" className="reviews-section content-section">
      <h2>Avaliações</h2>
      <div className="carousel-container">
        <Slider {...secondaryCarouselSettings}>
          {reviewsData.map((review, index) => (
            <div key={index} className="unified-card">
              <img src={review.imgSrc} alt={review.altText} />
              {/* ✨ Estrutura corrigida ✨ */}
              <div className="card-body">
                <h3>{review.title}</h3>
                {review.subtitle && <h6>{review.subtitle}</h6>}
              </div>
              <div className="card-footer">
                <a href={review.link} target="_blank" rel="noopener noreferrer">
                  Acessar Avaliação
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default ReviewsSection;
