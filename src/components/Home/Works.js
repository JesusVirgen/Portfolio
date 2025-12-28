import Typewriter from "typewriter-effect";

function Type() {
    return (
        <div class="typing-text">
            <Typewriter
                options={{
                    strings: [
                        "Back-end",
                        "Front-end",
                        "DevOps",
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