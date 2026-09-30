import "./Exp.css";

function Exp({ goHome }) {

  const experiences = [
    {
      number: "01",
      role: "Python Developer Intern",
      company: "Internship",
      period: "2026",
      type: "AI / Data",
      description:
        "Worked on an AI-powered Instagram analytics system involving data collection, text processing, NLP, and machine learning.",
      technologies: [
        "Python",
        "Flask",
        "React",
        "Scikit-learn",
        "NLP"
      ]
    },

    {
      number: "02",
      role: "AI / ML Development",
      company: "Personal Projects",
      period: "2025 — Present",
      type: "Independent",
      description:
        "Building AI applications including RAG systems, voice assistants, knowledge graphs, and asynchronous LLM workflows.",
      technologies: [
        "Python",
        "LangChain",
        "PostgreSQL",
        "FastAPI",
        "LLMs"
      ]
    }
  ];


  return (
    <section className="experiencePage">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="experienceHeader">

        <div>

          <span className="sectionEyebrow">
            04 / EXPERIENCE
          </span>

          <h1 className="experienceTitle">
            Where I've
            <span> worked.</span>
          </h1>

        </div>


        <button
          className="experienceBackButton"
          onClick={goHome}
        >
          ← Home
        </button>

      </div>


      {/* =================================================
          EXPERIENCE LIST
      ================================================= */}

      <div className="experienceList">

        {experiences.map((experience) => (

          <article
            className="experienceCard"
            key={experience.number}
          >

            {/* NUMBER */}

            <div className="experienceNumber">
              {experience.number}
            </div>


            {/* MAIN */}

            <div className="experienceMain">

              <div className="experienceMeta">

                <span>
                  {experience.type}
                </span>

                <span>
                  {experience.period}
                </span>

              </div>


              <h2>
                {experience.role}
              </h2>


              <h3>
                {experience.company}
              </h3>


              <p>
                {experience.description}
              </p>


              <div className="experienceTech">

                {experience.technologies.map(
                  (technology) => (

                    <span
                      key={technology}
                    >
                      {technology}
                    </span>

                  )
                )}

              </div>

            </div>


            {/* ARROW */}

            <div className="experienceArrow">
              ↗
            </div>

          </article>

        ))}

      </div>


      {/* =================================================
          FOOTER
      ================================================= */}

      <div className="experienceFooter">

        <div className="experienceLine"></div>

        <p>
          Building · Learning · Growing
        </p>

        <div className="experienceLine"></div>

      </div>

    </section>
  );
}

export default Exp;