import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Works";
import ScrollAnimation from '../ScrollText';


function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <Row>
                        <ScrollAnimation>
                            <Col className="home-header">
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
                        </ScrollAnimation>
                    </Row>
                </Container>
            </Container>
            <Home2 />
        </section>
    );
}

export default Home;