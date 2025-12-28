import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import myImg from "../Assets/j-image.png";

function Footer() {
    return (
        <section id="contact">
            <Container fluid className="footer">
                <Row className="footer-row">
                    <Col className="footer-col">
                        <img src={myImg} className="img-j" alt="profile-img" />
                    </Col>
                    <Col className="footer-col">
                        <p className="copyright-text">Gracias por visitar mi portafolio. Siempre estoy abierto a nuevas oportunidades y colaboraciones.</p>
                    </Col>
                    <Col className="footer-col">
                        <p className="copyright-text follow-text">Sígueme</p>
                        <ul className="footer-icons">
                            <li className="social-icons">
                                <a href="https://github.com/JesusVirgen" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a href="https://x.com/Jesus_Virgen_" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                                    <BsTwitterX />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a href="https://www.linkedin.com/in/jes%C3%BAs-virgen-681009274/" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a href="https://www.instagram.com/jesus.cervantes.22?igsh=MWxqYnpkMDhsemJ1eQ==" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                                    <AiFillInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col className="footer-copyright">
                        <p className="copyright-text">© {new Date().getFullYear()} Jesús Virgen. Todos los derechos reservados.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Footer;