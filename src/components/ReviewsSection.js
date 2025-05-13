import React from "react";
import review1 from "../assets/saev.png";
import review2 from "../assets/cnca.png";
import review3 from "../assets/parc.png";
import review4 from "../assets/siave.png";
import review5 from "../assets/meta.png";

function ReviewsSection() {
  return (
    <section id="avaliacoes" className="reviews-section">
      <h2>Avaliações</h2>
      <div className="cards-container">
        <div className="review-card">
          <img src={review1} alt="Avaliação 1" className="person-avatar" />
          <h3>SAEV</h3>
          <a
            href="https://drive.google.com/drive/folders/1mUvRCgt1dkuZqC-A356e3K586ORi_KAS?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar Avaliação
          </a>
        </div>
        <div className="review-card">
          <img src={review2} alt="Avaliação 2" className="person-avatar" />
          <h3>CNCA</h3>
          <a
            href="https://drive.google.com/drive/folders/1cPw58yuDUYiWHm1UdV4KuIrQOc7Mteqd?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar Avaliação
          </a>
        </div>
        <div className="review-card">
          <img src={review3} alt="Avaliação 3" className="person-avatar" />
          <h3>PARC</h3>
          <a
            href="https://drive.google.com/drive/folders/19xBZp0Jg5lzrRf3GCojYU6d0Xa7ilHsu?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar Avaliação
          </a>
        </div>
        <div className="review-card">
          <img src={review4} alt="Avaliação 4" className="person-avatar" />
          <h3>SIAVE</h3>
          <a
            href="https://drive.google.com/drive/folders/1_sKHpgekuk0tXoFBlvAkwMG8f3-8v2yl?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar Avaliação
          </a>
        </div>
        <div className="review-card">
          <img src={review5} alt="Avaliação 5" className="person-avatar" />
          <h3>META APRENDER</h3>
          <h6>Simulados</h6>
          <a
            href="https://drive.google.com/drive/folders/1_4DLvRrJJML45PCLAD4vdbg0pWPzF5mm?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar Avaliação
          </a>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
