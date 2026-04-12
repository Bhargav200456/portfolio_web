import { useState, useRef } from "react";

function Projects({ goHome }) {
  const [projectIndex, setProjectIndex] = useState(0);
  const startX = useRef(null);

  const projects = [
    { name: "Knowledge Graph Generation", desc: "Transforms resume data into structured knowledge graphs using Neo4j." },
    { name: "Balance Sheet Insight Generator", desc: "AI system that extracts and analyzes financial data." },
    { name: "Portfolio Website", desc: "Interactive one-page portfolio with cinematic UI." },
    { name: "Voice Translator", desc: "Multilingual voice translation application." },
    { name: "Chatbot", desc: "AI chatbot with contextual understanding." }
  ];

  const handleMouseDown = (e) => {
    startX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (startX.current === null) return;

    const diff = e.clientX - startX.current;

    if (diff > 40) {
      setProjectIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    } else if (diff < -40) {
      setProjectIndex((prev) => (prev + 1) % projects.length);
    }

    startX.current = null;
  };

  return (
    <div className="viewer" onClick={goHome}>
      <div
        className="carouselWrapper"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => {
          startX.current = null;
        }}
      >
        <div
          className="carousel"
          style={{
            transform: `rotateY(${-projectIndex * (360 / projects.length)}deg)`
          }}
        >
          {projects.map((proj, i) => (
            <div
              key={i}
              className="card"
              style={{
                transform: `rotateY(${i * (360 / projects.length)}deg) translateZ(180px)`
              }}
            >
              <h3>{proj.name}</h3>
              <p className="subtitle">{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;