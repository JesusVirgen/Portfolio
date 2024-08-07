import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {
  AiOutlineContacts
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdOutlineHomeWork } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { GoProjectRoadmap } from "react-icons/go";
import { PiFlyingSaucerBold } from "react-icons/pi";
import logo from "../Assets/j-image.png"; 


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const handleAboutClick = () => {
    setAboutVisible(true);
    updateExpanded(false); 
  };

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
        <Container>
            <Navbar.Brand className="d-flex">
                <img src={logo} alt="Logo" className="navbar-logo" />
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => updateExpanded(expand ? false : "expanded")}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto" defaultActiveKey="#home">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                            <MdOutlineHomeWork style={{ marginBottom: "2px" }} /> Inicio
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} to="/about" onClick={() => { updateExpanded(false); handleAboutClick(); }}>
                            <GrUserManager style={{ marginBottom: "2px" }} /> Acerca de
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} to="/experience" onClick={() => { updateExpanded(false); handleAboutClick(); }}>
                            <PiFlyingSaucerBold style={{ marginBottom: "2px" }} /> Experiencia
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                            <GoProjectRoadmap style={{ marginBottom: "2px" }}/> Proyectos
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} to="/contact" onClick={()=> updateExpanded(false)} >
                            <AiOutlineContacts style={{ marginBottom: "2px" }} /> Contacto
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavBar;
