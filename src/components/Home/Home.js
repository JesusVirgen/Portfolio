import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Type from "./Works";
import myImg from "../../Assets/profile.jpeg";

function Home() {
    return (
        <div>
            <section id="home">
                <Container fluid className="home-section">
                    <Container className="home-content">
                        <Row className="home-row">
                            <Col md={8} className="home-text">
                                <h1 className="heading">
                                        ¡Hola! 
                                    <span className="wave" role="img" aria-labelledby="wave">
                                        👋🏻
                                    </span>
                                </h1>

                                <h1 className="heading-name">
                                    Soy 
                                    <strong className="main-name"> Jesús Virgen </strong>
                                </h1>

                                <div className="text-transiction">
                                    <Type />
                                </div>
                            </Col>
                            <Col md={4} className="home-profile-img">
                                <img src={myImg} className="img-fluid" alt="avatar" />
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </section>
            <About />
            <Experience />
            <Projects />
        </div>
    );
}

export default Home;