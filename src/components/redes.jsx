import React from "react";
import git from "../assets/img/Github.png";
import insta from "../assets/img/Instagram.png";
import linkedin from "../assets/img/Linkedin.png";
import "../components/redes.css";
const Redes = () => {
  return (
    <div className="redes">
      <a href="https://github.com/ericmiranda0">
        <img src={git} alt="github" />
      </a>
      <a href="https://www.linkedin.com/in/eric-miranda-59a375302/?trk=public-profile-join-page">
        <img src={linkedin} alt="" />
      </a>
      <a href="https://www.instagram.com/eric.m_miranda/">
        <img src={insta} alt="" />
      </a>
    </div>
  );
};

export default Redes;
