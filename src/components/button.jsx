import React from "react";
import "./button.css";

const button = () => {
  return (
    <>
      <a href="#" className="button type--C">
        <div className="button__line"></div>
        <div className="button__line"></div>
        <span className="button__text">ENTRY</span>
        <div className="button__drow1"></div>
        <div className="button__drow2"></div>
      </a>
    </>
  );
};

export default button;
