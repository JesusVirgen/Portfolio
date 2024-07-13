import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectSections";
import Particle from "../Particle";
import chatify from "../../Assets/git-img.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 id="title-section">
          <strong className="var-color">Mis proyectos personales</strong>
        </h1>
        <p style={{ color: "white" }}>
          Estos son algunos de los proyectos en los cuales eh trabajado.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="To-do-list"
              description="Realiza una lista de cosas que tengas por hacer tiene las secciones de hechas, pendientes o haciendo, proyecto hecho mayormente en javascript."
              ghLink="https://github.com/JesusVirgen/To-do-list"
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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;