import { useState, useEffect } from "react";

const skills = [
  { name: "Python", icon: "devicon-python-plain" },
  { name: "React", icon: "devicon-react-original" },
  { name: "Node.js", icon: "devicon-nodejs-plain" },
  { name: "Git", icon: "devicon-git-plain" },
  { name: "MySQL", icon: "devicon-mysql-plain" },
  { name: "Java", icon: "devicon-java-plain" },
  { name: "HTML", icon: "devicon-html5-plain" },
  { name: "CSS", icon: "devicon-css3-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
  { name: "Linux", icon: "devicon-linux-plain" },
  { name: "Docker", icon: "devicon-docker-plain" }
];

function Skills({ goHome }) {
  const [active, setActive] = useState(null);

  // ✅ MOBILE DETECTION
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
        zIndex: 150
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative"
        }}
      >

        {/* ✅ TITLE ADDED */}
        <h2
          style={{
            position: "absolute",
            top: "20px",
            width: "100%",
            textAlign: "center"
          }}
        >
          Skills
        </h2>

        {skills.map((skill, i) => {
          const angle = (i / skills.length) * 2 * Math.PI;

          // ✅ MOBILE RADIUS FIX
          const radius = isMobile ? 120 : 220;

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={i}
              onMouseEnter={() => !isMobile && setActive(i)}
              onMouseLeave={() => !isMobile && setActive(null)}

              // ✅ TAP SUPPORT FOR MOBILE
              onClick={(e) => {
                e.stopPropagation();
                if (isMobile) {
                  setActive(i === active ? null : i);
                } else {
                  goHome();
                }
              }}

              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `translate(${x}px, ${y}px) scale(${
                  active === i ? 1.4 : 1
                })`,
                transition: "all 0.3s ease",
                textAlign: "center",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <i
                className={skill.icon}
                style={{
                  fontSize: isMobile ? "28px" : "40px" // ✅ smaller on mobile
                }}
              />

              <div
                style={{
                  marginTop: "6px",
                  fontSize: isMobile ? "0.75rem" : "0.85rem",
                  opacity: active === i ? 1 : 0.7,
                  transition: "0.3s"
                }}
              >
                {skill.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;