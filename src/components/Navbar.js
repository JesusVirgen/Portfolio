import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link as ScrollLink } from "react-scroll";
import logo from "../Assets/j-image.png";

function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
            <Container className="navbar-content">
                <Navbar.Brand className="d-flex">
                    <img src={logo} alt="Logo" className="navbar-logo" />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => updateExpanded(expand ? false : "expanded")}
                    >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Item>
                            <ScrollLink
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={300}
                                offset={-40}
                                onClick={() => updateExpanded(false)}
                                className="nav-link"
                            >
                                Inicio
                            </ScrollLink>
                        </Nav.Item>

                        <Nav.Item>
                            <ScrollLink
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={300}
                                offset={-40}
                                onClick={() => updateExpanded(false)}
                                className="nav-link"
                            >
                                Sobre mi
                            </ScrollLink>
                        </Nav.Item>

                        <Nav.Item>
                            <ScrollLink
                                to="experience"
                                spy={true}
                                smooth={true}
                                duration={300}
                                offset={-40}
                                onClick={() => updateExpanded(false)}
                                className="nav-link"
                            >
                                Experiencia
                            </ScrollLink>
                        </Nav.Item>

                        <Nav.Item>
                            <ScrollLink
                                to="projects"
                                spy={true}
                                smooth={true}
                                duration={300}
                                offset={-40}
                                onClick={() => updateExpanded(false)}
                                className="nav-link"
                            >
                                Proyectos
                            </ScrollLink>
                        </Nav.Item>

                        <Nav.Item>
                            <ScrollLink
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={300}
                                offset={-40}
                                onClick={() => updateExpanded(false)}
                                className="nav-link"
                            >
                                Contacto
                            </ScrollLink>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
