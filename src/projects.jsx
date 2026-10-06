import { useState } from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "Insight Generation",
      subtitle: "AI-Powered Instagram Content Analytics",
      category: "AI / NLP",
      description:
        "Full-stack React + Python application for collecting, processing, and analyzing Instagram post data.",
      details:
        "Built a full-stack React and Python application to collect, process, and analyze Instagram post data. Applied NLP-based clustering to group posts by product, topic, and content pattern, generating AI-powered trend and engagement insights.",
      features: [
        "Instagram data collection",
        "Data processing",
        "NLP-based clustering",
        "Product and topic grouping",
        "Trend insights",
        "Engagement insights",
      ],
      technologies: ["React", "Python", "NLP", "Machine Learning"],
      github: "https://github.com/Bhargav200456/instagram_analytics",
    },
    {
      number: "02",
      title: "Knowledge Graph",
      subtitle: "Knowledge Graph Generation from Resume",
      category: "AI / KNOWLEDGE GRAPH",
      description:
        "Python pipeline that extracts structured information from resumes and converts unstructured text into queryable knowledge graphs.",
      details:
        "Built a Python pipeline for structured information extraction from PDF, DOCX, and TXT resumes, converting unstructured text into queryable knowledge graphs. Candidate skills, education, and experience are modeled as interconnected entities using Cypher query generation and Neo4j integration.",
      features: [
        "PDF / DOCX / TXT parsing",
        "Information extraction",
        "Knowledge graph generation",
        "Cypher query generation",
        "Neo4j integration",
        "Multi-threaded processing",
      ],
      technologies: [
        "Python",
        "Neo4j",
        "Cypher",
        "Pydantic",
        "Multi-threading",
      ],
      github: "https://github.com/Bhargav200456/Knowledge-Graph-creation-",
    },
    {
      number: "03",
      title: "Balance Sheet AI",
      subtitle: "Automated Balance Sheet Insight Generator",
      category: "LLM / FINANCE",
      description:
        "LLM-powered financial analysis application that extracts information from balance sheet PDFs and generates automated insights.",
      details:
        "Built an LLM-powered financial analysis application that extracts data from balance sheet PDFs using PyPDF2 and generates automated insights through the OpenAI API. A text-chunking pipeline prepares large financial documents for LLM context windows.",
      features: [
        "PDF extraction",
        "Financial document processing",
        "Text chunking",
        "LLM context preparation",
        "OpenAI API",
        "Financial insights",
      ],
      technologies: ["Python", "PyPDF2", "OpenAI API", "LLM", "NLP"],
      github: "https://github.com/Bhargav200456/BALANCE_SHEET",
    },
    {
      number: "04",
      title: "JARVIS",
      subtitle: "Voice-Controlled AI Agent",
      category: "AI ASSISTANT",
      description:
        "Voice-controlled AI agent with wake-word detection, speech recognition, text-to-speech, and persistent contextual memory.",
      details:
        "Building a voice-controlled AI agent with wake-word detection, speech recognition, and text-to-speech, designed for planned tool-calling and API integrations. Developing a PostgreSQL-backed persistent memory system to support contextual, multi-turn conversations.",
      features: [
        "Wake-word detection",
        "Speech recognition",
        "Text-to-speech",
        "Tool-calling architecture",
        "PostgreSQL memory",
        "Multi-turn conversations",
      ],
      technologies: [
        "Python",
        "PostgreSQL",
        "Speech Recognition",
        "TTS",
        "AI",
      ],
      github: "https://github.com/Bhargav200456/jarvis",
    },
    {
      number: "05",
      title: "Voice Translator",
      subtitle: "Multilingual Voice Translation",
      category: "FULL STACK / AI",
      description:
        "Multilingual voice translation web application supporting English, Hindi, Kannada, and Telugu.",
      details:
        "Developed a multilingual voice translation web application supporting English, Hindi, Kannada, and Telugu. Built a React frontend using the Web Speech API and implemented REST APIs with Django REST Framework and Deep Translator.",
      features: [
        "Voice input",
        "Multilingual translation",
        "English / Hindi / Kannada / Telugu",
        "React frontend",
        "Django REST APIs",
        "Deep Translator",
      ],
      technologies: [
        "React",
        "JavaScript",
        "Django REST",
        "Web Speech API",
        "Deep Translator",
      ],
      github: "https://github.com/Bhargav200456/voice-backend-",
    },
    {
      number: "06",
      title: "LangTranslate",
      subtitle: "Open-Source Python Library",
      category: "PYTHON / OPEN SOURCE",
      description:
        "Python package for multilingual translation with PostgreSQL integration for translation storage and history management.",
      details:
        "Developing a Python package for multilingual translation with support for English, Hindi, and Kannada. Implementing a modular architecture with PostgreSQL integration for translation storage and history management, together with PyPI-ready packaging.",
      features: [
        "Multilingual translation",
        "English support",
        "Hindi support",
        "Kannada support",
        "PostgreSQL integration",
        "Translation history",
      ],
      technologies: ["Python", "PostgreSQL", "PyPI", "Git"],
      github: "https://github.com/Bhargav200456/langtranslate",
    },
    {
      number: "07",
      title: "Intelligent Email",
      subtitle: "Scheduling & Delivery System",
      category: "FULL STACK",
      description:
        "Full-stack email scheduling platform with asynchronous background processing and persistent delivery tracking.",
      details:
        "Developed a full-stack email scheduling platform with asynchronous background processing and persistent delivery tracking. Implemented Redis/BullMQ-based job scheduling with configurable concurrency and sender-level rate limiting, together with a React dashboard.",
      features: [
        "Email composition",
        "Email scheduling",
        "Async background processing",
        "Delivery tracking",
        "Redis / BullMQ",
        "Rate limiting",
      ],
      technologies: [
        "React",
        "Redis",
        "BullMQ",
        "Async Processing",
        "JavaScript",
      ],
      github: "https://github.com/Bhargav200456/email_scheduler",
    },
    {
      number: "08",
      title: "Portfolio",
      subtitle: "Personal Developer Portfolio",
      category: "WEB DEVELOPMENT",
      description:
        "Responsive personal portfolio website built with React and CSS to showcase technical skills and projects.",
      details:
        "Developed a responsive personal portfolio website using React and CSS, showcasing technical skills and projects with interactive features, animations, hover effects, reusable components, and responsive layouts.",
      features: [
        "Responsive design",
        "React components",
        "Modern UI",
        "Interactive features",
        "Hover effects",
        "Reusable components",
      ],
      technologies: ["React", "CSS", "JavaScript", "Vite"],
      github: "https://github.com/Bhargav200456/portfolio_web",
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const project = projects[currentProject];

  const selectProject = (index) => {
    setShowDetails(false);
    setCurrentProject(index);
  };

  const nextProject = () => {
    setShowDetails(false);
    setCurrentProject((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  const previousProject = () => {
    setShowDetails(false);
    setCurrentProject((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  return (
    <section className="projectsPage">

      {/* HEADER */}
      <div className="projectsHeader">
        <div>
          <span className="sectionEyebrow">
            03 / PROJECTS
          </span>

          <h1 className="projectsTitle">
            Selected<span> work.</span>
          </h1>
        </div>

        <div className="projectCount">
          <span>
            {String(currentProject + 1).padStart(2, "0")}
          </span>

          <span className="projectCountLine"></span>

          <span>
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>
      </div>


      {/* PROJECT AREA */}
      <div className="projectsMain">

        {/* PROJECT INDEX */}
        <aside className="projectIndex">

          <div className="projectIndexLabel">
            ALL PROJECTS
          </div>

          <div className="projectIndexList">
            {projects.map((item, index) => (
              <button
                key={item.number}
                className={
                  index === currentProject
                    ? "projectIndexItem active"
                    : "projectIndexItem"
                }
                onClick={() => selectProject(index)}
              >
                <span className="projectIndexNumber">
                  {item.number}
                </span>

                <span className="projectIndexName">
                  {item.title}
                </span>

                <span className="projectIndexArrow">
                  →
                </span>
              </button>
            ))}
          </div>

        </aside>


        {/* LARGE PROJECT */}
        <div
          className={
            showDetails
              ? "projectShowcase detailsOpen"
              : "projectShowcase"
          }
        >

          <div className="projectLargeNumber">
            {project.number}
          </div>

          <div className="projectContent">

            <div className="projectMeta">
              <span>{project.category}</span>
              <span>PROJECT</span>
            </div>

            <h2>{project.title}</h2>

            <h3>{project.subtitle}</h3>

            {!showDetails && (
              <p className="projectDescription">
                {project.description}
              </p>
            )}

            {showDetails && (
              <div className="projectExpanded">

                <p className="projectFullDescription">
                  {project.details}
                </p>

                <div className="projectFeatureSection">

                  <span>WHAT I BUILT</span>

                  <div className="projectFeatureList">
                    {project.features.map((feature) => (
                      <div key={feature}>
                        <i>↳</i>
                        {feature}
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            )}

            <div className="projectTechnology">
              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>

          </div>


          {/* ACTION */}
          <div className="projectSide">

            {!showDetails && (
              <button
                className="detailsButton"
                onClick={() => setShowDetails(true)}
              >
                <span>Explore project</span>
                <strong>↗</strong>
              </button>
            )}

            {showDetails && (
              <div className="projectActions">

                <button
                  className="closeDetails"
                  onClick={() => setShowDetails(false)}
                >
                  Close details
                </button>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="githubButton"
                  >
                    View on GitHub ↗
                  </a>
                )}

              </div>
            )}

          </div>

        </div>

      </div>


      {/* NAVIGATION */}
      <div className="projectNavigation">

        <button
          className="projectNavigationButton"
          onClick={previousProject}
        >
          ←
          <span>Previous</span>
        </button>

        <div className="projectNavigationHint">
          Click a project to explore
        </div>

        <button
          className="projectNavigationButton"
          onClick={nextProject}
        >
          <span>Next</span>
          →
        </button>

      </div>


      {/* FOOTER */}
      <div className="projectsFooter">

        <span>
          {String(currentProject + 1).padStart(2, "0")}
          {" / "}
          {String(projects.length).padStart(2, "0")}
        </span>

        <div></div>

        <span>
          Selected projects
        </span>

      </div>

    </section>
  );
}

export default Projects;