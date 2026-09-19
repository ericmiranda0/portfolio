import React from "react";
import "./Experiencia.css";

const experiencias = [
  {
    cargo: "Estagiário Jurídico",
    empresa: "Torres & Mororó Advogados",
    link: "https://www.instagram.com/torresemororoadvogados/",
    badge: "Estágio",
    periodo: "6 meses · 2025 / 2026",
    local: "Ipu, Ceará",
    area: "Direito Previdenciário",
    desc: `Atuei com foco em benefícios por incapacidade temporária (antigo auxílio-doença),
    auxiliando na análise de casos, organização de documentação, pesquisa
    jurisprudencial e acompanhamento processual junto ao INSS. Experiência
    enriquecedora ao lado de profissionais de alta qualidade, acompanhando na prática
    o desfecho de vários processos — do pedido administrativo até a concessão do benefício.`,
    tags: [
      "Direito Previdenciário",
      "Benefícios por Incapacidade",
      "INSS",
      "Pesquisa Jurisprudencial",
      "Análise Processual",
    ],
  },
  {
    cargo: "Técnico de Infraestrutura de Redes",
    empresa: "Moura Automotiva Dois Ltda",
    link: null,
    badge: "CLT",
    periodo: "4 meses · mai/2024 – ago/2024",
    local: "Ipu, Ceará",
    area: "Infraestrutura de TI",
    desc: `Monitorei o desempenho dos sistemas de rede para identificar problemas e realizei
    análises rotineiras durante as operações regulares da infraestrutura de TI, incluindo
    redes, firewalls, servidores e dispositivos.`,
    tags: [
      "Infraestrutura de TI",
      "Redes",
      "Firewall",
      "Servidores",
      "Monitoramento",
    ],
  },
];

const Experiencia = () => {
  return (
    <section id="experiencia" className="experiencia">
      <div className="container-custom">
        <p className="section-title">Experiência</p>
        <div className="section-divider" />

        <div className="exp-lista">
          {experiencias.map((exp) => (
            <div className="exp-card" key={exp.cargo}>
              <div className="exp-header">
                <div className="exp-title-group">
                  <h3>{exp.cargo}</h3>
                  {exp.link ? (
                    <a
                      className="exp-empresa"
                      href={exp.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      ⚖️ {exp.empresa}
                    </a>
                  ) : (
                    <span className="exp-empresa" style={{ cursor: "default" }}>
                      🏢 {exp.empresa}
                    </span>
                  )}
                </div>
                <span className="exp-badge">{exp.badge}</span>
              </div>

              <div className="exp-meta">
                <div className="exp-meta-item">
                  <span>🗓️</span>
                  <span>{exp.periodo}</span>
                </div>
                <div className="exp-meta-item">
                  <span>📍</span>
                  <span>{exp.local}</span>
                </div>
                <div className="exp-meta-item">
                  <span>💼</span>
                  <span>{exp.area}</span>
                </div>
              </div>

              <p className="exp-desc">{exp.desc}</p>

              <div className="exp-tags">
                {exp.tags.map((tag) => (
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

export default Experiencia;
