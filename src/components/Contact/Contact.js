import React, { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiFillInstagram
} from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import ScrollAnimation from '../ScrollText';

function Contact() {
const [width, setWidth] = useState(1200);

useEffect(() => {
    setWidth(window.innerWidth);
}, []);

return (
    <Container fluid className="resume-section">
        <ScrollAnimation>
            <Col>
                <h1 id="title-section">
                    <strong className="var-color">Buscame</strong>
                </h1>
                <p className="resume-description">
                    <span className="var-color">Aqui me puedes encontrar y contactarme</span>
                </p>
                <ul>
                    <li className="social-icons">
                        <a href="https://github.com/JesusVirgen" target="_blank" rel="noreferrer" className="icon-colour">
                            <AiFillGithub />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a href="https://x.com/Jesus_Virgen_C" target="_blank" rel="noreferrer" className="icon-colour">
                            <BsTwitterX />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a href="https://www.linkedin.com/in/jes%C3%BAs-virgen-681009274/" target="_blank" rel="noreferrer" className="icon-colour">
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a href="https://www.instagram.com/jesus.cervantes.22?igsh=MWxqYnpkMDhsemJ1eQ==" target="_blank" rel="noreferrer" className="icon-colour">
                            <AiFillInstagram />
                        </a>
                    </li>
                </ul>
            </Col>
        </ScrollAnimation>
    </Container>
  );
}

export default Contact;
