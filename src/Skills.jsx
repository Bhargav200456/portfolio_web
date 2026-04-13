import { useState } from "react";

const skills = [
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "HTML", icon: "devicon-html5-plain colored" },
  { name: "CSS", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "Linux", icon: "devicon-linux-plain" },
  { name: "Docker", icon: "devicon-docker-plain colored" }
];

function Skills({ goHome, isMobile }) {
  const [active, setActive] = useState(null);

  // ✅ SWIPE LOGIC
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

  return (
    <div
      onClick={!isMobile ? goHome : undefined}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
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
      {/* ✅ IMPORTANT FIX HERE */}
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative"
        }}
        onClick={(e) => {
          if (isMobile) e.stopPropagation(); // ONLY block on mobile
        }}
      >

        {/* TITLE */}
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
          const radius = isMobile ? 120 : 220;

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={i}
              onMouseEnter={() => !isMobile && setActive(i)}
              onMouseLeave={() => !isMobile && setActive(null)}
              onClick={(e) => {
                e.stopPropagation();

                if (isMobile) {
                  setActive(i === active ? null : i);
                } else {
                  goHome(); // desktop click
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
                  fontSize: isMobile ? "28px" : "40px"
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