import React from "react";
import "./Formacao.css";

const Formacao = () => {
  return (
    <section id="formacao" className="formacao">
      <div className="container-custom">
        <p className="section-title">Formação</p>
        <div className="section-divider" />

        <div className="formacao-cards">
          {/* FAEDI */}
          <div className="formacao-card">
            <div className="formacao-card-icon">🎓</div>
            <h3>Bacharelado em Direito</h3>
            <p className="inst">FAEDI – Faculdade de Educação da Ibiapaba</p>
            <p className="periodo">Janeiro 2025 – Em andamento · Ipu, CE</p>
            <div className="formacao-stats">
              <div className="stat">
                <span className="stat-value">4°</span>
                <span className="stat-label">Período atual</span>
              </div>
              <div className="stat">
                <span className="stat-value">9,55</span>
                <span className="stat-label">C.R. Geral</span>
              </div>
              <div className="stat">
                <span className="stat-value">98,52%</span>
                <span className="stat-label">Frequência</span>
              </div>
              <div className="stat">
                <span className="stat-value">990h</span>
                <span className="stat-label">C.H. Cursada</span>
              </div>
            </div>
          </div>

          {/* Curso Técnico Redes */}
          <div className="formacao-card">
            <div className="formacao-card-icon">🖧</div>
            <h3>Técnico em Redes de Computadores</h3>
            <p className="inst">EEEP Antônio Tarcísio Aragão</p>
            <p className="periodo">2017 – 2019 · Ipu, CE</p>
            <div className="formacao-stats">
              <div className="stat">
                <span className="stat-value">Concluído</span>
                <span className="stat-label">Redes & Telecomunicações</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formacao;
