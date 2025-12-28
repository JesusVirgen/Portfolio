import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "./Carousel";
import tecnovaxion from "../../Assets/tecnovaxion.png";
import miltonseguros from "../../Assets/miltonseguros.png";
import casasansebastian from "../../Assets/casasansebastian.png";
import soloriolegal from "../../Assets/soloriolegal.png";
import kaizen from "../../Assets/kaizen.png";

function Projects() {
  const cards = [
    {
      imagen: "https://raw.githubusercontent.com/JesusVirgen/To_do_list/refs/heads/main/images/screenshot.png",
      titulo: "To-do-list",
      descripcion:
        "Aplicación web para gestionar tareas con Ruby on Rails, CRUD completo, paginación y diseño responsivo.",
      src: "https://github.com/JesusVirgen/To_do_list",
      buttonText: "Código"
    },
    {
      imagen: "https://raw.githubusercontent.com/JesusVirgen/Blog-Ruby/refs/heads/main/app/assets/images/screenshot.png",
      titulo: "Blog",
      descripcion:
        "Blog con CRUD completo desarrollado en Ruby.",
      src: "https://github.com/JesusVirgen/Blog-Ruby",
      buttonText: "Código"
    },
    {
      imagen: "https://raw.githubusercontent.com/JesusVirgen/Imges_API_Project/refs/heads/main/img/screenshot.png",
      titulo: "Buscador de imágenes",
      descripcion:
        "Buscador usando la API de Pixabay con paginación y métricas.",
      src: "https://github.com/JesusVirgen/Imges_API_Project",
      buttonText: "Código"
    },
    {
      imagen: "https://raw.githubusercontent.com/JesusVirgen/WeatherAPI/refs/heads/main/img/screenshot.png",
      titulo: "Clima API",
      descripcion:
        "Consulta del clima mundial usando OpenWeather API.",
      src: "https://github.com/JesusVirgen/WeatherAPI",
      buttonText: "Código"
    },
    {
      imagen: "https://raw.githubusercontent.com/JesusVirgen/cryptocurrencies/refs/heads/main/img/screenshot.png",
      titulo: "Criptomonedas",
      descripcion:
        "Consulta de precios en tiempo real usando CryptoCompare API.",
      src: "https://github.com/JesusVirgen/cryptocurrencies",
      buttonText: "Código"
    },
    {
      imagen: tecnovaxion,
      titulo: "Tecnovaxion",
      descripcion:
        "Página de ventas de servicios legales para la empresa de Tecnovaxion.",
      src: "https://www.tecnovaxion.com/",
      buttonText: "Página"
    },
    {
      imagen: miltonseguros,
      titulo: "Milton Seguros",
      descripcion:
        "Página para la promoción de seguros.",
      src: "https://miltonseguros.com.mx/",
      buttonText: "Página"
    },
    {
      imagen: casasansebastian,
      titulo: "Casa San Sebastián",
      descripcion:
        "Página de reservas exclusiva para la casa boutique San Sebastián",
      src: "https://casasansebastian.mx/",
      buttonText: "Página"
    },
    {
      imagen: soloriolegal,
      titulo: "Solorio Legal",
      descripcion:
        "Página para la promoción y cotización de servicios legales",
      src: "https://soloriolegal.com/",
      buttonText: "Página"
    },
    {
      imagen: kaizen,
      titulo: "Kaizen",
      descripcion:
        "Página para la promoción de materiales prefabricados en México",
      src: "https://marianavx.com.mx/",
      buttonText: "Página"
    }
  ];

  return (
    <section id="projects">
      <div className="project-section">
        <h3>Proyectos que eh realizado y en los que eh colaborado</h3>
        <Container className="project-content">
          <Carousel cards={cards} />
        </Container>
      </div>
    </section>
  );
}

export default Projects;
