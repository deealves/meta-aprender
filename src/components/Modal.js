import React from "react";

function Modal({ data, onClose }) {
  const [activeTab, setActiveTab] = React.useState("Língua Portuguesa");

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Cabeçalho */}
        <div className="modal-header">
          <h2>{data.year}</h2>
          <button className="close-modal" onClick={onClose}>
            &times;
          </button>
        </div>

        {/* Abas */}
        <div className="tabs">
          {Object.keys(data).map(
            (tab) =>
              tab !== "year" && (
                <button
                  key={tab}
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              )
          )}
        </div>

        {/* Conteúdo das Abas */}
        <div className="tab-content">
          {data[activeTab].map((book, index) => (
            <div key={index} className="card">
              {/* Imagem Local */}
              <img src={book.cover} alt={book.title} className="book-cover" />
              <h3>{book.title}</h3>
              <h6>{book.subtitle}</h6>
              <a href={book.link} target="_blank" rel="noopener noreferrer">
                Acessar
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
