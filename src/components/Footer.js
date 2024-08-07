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
  let date = new Date();
  let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row className="footer-row">
                <Col md={4} xs={4} className="footer-copywright">
                    <h3 className="copyright-text">Copyright © {year} Jesús Virgen</h3>
                </Col>
                <Col md={4} xs={4} className="footer-copywright">
                    <img src={myImg} className="img-j" />
                    <h3>Mi portafolio</h3>
                </Col>
                <Col md={4} xs={4} className="footer-copywright">
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
            </Row>
        </Container>
    );
}

export default Footer;