function Button({ text, src }) {
    return <a href={src} target="_blank" rel="noopener noreferrer" className="btn-code">{text}</a>;
}

export default Button;