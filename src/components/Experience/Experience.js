import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GiGraduateCap } from "react-icons/gi";
import { IoTime } from "react-icons/io5";
import ScrollAnimation from '../ScrollText';

function Experience() {
  return (
    <Container fluid className="experience-section">
      <ScrollAnimation>
        <h1 id="title-section">
          <strong className="var-color">Experienca laboral</strong>
        </h1>
        <Row className='experience-row'>
          <Col md={4} className="experience-col">
            <div className="courses-dates">
              <h4><GiGraduateCap />Dirección de sistemas Universidad de Colima</h4>
              <h4><IoTime />2023</h4>
            </div>
          </Col>
          <Col md={8} className="experience-col">
            <div className="experience-description">
              <h3>Aprendiz Desarrollador Web.</h3>
              <span>Diseño y elaboración de una página web que consiste en una lista de
                tareas, aplicando conocimientos de Frontend y Backend con los
                lenguajes de programación PHP, JavaScript, HTML, CSS y la librería de
                Boostrap.</span>
              <br />
              <span>Diseño y Elaboración de un sitio web para la Universidad de Colima que
                consiste principalmente en intercambio de libros en las diferentes
                librerías de cada campus de la universidad, utilizando conocimientos de
                Frontend y Backend utilizando las tecnologías PHP, JavaScript, HTML,
                CSS y Boostrap, además de utilizar base de datos MySQL.</span>
            </div>
          </Col>
        </Row>
        <div className="separator"></div>
        <Row className='experience-row'>
          <Col md={4} className="experience-col">
            <div className="courses-dates">
              <h4><GiGraduateCap />Colegio Campoverde</h4>
              <h4><IoTime />2024</h4>
            </div>
          </Col>
          <Col md={8} className="experience-col">
            <div className="experience-description">
              <h3>Desarrollador Backend.</h3>
              <span>Migración de la página web Campoverde a móvil. Creación de APIs
                para las diferentes actividades del colegio tanto para maestros como
                coordinadores, mediante el uso de la base de datos SQLServer y el
                lenguaje de programación C# y .NET.</span>
            </div>
          </Col>
        </Row>
        <div className="separator"></div>
        <Row className='experience-row'>
          <Col md={4} className="experience-col">
            <div className="courses-dates">
              <h4><GiGraduateCap />Proyecto JAPCOL</h4>
              <h4><IoTime />2023</h4>
            </div>
          </Col>
          <Col md={8} className="experience-col">
            <div className="experience-description">
              <h3>Desarrollador Fullstack.</h3>
              <span>Creación de formularios, insertando datos en base de datos y creando
                vistas para formularios, utilizando el lenguaje de Ruby on Rails y
                TailwindCSS.</span>
            </div>
          </Col>
        </Row>
        <div className="separator"></div>
        <Row className='experience-row'>
          <Col md={4} className="experience-col">
            <div className="courses-dates">
              <h4><GiGraduateCap />Freelance</h4>
              <h4><IoTime />2024</h4>
            </div>
          </Col>
          <Col md={8} className="experience-col">
            <div className="experience-description">
              <h3>Desarrollador Fullstack.</h3>
              <span>Trabajé de manera independiente como programador freelance,
                colaborando con un senior en programación. Las actividades eran la 
                solución de bugs en su sistema de donaciones, tanto de front-end 
                como de back-end, utilizando lastecnologías de Ruby on Rails como 
                lenguaje principal, HTML, CSS y JavaScript.</span>
            </div>
          </Col>
        </Row>
      </ScrollAnimation>
    </Container>
  );
}

export default Experience;
