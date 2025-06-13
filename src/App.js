import React, { useState, useEffect, useRef } from "react";
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
import {
  faUniversalAccess,
  faArrowRight,
  faChevronDown,
  faArrowUp, // Ícone do botão "Voltar ao Topo"
} from "@fortawesome/free-solid-svg-icons";

import MaterialsSection from "./components/MaterialsSection";
import ReviewsSection from "./components/ReviewsSection";
import Modal from "./components/Modal";
import MaterialsStructured from "./components/MaterialsStructured";
import data from "./data";

// Componente de Fade-in (mantido como está)
function FadeInWhenVisible({ children }) {
  const ref = useRef(null);
  useEffect(() => {
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
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="fade-in">
      {children}
    </div>
  );
}

function App() {
  const [modalData, setModalData] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("material");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openModal = (year) => {
    const selectedYearData = data.find((item) => item.year === year);
    setModalData(selectedYearData);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="App">
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="logo-container">
          <img src={logoMeta} alt="Logo Meta Aprender" className="logo-image" />
        </div>
        <nav className="nav-menu">
          <ul>
            <li>
              <a href="#inicio">Início</a>
            </li>
            <li>
              <a href="#materiais">Material</a>
            </li>
            <li>
              <button
                className="accessibility-button"
                aria-label="Opções de Acessibilidade"
              >
                <FontAwesomeIcon icon={faUniversalAccess} />
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <FadeInWhenVisible>
        <section id="inicio" className="hero-section">
          <div className="hero-content">
            <div className="text-content">
              <h1 className="hero-title">O que é o Meta Aprender?</h1>
              <p>
                O Meta Aprender é uma política pública educacional que o
                município de Patos aderiu, que trata sobre a aprendizagem das
                crianças na idade certa, uma ferramenta que auxilia o processo
                de ensino-aprendizagem dos alunos.
              </p>
              <button className="cta-button">
                Saiba Mais
                <FontAwesomeIcon icon={faArrowRight} className="cta-icon" />
              </button>
            </div>
            <img
              src={mascotImage}
              alt="Mascote Meta Aprender"
              className="mascot-image"
            />
          </div>
        </section>
      </FadeInWhenVisible>

      <div id="materiais" className="section-toggle-container">
        <div className="section-toggle-buttons">
          <button
            className={`toggle-button ${
              activeSection === "material" ? "active" : ""
            }`}
            onClick={() => setActiveSection("material")}
          >
            Material
          </button>
          <button
            className={`toggle-button ${
              activeSection === "structured" ? "active" : ""
            }`}
            onClick={() => setActiveSection("structured")}
          >
            Material Estruturado
          </button>
          <button
            className={`toggle-button ${
              activeSection === "reviews" ? "active" : ""
            }`}
            onClick={() => setActiveSection("reviews")}
          >
            Avaliações
          </button>
        </div>
      </div>

      <div key={activeSection} className="active-section-content">
        {activeSection === "material" && (
          <FadeInWhenVisible>
            <MaterialsSection />
          </FadeInWhenVisible>
        )}

        {activeSection === "structured" && (
          <FadeInWhenVisible>
            <MaterialsStructured openModal={openModal} allMaterials={data} />
          </FadeInWhenVisible>
        )}

        {activeSection === "reviews" && (
          <FadeInWhenVisible>
            <ReviewsSection />
          </FadeInWhenVisible>
        )}
      </div>

      {modalData && <Modal data={modalData} onClose={closeModal} />}

      {isScrolled && (
        <button
          className="back-to-top-button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Voltar ao topo"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}

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
