import React from "react";
import "./Habilidades.css";

const grupos = [
  {
    icon: "⚖️",
    titulo: "Áreas Jurídicas",
    tags: [
      "Direito Previdenciário",
      "Direito Civil",
      "Direito Penal",
      "Direito Constitucional",
      "Direito do Trabalho",
      "Direitos Humanos",
    ],
  },
  {
    icon: "🧠",
    titulo: "Habilidades Profissionais",
    tags: [
      "Pesquisa Jurídica",
      "Redação Jurídica",
      "Análise de Processos",
      "Hermenêutica",
      "Argumentação",
      "Ética Profissional",
    ],
  },
  {
    icon: "🛠️",
    titulo: "Ferramentas & Tecnologia",
    tags: [
      "Microsoft Office",
      "Sistemas Jurídicos",
      "Pesquisa Jurisprudencial",
      "Plataformas INSS",
      "Internet Jurídica",
    ],
  },
  {
    icon: "🌐",
    titulo: "Idiomas",
    tags: ["Português — Nativo", "Inglês — Básico", "LIBRAS — em formação"],
  },
];

const Habilidades = () => {
  return (
    <section id="habilidades" className="habilidades">
      <div className="container-custom">
        <p className="section-title">Habilidades</p>
        <div className="section-divider" />

        <div className="habilidades-grid">
          {grupos.map((grupo) => (
            <div className="habilidade-group" key={grupo.titulo}>
              <div className="habilidade-group-title">
                <span>{grupo.icon}</span>
                <span>{grupo.titulo}</span>
              </div>
              <div className="habilidade-tags">
                {grupo.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
