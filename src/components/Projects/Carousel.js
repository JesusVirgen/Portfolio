import Carousel from "react-spring-3d-carousel";
import { useState, useEffect, useRef } from "react";
import { config } from "react-spring";

export default function Carroussel(props) {
    const table = props.cards.map((element, index) => {
        return { ...element, onClick: () => setGoToSlide(index) };
    });

    const [offsetRadius, setOffsetRadius] = useState(2);
    const [showArrows, setShowArrows] = useState(false);
    const [cards] = useState(table);
    const [goToSlide, setGoToSlide] = useState(props.activeCard);
    const [isPaused, setIsPaused] = useState(false); 
    const activeCardRef = useRef(props.activeCard);

    const intervalRef = useRef(null); 

    useEffect(() => {
        setOffsetRadius(props.offset);
        setShowArrows(props.showArrows);
    }, [props.offset, props.showArrows]);

    useEffect(() => {
        activeCardRef.current = props.activeCard;
    }, [props.activeCard]);

    useEffect(() => {
        if (intervalRef.current) clearInterval(intervalRef.current); 

        intervalRef.current = setInterval(() => {
            if (!isPaused) {
                setGoToSlide(prev =>
                    prev === cards.length - 1 ? 0 : prev + 1
                );
            }
        }, 10000); 

        return () => clearInterval(intervalRef.current); 
    }, [isPaused, cards.length]);

    const handleTouchStart = () => setIsPaused(true);
    const handleTouchEnd = () => setIsPaused(false);
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    return (
        <div
            style={{
                width: props.width,
                height: props.height,
                margin: props.margin,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={() => setIsPaused(true)}
        >
            <Carousel
                slides={cards}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                showNavigation={showArrows}
                animationConfig={config.gentle}
            />
        </div>
    );
}
