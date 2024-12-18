import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectSections";
import Particle from "../Particle";
import chatify from "../../Assets/git-img.jpeg";
import ScrollAnimation from '../ScrollText';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <ScrollAnimation>
          <h1 id="title-section">
            <strong className="var-color">Proyectos</strong>
          </h1>
          <p style={{ color: "white" }}>
            Estos son algunos de los proyectos en los cuales eh trabajado.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px"  }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={chatify}
                isBlog={false}
                title="To-do-list"
                description="Una aplicación basada en web para gestionar tareas de manera eficiente, creada con Ruby on Rails, 
                            que presenta paginación dinámica, filtrado de estado y notificaciones fáciles de usar. 
                            Este proyecto demuestra la funcionalidad CRUD, el manejo de validación y el diseño responsivo."
                ghLink="https://github.com/JesusVirgen/To_do_list"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={chatify}
                isBlog={false}
                title="Carrusel de imagenes PWA"
                description="Carrusel de imagenes hecho con html css y javascript, es PWA lo cual puede funcionar sin internet."
                ghLink="https://github.com/JesusVirgen/Img-carrussel-PWA"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={chatify}
                isBlog={false}
                title="Blog"
                description="Pagina la cual perimte crear blogs e interactuar con el mismo ya que es un CRUD, este proyecto es mayormente hecho en ruby."
                ghLink="https://github.com/JesusVirgen/Blog-Ruby"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={chatify}
                isBlog={false}
                title="Buscador de imagenes"
                description="Un motor de búsqueda de imágenes interactivo que utiliza la API de Pixabay para mostrar resultados de búsqueda con paginación. 
                            Los usuarios pueden buscar imágenes por términos específicos y ver detalles como me gusta y vistas de cada imagen."
                ghLink="https://github.com/JesusVirgen/Imges_API_Project"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={chatify}
                isBlog={false}
                title="Clima API"
                description="Este proyecto le permite consultar el clima actual en diferentes ciudades y países del mundo. Utiliza la API OpenWeather 
                            para obtener datos meteorológicos en tiempo real y fue desarrollado con HTML, CSS, JavaScript y TailwindCSS."
                ghLink="https://github.com/JesusVirgen/WeatherAPI"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={chatify}
                isBlog={false}
                title="Comprobador de precios de criptomonedas"
                description="Una aplicación web que permite a los usuarios comprobar los precios en tiempo real de las principales criptomonedas 
                            utilizando la API CryptoCompare."
                ghLink="https://github.com/JesusVirgen/Blog-Ruby"
              />
            </Col>
          </Row>
        </ScrollAnimation>
      </Container>
    </Container>
  );
}

export default Projects;