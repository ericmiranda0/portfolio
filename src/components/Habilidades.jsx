import React from "react";
import "./Habilidades.css";

const grupos = [
  {
    icon: "🖧",
    titulo: "Redes & Infraestrutura",
    tags: [
      "Redes de Computadores",
      "Firewall",
      "Servidores",
      "Infraestrutura de TI",
      "Monitoramento de Rede",
    ],
  },
  {
    icon: "💻",
    titulo: "Ferramentas & Software",
    tags: [
      "Microsoft Excel",
      "Microsoft Word",
      "Microsoft PowerPoint",
      "Pacote Office",
    ],
  },
  {
    icon: "🌐",
    titulo: "Idiomas",
    tags: ["Português — Nativo", "Inglês — Básico", "LIBRAS — Em formação"],
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
