import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import uImg from "../../Assets/univer-logo.png";
import Tilt from "react-parallax-tilt";
import { GiGraduateCap } from "react-icons/gi";
import { MdPlace } from "react-icons/md";
import { IoTime } from "react-icons/io5";

function Techstack() {
  return (
    <Container className="about-container">
      <Row>
        <Col md={3} className="study-date">
          <h4><GiGraduateCap />Universidad de Colima</h4>
          <h4><MdPlace />Colima</h4>
          <h4><IoTime />2019-2024</h4>
        </Col>
        <Col md={5} className="uni-name">
          <h3>Facultad de Ingeniería Mecánica y Eléctrica.</h3>
          <span>Ingeniería en Computación Inteligente</span>
        </Col>
        <Col md={4}>
          <Tilt>
              <img src={uImg} className="img-university" alt="avatar" />
          </Tilt>
        </Col>
      </Row>
    </Container>
  );
}

export default Techstack;
