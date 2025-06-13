// src/components/Modal.js
import React from "react";

function Modal({ data, onClose }) {
  const [activeTab, setActiveTab] = React.useState(Object.keys(data)[1]); // Pega a primeira matéria

  // Evita erro caso o 'data' ainda não tenha chegado
  if (!data) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{data.year}</h2>
          <button className="modal-close-button" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-tabs">
            {Object.keys(data).map(
              (tab) =>
                tab !== "year" && (
                  <button
                    key={tab}
                    className={`modal-tab-button ${
                      activeTab === tab ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                )
            )}
          </div>

          <div className="modal-tab-content">
            {data[activeTab] &&
              data[activeTab].map((book, index) => (
                <div key={index} className="modal-card">
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-card-link"
                  >
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="modal-card-cover"
                    />
                    <div className="modal-card-body">
                      <h3 className="modal-card-title">{book.title}</h3>
                      {book.subtitle && (
                        <p className="modal-card-subtitle">{book.subtitle}</p>
                      )}
                    </div>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
