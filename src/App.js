import React, { useState } from "react";
import "./App.css";
import mascotImage from "./assets/mascot.png";
import logoMeta from "./assets/logometa.png";
import alfabetiza from "./assets/alfabetiza.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import MaterialsSection from "./components/MaterialsSection";
import ReviewsSection from "./components/ReviewsSection";
import Modal from "./components/Modal";
import MaterialsStructured from "./components/MaterialsStructured";
import data from "./data"; // Importando os dados do arquivo data.js

function FadeInWhenVisible({ children }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="fade-in">
      {children}
    </div>
  );
}

function App() {
  const [modalData, setModalData] = useState(null);

  const openModal = (year) => {
    const selectedYearData = data.find((item) => item.year === year);
    setModalData(selectedYearData);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="App">
      {/* Cabeçalho */}
      <header className="header">
        <img src={logoMeta} alt="Logo Meta Aprender" className="logo-image" />
        <nav className="nav-menu">
          <ul>
            <li>
              <a href="#inicio">Início</a>
            </li>
            <li>
              <a href="#materiais">Material</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Seção Inicial */}
      <FadeInWhenVisible>
        <section id="inicio" className="hero-section">
          <div className="hero-content">
            <div className="text-content">
              <h1>O que é o Meta Aprender?</h1>
              <p>
                O Meta Aprender é uma política pública educacional que o
                município de Patos aderiu, que trata sobre a aprendizagem das
                crianças na idade certa, uma ferramenta que auxilia o processo
                de ensino-aprendizagem dos alunos.
              </p>
            </div>
            <img
              src={mascotImage}
              alt="Mascote Meta Aprender"
              className="mascot-image"
            />
          </div>
        </section>
      </FadeInWhenVisible>

      {/* Seção Materiais Estruturados */}
      <FadeInWhenVisible>
        <MaterialsStructured openModal={openModal} />
      </FadeInWhenVisible>

      {/* Seção Materiais */}
      <FadeInWhenVisible>
        <MaterialsSection />
      </FadeInWhenVisible>

      {/* Seção Avaliações */}
      <FadeInWhenVisible>
        <ReviewsSection />
      </FadeInWhenVisible>

      {/* Modal */}
      {modalData && <Modal data={modalData} onClose={closeModal} />}

      {/* Rodapé */}
      <footer className="footer">
        <FadeInWhenVisible>
          <div className="partners">
            <h3>Parceiros</h3>
            <div className="logos">
              <img src={alfabetiza} alt="Logo Parceiro 1" />
            </div>
          </div>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <div className="social-media">
            <h3>Redes Sociais</h3>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </FadeInWhenVisible>
      </footer>
    </div>
  );
}

export default App;
