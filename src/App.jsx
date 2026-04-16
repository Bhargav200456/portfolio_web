import "./App.css";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Projects from "./projects";
import { db } from "./firebase";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import Skills from "./Skills";
import Exp from "./Exp";
import Achievements from "./Achievements";

function App() {

  const [active, setActive] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  // ✅ MOBILE STATE
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ SWIPE LOGIC (ADDED)
  const [touchStartY, setTouchStartY] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;

    if (touchEndY - touchStartY > 80) {
      goHome();
    }
  };

  // ✅ FIREBASE LIKES
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  // 🔹 UNIQUE USER ID
  function getUserId() {
    let userId = localStorage.getItem("userId");

    if (!userId) {
      userId = "user_" + Math.random().toString(36).substr(2, 9);
      localStorage.setItem("userId", userId);
    }

    return userId;
  }

  useEffect(() => {
    const fetchLikes = async () => {
      const ref = doc(db, "likes", "main");
      const snap = await getDoc(ref);

      const userId = getUserId();

      if (snap.exists()) {
        const data = snap.data();

        setLikes(data.count || 0);

        if (data.likedUsers && data.likedUsers[userId]) {
          setLiked(true);
        }
      } else {
        await setDoc(ref, { count: 0, likedUsers: {} });
      }
    };

    fetchLikes();
  }, []);

  const handleLike = async () => {
    if (liked) return;

    const ref = doc(db, "likes", "main");
    const userId = getUserId();

    await updateDoc(ref, {
      count: likes + 1,
      [`likedUsers.${userId}`]: true
    });

    setLikes((prev) => prev + 1);
    setLiked(true);
  };

  const techIcons = [
    "devicon-python-plain colored",
    "devicon-react-original colored",
    "devicon-nodejs-plain colored",
    "devicon-git-plain colored",
    "devicon-mysql-plain colored",
    "devicon-java-plain colored",
    "devicon-html5-plain colored",
    "devicon-css3-plain colored",
    "devicon-javascript-plain colored",
    "devicon-postgresql-plain colored",
    "devicon-linux-plain",
    "devicon-docker-plain colored",
    "devicon-pytorch-plain colored",
    "devicon-keras-plain colored",
    "devicon-matplotlib-plain colored",
    "devicon-numpy-plain colored",
    "devicon-pandas-plain colored",
    "devicon-jupyter-plain colored",
    "devicon-ai-plain",
    "devicon-tensorflow-plain colored",
    "devicon-django-plain colored",
    "devicon-scipy-plain colored",
    "devicon-archlinux-plain colored",
    "devicon-pinecone-plain colored",
    "devicon-openai-plain"
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

      {/* BACKGROUND ICONS */}
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
                opacity: 0.5,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float${i} ${duration}s ease-in-out infinite`,
                animationDelay: `${delay}s`
              }}
            />
          );
        })}

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

        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            flexDirection: isMobile ? "column" : "row"
          }}
        >
          <div className="about" onClick={() => openSection("about")}>
            About
          </div>

          <div
            onClick={handleLike}
            style={{
              cursor: "pointer",
              fontSize: "1rem",
              opacity: 0.8
            }}
          >
            {liked ? "❤️ Liked" : "🤍 Like"} {likes}
          </div>
        </div>
      </header>

      {/* MAIN MENU */}
      <main className="center">
        <div
          className="menu"
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "20px" : undefined,
            alignItems: "center"
          }}
        >
          <div className="item skills" onClick={() => openSection("skills")}>
            Skills
          </div>

          <div className="item projects" onClick={() => openSection("projects")}>
            Projects
          </div>

          <div className="item experience" onClick={() => openSection("experience")}>
            Experience
          </div>

          <div className="item achievements" onClick={() => openSection("achievements")}>
            Achievements
          </div>
        </div>
      </main>

      {/* PROFILE */}
      {profileOpen && (
        <div
          className="profileViewer"
          onClick={!isMobile ? goHome : undefined}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
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
        <div
          className="viewer"
          onClick={!isMobile ? goHome : undefined}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="viewerContent" onClick={(e) => e.stopPropagation()}>

            <div className="aboutProfile">
              <img src="/profile.jpeg" className="aboutProfileImg" />
              <h2
                className="aboutName"
                onClick={() => setProfileOpen(true)}
                style={{ cursor: "pointer" }}
              >
                Bhargav KN
              </h2>
            </div>

            <h2>About</h2>

            <p className="subtitle">
              Computer Science student with a strong foundation in Python, data engineering, and AI, focused on building scalable systems, developing efficient data pipelines, and transforming complex data into actionable insights.
            </p>
          <li></li>
          </div>
        </div>
      )}

      {/* OTHER SECTIONS */}
      {active === "projects" && <Projects goHome={goHome} isMobile={isMobile} />}
      {active === "skills" && <Skills goHome={goHome} isMobile={isMobile} />}
      {active === "experience" && <Exp goHome={goHome} isMobile={isMobile} />}
      {active === "achievements" && <Achievements goHome={goHome} isMobile={isMobile} />}

    </div>
  );
}

export default App;