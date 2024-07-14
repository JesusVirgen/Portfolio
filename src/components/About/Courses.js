import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { GiGraduateCap } from "react-icons/gi";
import { MdPlace } from "react-icons/md";
import { IoTime } from "react-icons/io5";

function Toolstack() {
  return (
    <Container className="about-container">
      <Row>
        <Col md={3} className="experience-col">
          <div className="courses-dates">
            <h4><GiGraduateCap />Michelada.IO</h4>
            <h4><MdPlace />Colima</h4>
            <h4><IoTime />2023</h4>
          </div>
        </Col>
        <Col md={9} className="experience-col">
          <div className="courses-name">
            <h4>Ruby on rails Summer Training: creación de
                modelo, controlador, formularios y post.</h4>
          </div>
        </Col>
      </Row>
      <div className="separator"></div>
      <Row>
        <Col md={3} className="experience-col">
          <div className="courses-dates">
            <h4><GiGraduateCap />Udemy</h4>
            <h4><IoTime />2024</h4>
          </div>
        </Col>
        <Col md={9} className="experience-col">
          <div className="courses-name">
            <h4>The Complete Ruby on Rails Developer Course</h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Toolstack;
