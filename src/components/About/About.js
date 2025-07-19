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
            <div fluid className="about-section">
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
                                    <SwiperSlide><img src={pythonImg} alt="Python" /></SwiperSlide>
                                    <SwiperSlide><img src={rubyImg} alt="Ruby" /></SwiperSlide>
                                    <SwiperSlide><img src={railsImg} alt="Rails" /></SwiperSlide>
                                    <SwiperSlide><img src={expressImg} alt="Express JS" /></SwiperSlide>
                                    <SwiperSlide><img src={javascriptImg} alt="JavaScript" /></SwiperSlide>
                                    <SwiperSlide><img src={nodeImg} alt="Node.js" /></SwiperSlide>
                                    <SwiperSlide><img src={reactImg} alt="React" /></SwiperSlide>
                                    <SwiperSlide><img src={mysqlImg} alt="MySQL" /></SwiperSlide>
                                    <SwiperSlide><img src={htmlImg} alt="HTML" /></SwiperSlide>
                                    <SwiperSlide><img src={cssImg} alt="CSS" /></SwiperSlide>
                                    <SwiperSlide><img src={tailwindcssImg} alt="TailwindCSS" /></SwiperSlide>
                                    <SwiperSlide><img src={bootstrapImg} alt="Bootstrap" /></SwiperSlide>
                                    <SwiperSlide><img src={gitImg} alt="Git" /></SwiperSlide>
                                    <SwiperSlide><img src={wordpessImg} alt="WordPress" /></SwiperSlide>
                                    <SwiperSlide><img src={ubuntuImg} alt="Ubuntu" /></SwiperSlide>
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
            </div>
        </section>
    );
}

export default About;