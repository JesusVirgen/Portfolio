import React from 'react';
import { Container } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GiGraduateCap } from 'react-icons/gi';
import { FaLaptopCode, FaBriefcase, FaRocket, FaFlagCheckered } from 'react-icons/fa';


const allExperiences = [
  {
    date: "2019-2024",
    icon: <GiGraduateCap />,
    title: "Facultad de Ingeniería Mecánica y Eléctrica - Universidad de Colima",
    subtitle: "Ingeniería en Computación Inteligente",
    description: [],
    iconBg: "linear-gradient(138deg,rgba(240, 153, 255, 1) 0%, rgba(155, 166, 99, 1) 100%)"
  },
  {
    date: "2022",
    icon: <FaLaptopCode />,
    title: "Dirección de sistemas - Universidad de Colima",
    subtitle: "Aprendiz Desarrollador Web",
    description: [
      "Sitio de intercambio de libros para la Universidad de Colima.",
      "PHP, mySQL, HTML, CSS, Javascript, Boostrap, Git y Github."
    ],
    iconBg: "linear-gradient(90deg,rgba(131, 125, 255, 1) 0%, rgba(117, 228, 250, 1) 100%)"
  },
  {
    date: "2023",
    icon: <FaBriefcase />,
    title: "Colegio Campoverde",
    subtitle: "Desarrollador Backend",
    description: [
      "Creación de APIs de las actividades escolares para su implementación dentro de la página.",
      "C# ,SQLServer, Visual Studio 2012 y Postman."
    ],
    iconBg: "linear-gradient(90deg,rgba(38, 255, 92, 1) 0%, rgba(110, 190, 255, 1) 100%)"
  },
  {
    date: "2023-2024",
    icon: <FaLaptopCode />,
    title: "Proyecto JAPCOL",
    subtitle: "Desarrollador Fullstack",
    description: [
      "Creación de formularios, tabla de base de datos, modelos, controlladores y vistas.",
      "Ruby on Rails, HTML, CSS, JavaScript, PostgresSQL, TailwindCSS."
    ],
    iconBg: "linear-gradient(90deg,rgba(255, 110, 110, 1) 0%, rgba(255, 200, 122, 1) 100%)"
  },
  {
    date: "2023-2024",
    icon: <FaBriefcase />,
    title: "Freelance",
    subtitle: "Desarrollador Fullstack",
    description: [
      "Resolución de bugs en sistema de donaciones en colaboración con un desarrollador web senior.",
      "Ruby on Rails, HTML, CSS, JavaScript, JQuery, PostgresSQL, Stripe y Paypal."
    ],
    iconBg: "linear-gradient(90deg,rgba(186, 255, 233, 1) 0%, rgba(255, 125, 125, 1) 100%)"
  },
  {
    date: "2025-Act",
    icon: <FaBriefcase />,
    title: "Tecnovaxion",
    subtitle: "Desarrollador Fullstack / DevOps",
    description: [
      "Desarollé una página de venta de servicios legales junto a un equipo de desarrolladores.",
      "Node.js, Express, HTML, CSS y JavaScript, Bootstrap, iPgae, Heroku y Stripe."
    ],
    iconBg: "linear-gradient(313deg,rgba(97, 229, 255, 1) 0%, rgba(255, 253, 145, 1) 100%)"
  }
];

function Experience() {
  return (
    <section id="experience">
      <div className="experience-content">
        <Container className="experience-section">
          <VerticalTimeline>
            <VerticalTimelineElement
              icon={<FaRocket />}
              contentStyle={{ display: "none" }}
              className="vertical-timeline-icon-start"
            />

            {allExperiences.map((exp, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                date={exp.date}
                iconStyle={{ background: exp.iconBg, color: '#000' }}
                icon={exp.icon}
              >
                <h3 className="vertical-timeline-element-title">{exp.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{exp.subtitle}</h4>
                <ul>
                  {exp.description.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
            <VerticalTimelineElement
              icon={<FaFlagCheckered />}
              contentStyle={{ display: "none" }}
              className="vertical-timeline-icon-end"
            />
          </VerticalTimeline>
        </Container>
      </div>
    </section>
  );
}

export default Experience;
