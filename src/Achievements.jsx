import "./Achievements.css";

function Achievements({ goHome }) {
  const achievements = [
    {
      number: "01",
      title: "MCA — Artificial Intelligence & Machine Learning",
      organization: "JAIN (Deemed-to-be University)",
      year: "2025 — 2027",
      description:
        "Currently pursuing postgraduate studies focused on artificial intelligence, machine learning, and modern computing technologies.",
    },
    {
      number: "02",
      title: "Python Developer Internship",
      organization: "AI & Data Analytics Project",
      year: "2026",
      description:
        "Developed an AI-powered Instagram analytics system involving data collection, NLP, text processing, and machine learning.",
    },
    {
      number: "03",
      title: "AI Project Development",
      organization: "Personal Projects",
      year: "2025 — Present",
      description:
        "Built multiple AI-focused applications including RAG chatbots, voice assistants, and backend systems with persistent memory.",
    },
    {
      number: "04",
      title: "Continuous Technical Learning",
      organization: "Programming & AI",
      year: "Ongoing",
      description:
        "Continuously developing skills across Python, AI/ML, backend development, databases, APIs, and modern software engineering.",
    },
  ];

  return (
    <section className="achievementsPage">
      <div className="achievementsHeader">
        <div>
          <span className="sectionEyebrow">05 / ACHIEVEMENTS</span>

          <h1 className="achievementsTitle">
            Things I've
            <span> achieved.</span>
          </h1>
        </div>

        <button
          className="achievementsBackButton"
          onClick={goHome}
        >
          ← Home
        </button>
      </div>

      <div className="achievementsGrid">
        {achievements.map((achievement) => (
          <article
            className="achievementCard"
            key={achievement.number}
          >
            <div className="achievementTop">
              <span className="achievementNumber">
                {achievement.number}
              </span>

              <span className="achievementArrow">↗</span>
            </div>

            <div className="achievementContent">
              <div className="achievementYear">
                {achievement.year}
              </div>

              <h2>{achievement.title}</h2>

              <h3>{achievement.organization}</h3>

              <p>{achievement.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="achievementsFooter">
        <div className="achievementsLine"></div>

        <p>Progress over perfection</p>

        <div className="achievementsLine"></div>
      </div>
    </section>
  );
}

export default Achievements;