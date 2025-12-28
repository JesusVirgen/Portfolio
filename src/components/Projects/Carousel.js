import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Card from "./Card";

export default function CarouselBasic({ cards }) {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={4}
      pagination={{ clickable: true }}
      grabCursor
      speed={6000}
      loop
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        0: { slidesPerView: 1 },
        480: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1196: { slidesPerView: 3 },
        1369: { slidesPerView: 4 },
      }}
      className="custom-carousel"
    >
      {cards.map((card, i) => (
        <SwiperSlide key={i}>
          <Card
            imagen={card.imagen}
            titulo={card.titulo}
            descripcion={card.descripcion}
            src={card.src}
            buttonText={card.buttonText}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
