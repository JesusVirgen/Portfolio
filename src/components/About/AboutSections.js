import React from "react";
import { ImHeadphones } from "react-icons/im";
import { PiSoccerBallFill } from "react-icons/pi";
import { FaGuitar } from "react-icons/fa";

function AboutCard() {
  return (
    <div>
      <p className="about-description-text">
        Soy una persona creativa, curiosa y orientada a resultados. Me encanta enfrentar desafíos
        tecnológicos y buscar soluciones innovadoras. Adaptación rápida si de trabajar
        en equipo se trata.
        <br />
        <br />
        Nací en la ciudad de Colima en México el 22 de febrero del 2000 y es donde actualmente 
        sigo viviendo.
      </p>
      <h1 id="title-section">
        <strong className="var-color">Mis pasatiempos favoritos</strong>
      </h1>
      <ul className="about-activities">
        <li className="about-activity"><ImHeadphones /> Escuchar musica </li>
        <li className="about-activity"><FaGuitar /> Tocar el ukelele </li>
        <li className="about-activity"><PiSoccerBallFill /> Ver el futbol </li>
      </ul>
    </div>
  );
}

export default AboutCard;
