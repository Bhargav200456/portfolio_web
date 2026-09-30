import "./Skills.css";

function Skills({ goHome }) {

  const skillGroups = [
    {
      number: "01",
      title: "Languages",
      description: "Core programming",
      skills: [
        "Python",
        "Java",
        "C++",
        "JavaScript",
        "HTML",
        "CSS"
      ]
    },

    {
      number: "02",
      title: "AI / ML",
      description: "Intelligent systems",
      skills: [
        "Machine Learning",
        "NLP",
        "RAG",
        "LangChain",
        "OpenAI",
        "Scikit-learn"
      ]
    },

    {
      number: "03",
      title: "Data & Backend",
      description: "Data & APIs",
      skills: [
        "PostgreSQL",
        "MySQL",
        "SQL",
        "FastAPI",
        "Flask",
        "REST APIs"
      ]
    },

    {
      number: "04",
      title: "Tools",
      description: "Development stack",
      skills: [
        "React",
        "Git",
        "GitHub",
        "Neo4j",
        "Docker",
        "Vite"
      ]
    }
  ];


  return (
    <section className="skillsPage">

      {/* HEADER */}

      <div className="skillsHeader">

        <div>

          <span className="sectionEyebrow">
            02 / SKILLS
          </span>

          <h1 className="skillsTitle">
            What I
            <span> work with.</span>
          </h1>

        </div>


        <button
          className="skillsBackButton"
          onClick={goHome}
        >
          ← Home
        </button>

      </div>


      {/* SKILL CARDS */}

      <div className="skillsGrid">

        {skillGroups.map((group) => (

          <div
            className="skillCard"
            key={group.number}
          >

            <div className="skillCardTop">

              <span className="skillNumber">
                {group.number}
              </span>

              <span className="skillArrow">
                ↗
              </span>

            </div>


            <div className="skillCardTitle">

              <h2>
                {group.title}
              </h2>

              <p>
                {group.description}
              </p>

            </div>


            <div className="skillList">

              {group.skills.map((skill) => (

                <span
                  className="skillPill"
                  key={skill}
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>


      {/* FOOTER */}

      <div className="skillsFooter">

        <div className="skillsLine"></div>

        <p>
          Always learning · Always building
        </p>

        <div className="skillsLine"></div>

      </div>

    </section>
  );
}

export default Skills;