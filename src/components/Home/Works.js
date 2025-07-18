import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <div class="typing-text">
            <h1 className="heading-works">Trabajo como:</h1> 
            <Typewriter
                options={{
                    strings: [
                        "Desarrollador web",
                        "Back-end",
                        "Front-end"
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                }}
            />
        </div>
    );
}

export default Type;