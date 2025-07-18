import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";

function Card({ imagen, titulo, descripcion, src}) {
    const [show, setShown] = useState(false);

    const props3 = useSpring({
        transform: show ? "scale(1.03)" : "scale(1)",
        boxShadow: show
        ? "0 20px 25px rgb(0 0 0 / 25%)"
        : "0 2px 10px rgb(0 0 0 / 8%)",
        backgroundColor: "#2f2f2f",
        color: "#fff",
        borderRadius: "25px"
    });

    return (
        <animated.div
            className="card"
            style={props3}
            onMouseEnter={() => setShown(true)}
            onMouseLeave={() => setShown(false)}
        >
            <img src={imagen} alt={titulo} />
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <div className="btnn">
                <Button src={src} text="Code" />
            </div>
        </animated.div>
    );
}

export default Card;