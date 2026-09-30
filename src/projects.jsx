import "./Projects.css";

function Projects({ goHome }) {

  const projects = [
    {
      number: "01",
      title: "Instagram Analytics",
      category: "AI / NLP",
      description:
        "AI-powered system that discovers Instagram content, processes captions and hashtags, and groups related posts using NLP and machine learning.",
      technologies: [
        "React",
        "Flask",
        "Python",
        "TF-IDF",
        "K-Means"
      ],
      status: "Internship Project"
    },

    {
      number: "02",
      title: "JARVIS AI Assistant",
      category: "AI Assistant",
      description:
        "Voice-controlled AI assistant built with Python featuring speech recognition, text-to-speech, persistent memory, and modular architecture.",
      technologies: [
        "Python",
        "PostgreSQL",
        "Speech AI",
        "OpenAI"
      ],
      status: "Personal Project"
    },

    {
      number: "03",
      title: "Async RAG Chatbot",
      category: "Generative AI",
      description:
        "Asynchronous RAG chatbot with persistent conversation history, PostgreSQL storage, FastAPI backend, and parallel AI processing.",
      technologies: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "RAG",
        "LLM"
      ],
      status: "AI Project"
    }
  ];


  return (
    <section className="projectsPage">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="projectsHeader">

        <div>

          <span className="sectionEyebrow">
            03 / PROJECTS
          </span>

          <h1 className="projectsTitle">
            Things I've
            <span> built.</span>
          </h1>

        </div>


        <button
          className="projectsBackButton"
          onClick={goHome}
        >
          ← Home
        </button>

      </div>


      {/* =================================================
          PROJECT LIST
      ================================================= */}

      <div className="projectsGrid">

        {projects.map((project) => (

          <article
            className="projectCard"
            key={project.number}
          >

            {/* TOP */}

            <div className="projectTop">

              <span className="projectNumber">
                {project.number}
              </span>

              <span className="projectCategory">
                {project.category}
              </span>

            </div>


            {/* TITLE */}

            <div className="projectMain">

              <h2>
                {project.title}
              </h2>

              <p>
                {project.description}
              </p>

            </div>


            {/* TECHNOLOGIES */}

            <div className="projectTech">

              {project.technologies.map(
                (technology) => (

                  <span
                    key={technology}
                  >
                    {technology}
                  </span>

                )
              )}

            </div>


            {/* BOTTOM */}

            <div className="projectBottom">

              <span className="projectStatus">
                {project.status}
              </span>

              <span className="projectArrow">
                ↗
              </span>

            </div>

          </article>

        ))}

      </div>


      {/* FOOTER */}

      <div className="projectsFooter">

        <div className="projectsLine"></div>

        <p>
          More projects coming soon
        </p>

        <div className="projectsLine"></div>

      </div>

    </section>
  );
}

export default Projects;