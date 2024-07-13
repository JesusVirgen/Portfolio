import React, { useState, useEffect } from 'react';

const ScrollAnimation = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('animated-section');

      if (element) {
        const topPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (topPosition < windowHeight * 1.5) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="animated-section" className={`scroll-animation-section ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;