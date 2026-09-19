import React from "react";
import git from "../assets/img/Github.png";
import insta from "../assets/img/Instagram.png";
import linkedin from "../assets/img/Linkedin.png";
import "./Main.css";

const Hero = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="hero-eyebrow">Acadêmico de Direito · FAEDI</span>

        <h1 className="hero-name">Eric Miranda</h1>

        <p className="hero-title">Bacharelando em Direito · Estagiário Jurídico</p>

        <p className="hero-desc">
          Estudante comprometido, com experiência prática em Direito
          Previdenciário. Busco construir uma carreira sólida na advocacia,
          unindo rigor técnico, ética e dedicação ao próximo.
        </p>

        <div className="hero-ctas">
          <button
            className="btn-primary-custom"
            onClick={() => scrollTo("sobre")}
          >
            Ver meu perfil
          </button>
          <button
            className="btn-outline-custom"
            onClick={() => scrollTo("contato")}
          >
            Entrar em contato
          </button>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/ericmiranda0"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <img src={git} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/eric-miranda-59a375302/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/ericm_miranda/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <img src={insta} alt="Instagram" />
          </a>
        </div>
      </div>

      <div
        className="scroll-indicator"
        onClick={() => scrollTo("sobre")}
        role="button"
        aria-label="Rolar para baixo"
      />
    </section>
  );
};

export default Hero;
