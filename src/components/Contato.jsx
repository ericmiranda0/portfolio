import React from "react";
import git from "../assets/img/Github.png";
import insta from "../assets/img/Instagram.png";
import linkedin from "../assets/img/Linkedin.png";
import email from "../assets/img/mail.png";
import "./Contato.css";

const Contato = () => {
  return (
    <section id="contato" className="contato">
      <div className="container-custom">
        <p className="section-title">Contato</p>
        <div className="section-divider" />

        <div className="contato-grid">
          {/* Links */}
          <div className="contato-text">
            <h3>Vamos conversar?</h3>
            <p>
              Estou aberto a oportunidades de estágio, networking jurídico e
              colaborações acadêmicas. Entre em contato pelo canal de sua
              preferência!
            </p>

            <div className="contato-links">
              <a
                className="contato-link-item"
                href="mailto:ericmirandajob@gmail.com"
              >
                <img className="contato-link-icon" src={email} alt="E-mail" />
                ericmirandajob@gmail.com
              </a>

              <a
                className="contato-link-item"
                href="https://wa.me/5588988722746"
                target="_blank"
                rel="noreferrer"
              >
                <span style={{ fontSize: "1.2rem" }}>📱</span>
                (88) 98872-2746 · WhatsApp
              </a>

              <a
                className="contato-link-item"
                href="https://www.linkedin.com/in/eric-miranda-59a375302/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="contato-link-icon"
                  src={linkedin}
                  alt="LinkedIn"
                />
                linkedin.com/in/eric-miranda
              </a>

              <a
                className="contato-link-item"
                href="https://www.instagram.com/ericm_miranda/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="contato-link-icon"
                  src={insta}
                  alt="Instagram"
                />
                @ericm_miranda
              </a>

              <a
                className="contato-link-item"
                href="https://github.com/ericmiranda0"
                target="_blank"
                rel="noreferrer"
              >
                <img className="contato-link-icon" src={git} alt="GitHub" />
                github.com/ericmiranda0
              </a>
            </div>
          </div>

          {/* CTA de e-mail */}
          <div className="contato-cta">
            <div className="contato-disponivel">
              <div className="dot-verde" />
              Disponível para oportunidades
            </div>
            <a
              className="contato-email-cta"
              href="mailto:ericmirandajob@gmail.com"
            >
              ericmirandajob
              <br />
              @gmail.com
            </a>
            <a
              className="btn-primary-custom"
              href="mailto:ericmirandajob@gmail.com"
            >
              Enviar mensagem
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="contato-footer">
          <span>© 2026 Eric Miranda · Acadêmico de Direito</span>
          <span>
            Desenvolvido com ❤️ em Ipu, Ceará
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contato;
