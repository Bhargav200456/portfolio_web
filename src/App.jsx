import "./App.css";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Projects from "./projects";

function App() {

  const [active, setActive] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  // ✅ LIKE STATE
  const [likes, setLikes] = useState(() => {
    const saved = localStorage.getItem("homeLikes");
    return saved ? JSON.parse(saved) : 0;
  });

  const handleLike = () => {
    const updated = likes + 1;
    setLikes(updated);
    localStorage.setItem("homeLikes", updated);
  };

  const techIcons = [
    "devicon-python-plain",
    "devicon-react-original",
    "devicon-nodejs-plain",
    "devicon-git-plain",
    "devicon-mysql-plain",
    "devicon-java-plain",
    "devicon-html5-plain",
    "devicon-css3-plain",
    "devicon-javascript-plain",
    "devicon-postgresql-plain",
    "devicon-linux-plain",
    "devicon-docker-plain",
    "devicon-pytorch-plain",
    "devicon-keras-plain",
    "devicon-matplotlib-plain",
    "devicon-numpy-plain",
    "devicon-pandas-plain",
    "devicon-jupyter-plain",
    "devicon-ai-plain"
  ];

  const goHome = () => {
    setActive(null);
    setProfileOpen(false);
  };

  const openSection = (section) => {
    setActive(section);
    setProfileOpen(false);
  };

  return (
    <div className="app">

      {/* 🔥 BACKGROUND ICONS (INLINE FLOAT FIX) */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0
        }}
      >
        {techIcons.map((icon, i) => (
          <i
            key={i}
            className={icon}
            style={{
              position: "absolute",
              fontSize: "36px",
              opacity: 0.35,

              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,

              animation: `float${i} 6s infinite ease-in-out alternate`
            }}
          />
        ))}

        {/* 🔥 INLINE KEYFRAMES */}
        <style>
          {techIcons.map((_, i) => `
            @keyframes float${i} {
              0% { transform: translate(0, 0); }
              25% { transform: translate(20px, -30px); }
              50% { transform: translate(-20px, 20px); }
              75% { transform: translate(10px, -10px); }
              100% { transform: translate(0, 0); }
            }
          `).join("\n")}
        </style>
      </div>

      {/* HEADER */}
      <header className="top">
        <div className="profile" onClick={() => setProfileOpen(true)}>
          <img src="/profile.jpeg" alt="profile" className="profileImg" />
          <h1 className="name">Bhargav KN</h1>
        </div>

        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <div className="about" onClick={() => openSection("about")}>
            About
          </div>

          {/* ❤️ LIKE */}
          <div
            onClick={handleLike}
            style={{
              cursor: "pointer",
              fontSize: "1rem",
              opacity: 0.8
            }}
          >
            ❤️ {likes}
          </div>
        </div>
      </header>

      {/* MAIN MENU */}
      <main className="center">
        <div className="menu">

          <div className="item skills">
            Skills
          </div>

          <div className="item projects" onClick={() => openSection("projects")}>
            Projects
          </div>

          <div className="item experience">
            Experience
          </div>

          <div className="item achievements">
            Achievements
          </div>

        </div>
      </main>

      {/* PROFILE */}
      {profileOpen && (
        <div className="profileViewer" onClick={goHome}>
          <div className="profileContent" onClick={(e) => e.stopPropagation()}>
            <img src="/profile.jpeg" className="profileLarge" />

            <div className="profileLinks">
              <a href="https://github.com/Bhargav200456" target="_blank">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/bhargav-kn-696b7b258/" target="_blank">
                <FaLinkedin />
              </a>
            </div>

            <div className="profileEmail">
              bhargavkn13@email.com
            </div>
          </div>
        </div>
      )}

      {/* ABOUT */}
      {active === "about" && (
        <div className="viewer" onClick={goHome}>
          <div className="viewerContent" onClick={(e) => e.stopPropagation()}>

            <div className="aboutProfile">
              <img src="/profile.jpeg" className="aboutProfileImg" />
              <h2 className="aboutName">Bhargav KN</h2>
            </div>

            <h2>About</h2>

            <p className="subtitle">
              AI & Data Engineering focused developer building scalable systems
              that transform complex data into actionable insights.
            </p>

            <div className="list">
              <div className="listItem">AI & Data Engineering developer</div>
              <div className="listItem">CS postgraduate (AI & ML)</div>
              <div className="listItem">Knowledge graphs & pipelines</div>
              <div className="listItem">Scalable system design</div>
            </div>

          </div>
        </div>
      )}

      {/* PROJECTS */}
      {active === "projects" && (
        <Projects goHome={goHome} />
      )}

    </div>
  );
}

export default App;