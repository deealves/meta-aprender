import React, { useEffect, useRef } from "react";
import "./App.css";
import mascotImage from "./assets/mascot.png"; // Importação da imagem
import logoMeta from "./assets/logo-meta.PNG"; // Importação da logo
import alfabetiza from "./assets/alfabetiza.png"; // Importação da logo
import person1 from "./assets/person1.png"; // Importação da imagem do 1º Ano
import person2 from "./assets/person2.png"; // Importação da imagem do 2º Ano
import person3 from "./assets/person3.png"; // Importação da imagem do 3º Ano
import person4 from "./assets/person4.png"; // Importação da imagem do 4º Ano
import person5 from "./assets/person5.png"; // Importação da imagem do 5º Ano
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
      { threshold: 0.2 } // Dispara quando 20% do elemento está visível
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
                O Meta Aprender é uma plataforma educacional inovadora que
                oferece materiais didáticos gratuitos para estudantes de todas
                as idades. Nosso objetivo é facilitar o acesso ao conhecimento e
                promover o aprendizado contínuo.
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

      {/* Seção de Materiais */}
      <FadeInWhenVisible>
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
              <h3>Ian Ribeiro</h3>
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
      </FadeInWhenVisible>

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
