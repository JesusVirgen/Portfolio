import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards, Autoplay } from 'swiper/modules';

import pythonImg from "../../Assets/languages_img/python.png";
import rubyImg from "../../Assets/languages_img/ruby.png";
import railsImg from "../../Assets/languages_img/rails.png";
import htmlImg from "../../Assets/languages_img/html.png";
import reactImg from "../../Assets/languages_img/react.png";
import cssImg from "../../Assets/languages_img/css.png";
import nodeImg from "../../Assets/languages_img/nodejs.png";
import javascriptImg from "../../Assets/languages_img/javascript.png";
import mysqlImg from "../../Assets/languages_img/mysql.png";
import gitImg from "../../Assets/languages_img/git.png";
import tailwindcssImg from "../../Assets/languages_img/tailwindcss.png";
import bootstrapImg from "../../Assets/languages_img/bootstrap.png";
import wordpessImg from "../../Assets/languages_img/wordpress.png";
import ubuntuImg from "../../Assets/languages_img/ubuntu.png";
import expressImg from "../../Assets/languages_img/expressjs.png";

function About() {
    return (
        <section id="about">
            <Container fluid className="about-section">
                <Container className="about-content">
                    <Row className="about-row">
                        <Col md={4} className="about-cards">
                            <>
                                <Swiper
                                    effect={'cards'}
                                    grabCursor={true}
                                    loop={true} 
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[EffectCards, Autoplay]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide><img src={pythonImg} alt="Python image" /></SwiperSlide>
                                    <SwiperSlide><img src={rubyImg} alt="Ruby image" /></SwiperSlide>
                                    <SwiperSlide><img src={railsImg} alt="Rails image" /></SwiperSlide>
                                    <SwiperSlide><img src={expressImg} alt="Express JS image" /></SwiperSlide>
                                    <SwiperSlide><img src={javascriptImg} alt="JavaScript image" /></SwiperSlide>
                                    <SwiperSlide><img src={nodeImg} alt="Node.js image" /></SwiperSlide>
                                    <SwiperSlide><img src={reactImg} alt="React image" /></SwiperSlide>
                                    <SwiperSlide><img src={mysqlImg} alt="MySQL image" /></SwiperSlide>
                                    <SwiperSlide><img src={htmlImg} alt="HTML image" /></SwiperSlide>
                                    <SwiperSlide><img src={cssImg} alt="CSS image" /></SwiperSlide>
                                    <SwiperSlide><img src={tailwindcssImg} alt="TailwindCSS image" /></SwiperSlide>
                                    <SwiperSlide><img src={bootstrapImg} alt="Bootstrap image" /></SwiperSlide>
                                    <SwiperSlide><img src={gitImg} alt="Git image" /></SwiperSlide>
                                    <SwiperSlide><img src={wordpessImg} alt="WordPress image" /></SwiperSlide>
                                    <SwiperSlide><img src={ubuntuImg} alt="Ubuntu image" /></SwiperSlide>
                                </Swiper>
                            </>
                        </Col>
                        <Col md={8}>
                            <p className="about-description-text">
                                Soy una persona creativa, curiosa y orientada a resultados. Me encanta enfrentar desafíos
                                tecnológicos y buscar soluciones innovadoras. Adaptación rápida si de trabajar
                                en equipo se trata.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default About;