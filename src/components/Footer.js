import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>CV hecho por Jesús Virgen</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>Copyright © {year} Jesús Virgen</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a href="https://github.com/JesusVirgen" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a href="https://x.com/Jesus_Virgen_C" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
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