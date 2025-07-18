import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GiGraduateCap } from 'react-icons/gi';
import { FaLaptopCode, FaBriefcase } from 'react-icons/fa'
import { FaRocket } from "react-icons/fa";;

const allExperiences = [
  {
    date: "2019-2024",
    icon: <GiGraduateCap />,
    title: "Facultad de Ingeniería Mecánica y Eléctrica - Universidad de Colima",
    subtitle: "Ingeniería en Computación Inteligente",
    description: [ ],
    iconBg: "#c8d98e"
  },
  {
    date: "2022",
    icon: <FaLaptopCode />,
    title: "Dirección de sistemas - Universidad de Colima",
    subtitle: "Aprendiz Desarrollador Web",
    description: [
      "Página de tareas con PHP, JavaScript, HTML, CSS y Bootstrap.",
      "Sitio de intercambio de libros entre campus con base de datos MySQL."
    ],
    iconBg: "#9f9ec8"
  },
  {
    date: "2023",
    icon: <FaBriefcase />,
    title: "Colegio Campoverde",
    subtitle: "Desarrollador Backend",
    description: [
      "Migración de web a móvil.",
      "Creación de APIs para actividades escolares usando C# y SQLServer."
    ],
    iconBg: "#009d4b"
  },
  {
    date: "2023-2024",
    icon: <FaLaptopCode />,
    title: "Proyecto JAPCOL",
    subtitle: "Desarrollador Fullstack",
    description: [
      "Formularios y vistas usando Ruby on Rails, TailwindCSS y PostgreSQL.",
    ],
    iconBg: "#01536c"
  },
  {
    date: "2023-2024",
    icon: <FaBriefcase />,
    title: "Freelance",
    subtitle: "Desarrollador Fullstack",
    description: [
      "Resolución de bugs en sistema de donaciones.",
      "Rails, HTML, CSS y JS en colaboración con desarrollador senior."
    ],
    iconBg: "#1c8b9e"
  }
];

function Experience() {
  const [visibleCount, setVisibleCount] = useState(2); 

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  return (
    <section id="experience">
      <Container fluid className="experience-content">
        <Container className="experience-section">
          <VerticalTimeline>
            <VerticalTimelineElement
              iconStyle={{ background: "#9ca3af", color: "#fff" }}
              icon={<FaRocket />}
              contentStyle={{ display: "none" }}
              contentArrowStyle={{ display: "none" }}
              className="vertical-timeline-icon-start"
            />

            {allExperiences.slice(0, visibleCount).map((exp, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#bdbdbd', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid #bdbdbd' }}
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
          </VerticalTimeline>

          {visibleCount < allExperiences.length && (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button
                onClick={handleLoadMore}
                style={{
                  backgroundColor: '#1c8b9e',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
              >
                Ver más
              </button>
            </div>
          )}
        </Container>
      </Container>
    </section>
  );
}

export default Experience;
