import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link as ScrollLink } from "react-scroll";
import logo from "../Assets/j-image.png";

function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);
    const [activeLink, setActiveLink] = useState("home");

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
            <Container className="navbar-content">
                <Navbar.Brand className="d-flex">
                    <img src={logo} alt="Logo" className="navbar-logo" />
                </Navbar.Brand>
                <Navbar.Toggle
                    className="custom-toggler"
                    aria-controls="responsive-navbar-nav"
                    onClick={() => updateExpanded(expand ? false : "expanded")}
                >
                    <span />
                    <span />
                    <span />
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Item>
                            <ScrollLink
                                to="home"
                                smooth={true}
                                duration={300}
                                offset={-40}
                                className={`nav-link ${activeLink === "home" ? "active" : ""}`}
                                onClick={() => {
                                    setActiveLink("home");
                                    updateExpanded(false);
                                }}
                            >
                                Inicio
                            </ScrollLink>
                        </Nav.Item>

                        <Nav.Item>
                            <ScrollLink
                                to="about"
                                smooth={true}
                                duration={300}
                                offset={-40}
                                className={`nav-link ${activeLink === "about" ? "active" : ""}`}
                                onClick={() => {
                                    setActiveLink("about");
                                    updateExpanded(false);
                                }}
                            >
                                Sobre mi
                            </ScrollLink>
                        </Nav.Item>

                        <Nav.Item>
                            <ScrollLink
                                to="experience"
                                smooth={true}
                                duration={300}
                                offset={-40}
                                className={`nav-link ${activeLink === "experience" ? "active" : ""}`}
                                onClick={() => {
                                    setActiveLink("experience");
                                    updateExpanded(false);
                                }}
                            >
                                Experiencia
                            </ScrollLink>
                        </Nav.Item>

                        <Nav.Item>
                            <ScrollLink
                                to="projects"
                                smooth={true}
                                duration={300}
                                offset={-40}
                                className={`nav-link ${activeLink === "projects" ? "active" : ""}`}
                                onClick={() => {
                                    setActiveLink("projects");
                                    updateExpanded(false);
                                }}
                            >
                                Proyectos
                            </ScrollLink>
                        </Nav.Item>

                        <Nav.Item>
                            <ScrollLink
                                to="contact"
                                smooth={true}
                                duration={300}
                                offset={-40}
                                className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
                                onClick={() => {
                                    setActiveLink("contact");
                                    updateExpanded(false);
                                }}
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
