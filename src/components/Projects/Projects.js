import React, { useEffect, useState } from "react";
import { Container} from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";
import chatify from "../../Assets/git-img.jpeg";

function Projects() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          imagen="https://raw.githubusercontent.com/JesusVirgen/To_do_list/refs/heads/main/images/screenshot.png"
          titulo="To-do-list"
          descripcion="Una aplicación basada en web para gestionar tareas de manera eficiente, creada con Ruby on Rails, 
                            que presenta paginación dinámica, filtrado de estado y notificaciones fáciles de usar. 
                            Este proyecto demuestra la funcionalidad CRUD, el manejo de validación y el diseño responsivo."
          src="https://github.com/JesusVirgen/To_do_list"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={chatify}
          titulo="Carrusel de imagenes PWA"
          descripcion="Carrusel de imagenes hecho con html css y javascript, es PWA lo cual puede funcionar sin internet."
          src="https://github.com/JesusVirgen/Img-carrussel-PWA"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={chatify}
          titulo="Blog"
          descripcion="Pagina la cual perimte crear blogs e interactuar con el mismo ya que es un CRUD, este proyecto es mayormente hecho en ruby."
          src="https://github.com/JesusVirgen/Blog-Ruby"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={chatify}
          titulo="Buscador de imagenes"
          descripcion="Un motor de búsqueda de imágenes interactivo que utiliza la API de Pixabay para mostrar resultados de búsqueda con paginación. 
                            Los usuarios pueden buscar imágenes por términos específicos y ver detalles como me gusta y vistas de cada imagen."
          src="https://github.com/JesusVirgen/Imges_API_Project"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={chatify}
          titulo="Clima API"
          descripcion="Este proyecto le permite consultar el clima actual en diferentes ciudades y países del mundo. Utiliza la API OpenWeather 
                            para obtener datos meteorológicos en tiempo real y fue desarrollado con HTML, CSS, JavaScript y TailwindCSS."
          src="https://github.com/JesusVirgen/WeatherAPI"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen="https://raw.githubusercontent.com/JesusVirgen/cryptocurrencies/refs/heads/main/img/screenshot.png"
          titulo="Comprobador de precios de criptomonedas"
          descripcion="Una aplicación web que permite a los usuarios comprobar los precios en tiempo real de las principales criptomonedas 
                            utilizando la API CryptoCompare."
          src="https://github.com/JesusVirgen/cryptocurrencies"
        />
      )
    }
  ];
  const [activeCard] = useState(0);

  const [carouselWidth, setCarouselWidth] = useState("60%");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setCarouselWidth("0");
      } else {
        setCarouselWidth("60%");
      }
    };

    handleResize(); 

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="projects">
      <div fluid className="project-section">
        <Container className="project-content"> 
          <Carousel
            className="custom-carousel"
            cards={cards}
            activeCard={activeCard}
            height="500px"
            width={carouselWidth}
            margin="0 auto"
            offset={2}
            showArrows={true}
            slides={cards}
          />
        </Container>
      </div>
    </section>
  );
}

export default Projects;