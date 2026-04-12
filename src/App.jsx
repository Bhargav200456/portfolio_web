import "./App.css";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Projects from "./projects";
import { useEffect } from "react";
import { db } from "./firebase";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import Skills from "./Skills";


function App() {

  const [active, setActive] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  // ✅ FIREBASE LIKE STATE
  const [likes, setLikes] = useState(0);

  // ✅ FETCH LIKES FROM FIREBASE
  useEffect(() => {
    const fetchLikes = async () => {
      const ref = doc(db, "likes", "main");
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setLikes(snap.data().count);
      } else {
        await setDoc(ref, { count: 0 });
      }
    };

    fetchLikes();
  }, []);

  // ✅ UPDATE LIKES IN FIREBASE
  const handleLike = async () => {
    const ref = doc(db, "likes", "main");

    const newCount = likes + 1;
    setLikes(newCount);

    await updateDoc(ref, {
      count: newCount
    });
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
      {/* 🔥 SCATTERED FLOATING ICONS */}
<div
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 0,
    overflow: "hidden"
  }}
>
  {techIcons.map((icon, i) => {
    const size = 28 + Math.random() * 20;
    const duration = 10 + Math.random() * 10;
    const delay = Math.random() * 5;

    return (
      <i
        key={i}
        className={icon}
        style={{
          position: "absolute",
          fontSize: `${size}px`,
          opacity: 0.25,

          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,

          animation: `float${i} ${duration}s ease-in-out infinite`,
          animationDelay: `${delay}s`
        }}
      />
    );
  })}

  {/* 🔥 RANDOMIZED FLOAT KEYFRAMES */}
  <style>
    {techIcons.map((_, i) => {
      const x1 = Math.random() * 100 - 50;
      const y1 = Math.random() * 100 - 50;
      const x2 = Math.random() * 100 - 50;
      const y2 = Math.random() * 100 - 50;
      const x3 = Math.random() * 100 - 50;
      const y3 = Math.random() * 100 - 50;

      return `
        @keyframes float${i} {
          0% { transform: translate(0px, 0px); }
          25% { transform: translate(${x1}px, ${y1}px); }
          50% { transform: translate(${x2}px, ${y2}px); }
          75% { transform: translate(${x3}px, ${y3}px); }
          100% { transform: translate(0px, 0px); }
        }
      `;
    }).join("\n")}
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

          <div className="item skills" onClick={() => openSection("skills")}>
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
      {active === "skills" && (
  <Skills goHome={goHome} />
)}
      

    </div>
    
  );
}

export default App;