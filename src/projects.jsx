import { useEffect, useState } from "react";

const projects = [
  {
    title: "Portfolio Website",
    desc: [
      "React-based personal portfolio",
      "Modern UI with animations",
      "Responsive design"
    ],
    skills: ["React", "JavaScript", "CSS"]
  },
  {
    title: "Voice Translator",
    desc: [
      "Developed a multilingual voice translation web application supporting English, Hindi, Kannada, and Telugu.",
      "Implemented REST APIs with Django REST Framework and integrated the Deep Translator library for backend translation",
      "Tested and validated APIs using Postman to ensure correct request handling and responses"
    ],
    skills: ["React", "Django", "Python", "Postman"]
  },
  {
    title: "Knowledge Graph Generation from Resume",
    desc: [
      "Developed a Python pipeline to extract structured information from resume files (PDF, DOCX, TXT) and convert unstructured data into knowledge graphs.",
      "Generated Cypher queries to create nodes and relationships in a Neo4j database, enabling visualization of candidate skills, education, and experience as interconnected networks.",
      "Implemented data models using Pydantic and built a multi-threaded processing system to efficiently parse and merge multipleresumes into a unified knowledge graph"
    ],
    skills: ["Python", "Neo4j","API integration"]
  },
  {
    title: "Automated Balance SheetInsight Generator",
    desc: [
      "Developed a Python system to extract financial data from company balance sheet PDFs using PyPDF2",
      "Implemented a text-chunking pipeline to process large financial documents efficiently and prepare them for AI-based analysis.",
      "•Integrated the OpenAI API to automatically generate insights on key financial metrics such as assets, liabilities, equity, and cash reserves"
    ],
    skills: ["Python", "OpenAI API", "PyPDF2"]
  }
];

function Projects({ goHome }) {
  const [showHint, setShowHint] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      onClick={goHome}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "black",
        zIndex: 150,
        overflowY: "auto"
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "100px 20px"
        }}
      >
        {showHint && (
          <div
            style={{
              textAlign: "center",
              marginBottom: "40px",
              opacity: 0.7,
              fontSize: "0.95rem"
            }}
          >
            Hover over a project to explore
          </div>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px"
          }}
        >
          {projects.map((p, i) => {
            const isActive = activeIndex === i;
            const isDim = activeIndex !== null && activeIndex !== i;

            return (
              <div
                key={i}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                style={{
                  background: isActive
                    ? "rgba(255,255,255,0.15)"
                    : "rgba(255,255,255,0.05)",
                  padding: "20px",
                  borderRadius: "14px",
                  cursor: "pointer",

                  minHeight: isActive ? "260px" : "160px",
                  height: "auto",

                  display: "flex",
                  flexDirection: "column",

                  transition: "all 0.4s ease",

                  transform: isActive
                    ? "scale(1.1)"
                    : isDim
                    ? "scale(0.95)"
                    : "scale(1)",

                  opacity: isDim ? 0.2 : 1,
                  zIndex: isActive ? 2 : 1
                }}
              >
                {/* TITLE */}
                <h2 style={{ marginBottom: "10px" }}>{p.title}</h2>

                {/* DESCRIPTION */}
                <ul
                  style={{
                    paddingLeft: "18px",
                    opacity: 0.8
                  }}
                >
                  {p.desc.map((point, idx) => (
                    <li
                      key={idx}
                      style={{
                        marginBottom: "6px",
                        fontSize: isActive ? "0.95rem" : "0.85rem"
                      }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                {/* 🔥 SKILLS TAGS */}
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px"
                  }}
                >
                  {p.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: isActive ? "0.75rem" : "0.7rem",
                        padding: "4px 8px",
                        borderRadius: "999px",
                        background: "rgba(255,255,255,0.1)",
                        opacity: 0.9
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;