import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlinePython } from "react-icons/ai";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaLinux } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiRubyonrails } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import ScrollAnimation from '../ScrollText';

function Home2() {
    return (
        <Container fluid className="home-section" id="about">
            <ScrollAnimation>
                <Row>
                    <Col className="home-about-description">
                        <h1 id="title-section">
                            <span className="var-color"> Principales tecnologías que eh utilizado </span>
                        </h1>
                        <ul className="about-activities" id="pro-languages">
                            <li className="about-activity">Python <AiOutlinePython /></li>
                            <li className="about-activity">Ruby on Rails <SiRubyonrails /></li>
                            <li className="about-activity">My
                                <strong className="sql-text">SQL <GrMysql /></strong>
                            </li>
                            <li className="about-activity">Javascript <IoLogoJavascript /></li>
                            <li className="about-activity">React.js <FaReact /></li>
                            <li className="about-activity">HTML <FaHtml5 /></li>
                            <li className="about-activity">CSS <FaCss3Alt /></li>
                            <li className="about-activity">TailwindCSS <RiTailwindCssLine /></li>
                            <li className="about-activity">Git <FaGitAlt /></li>
                            <li className="about-activity">Linux <FaLinux /></li>
                        </ul>
                    </Col>
                </Row>
            </ScrollAnimation>
        </Container>
    );
}

export default Home2;