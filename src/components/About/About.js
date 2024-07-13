import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AboutCard from './AboutSections';
import Techstack from './Education';
import Toolstack from './Courses';
import ScrollAnimation from '../ScrollText';

function About() {
  return (
    <Container fluid className="about-section">
      <Row className='about-row'>
        <ScrollAnimation>
          <h1 id="title-section">
            <strong className="var-color">Acerca de mi</strong>
          </h1>
          <AboutCard />
        </ScrollAnimation>

        <ScrollAnimation>
          <h1 id="title-section">
            <strong className="var-color">Educación</strong>
          </h1>
          <Techstack />
        </ScrollAnimation>

        <ScrollAnimation>
          <h1 id="title-section">
            <strong className="var-color">Cursos</strong>
          </h1>
          <Toolstack />
        </ScrollAnimation>
      </Row>
    </Container>
  );
}

export default About;