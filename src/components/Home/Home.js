import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Works";
import myImg from "../../Assets/profile.jpeg";
import ScrollAnimation from '../ScrollText';


function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <ScrollAnimation>
                        <Row>
                            <Col md={8}>
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
                            <Col md={4} className="myAvtar">
                                <Tilt>
                                    <img src={myImg} className="img-fluid" alt="avatar" />
                                </Tilt>
                            </Col>
                        </Row>
                    </ScrollAnimation>
                </Container>
            </Container>
            <Home2 />
        </section>
    );
}

export default Home;