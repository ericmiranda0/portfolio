import React from "react";
import fotoPerfil from "../assets/img/eric-miranda.png";
import "./Sobre.css";

const Sobre = () => {
  return (
    <section id="sobre" className="sobre">
      <div className="container-custom">
        <div className="sobre-grid">
          {/* Avatar */}
          <div className="sobre-avatar-wrapper">
            <div className="sobre-avatar">
              <img src={fotoPerfil} alt="Eric Miranda" />
            </div>
          </div>

          {/* Texto */}
          <div className="sobre-text">
            <p className="section-title">Sobre Mim</p>
            <div className="section-divider" />

            <p>
              Sou <strong>Gustavo Eric Marques Miranda</strong>, natural de Ipu/CE,
              cursando o 4° período de <strong>Bacharelado em Direito</strong> pela
              Faculdade de Educação da Ibiapaba — FAEDI. Tenho 24 anos e uma trajetória
              marcada pela busca constante de conhecimento e pelo comprometimento com
              a excelência acadêmica.
            </p>

            <p>
              Minha entrada no Direito foi movida pela vontade de compreender e
              defender os direitos das pessoas. Durante o curso, me destaquei
              academicamente com coeficiente de rendimento de <strong>9,55</strong> e
              frequência de <strong>98,52%</strong>, além de ter vivenciado na prática
              o universo jurídico através de estágio em escritório de advocacia.
            </p>

            <p>
              Além do Direito, sou apaixonado por arte clássica e motos antigas — uma
              combinação que reflete meu apreço por coisas feitas com cuidado e
              propósito.
            </p>

            <div className="sobre-info-grid">
              <div className="sobre-info-item">
                <span className="sobre-info-label">Localização</span>
                <span className="sobre-info-value">Ipu, Ceará — Brasil</span>
              </div>
              <div className="sobre-info-item">
                <span className="sobre-info-label">Período atual</span>
                <span className="sobre-info-value">4° Período</span>
              </div>
              <div className="sobre-info-item">
                <span className="sobre-info-label">C.R. Geral</span>
                <span className="sobre-info-value">9,55 / 10</span>
              </div>
              <div className="sobre-info-item">
                <span className="sobre-info-label">Frequência</span>
                <span className="sobre-info-value">98,52%</span>
              </div>
              <div className="sobre-info-item">
                <span className="sobre-info-label">E-mail</span>
                <span className="sobre-info-value">ericmirandajob@gmail.com</span>
              </div>
              <div className="sobre-info-item">
                <span className="sobre-info-label">Nacionalidade</span>
                <span className="sobre-info-value">Brasileiro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
