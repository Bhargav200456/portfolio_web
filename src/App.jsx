import "./App.css";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {

const [aboutOpen, setAboutOpen] = useState(false);
const [active, setActive] = useState(null);
const [selectedSkill, setSelectedSkill] = useState(null);
const [selectedProject, setSelectedProject] = useState(null);

const skills = ["React", "JavaScript", "Python", "SQL"];

const projects = [
{
name: "Portfolio Website",
skills: ["React", "JavaScript"]
},
{
name: "Task Manager",
skills: ["React", "SQL"]
}
];

const experience = ["Internships", "Personal Projects"];
const achievements = ["Hackathon Participation", "Certifications"];

const getProjectsForSkill = (skill) => {
return projects.filter(p => p.skills.includes(skill));
};

const getSkillsForProject = (projectName) => {
const proj = projects.find(p => p.name === projectName);
return proj ? proj.skills : [];
};

const resetViewer = () => {
setSelectedSkill(null);
setSelectedProject(null);
};

return ( <div className="app">

```
  {/* TOP BAR */}

  <header className="top">
    <h1 className="name">Bhargav KN</h1>

    <div className="about" onClick={() => setAboutOpen(true)}>
      About
    </div>
  </header>

  {/* MAIN MENU */}

  <main className="center">

    <div className="menu">

      <div className="item skills" onClick={() => {setActive("skills"); resetViewer();}}>
        Skills
      </div>

      <div className="item projects" onClick={() => {setActive("projects"); resetViewer();}}>
        Projects
      </div>

      <div className="item experience" onClick={() => setActive("experience")}>
        Experience
      </div>

      <div className="item achievements" onClick={() => setActive("achievements")}>
        Achievements
      </div>

    </div>

  </main>

  {/* FOOTER */}

  <footer className="footer">

    <div className="email">
      bhargavkn13@email.com
    </div>

    <div className="socials">

      <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>

      <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>

    </div>

  </footer>

  {/* ABOUT PANEL */}

  {aboutOpen && (

    <div className="aboutPanel" onClick={() => setAboutOpen(false)}>

      <div className="aboutContent" onClick={(e)=>e.stopPropagation()}>

        <h2>About Me</h2>

        <p>
          MCA student passionate about building modern
          web applications using React and JavaScript.
        </p>

        <h3>Education</h3>

        <p>Master of Computer Applications</p>

      </div>

    </div>

  )}

  {/* VIEWER */}

  {active && (

    <div className="viewer" onClick={()=>{setActive(null); resetViewer();}}>

      <div className="viewerContent" onClick={(e)=>e.stopPropagation()}>

        {/* SKILLS */}

        {active === "skills" && !selectedSkill && (
          <>
            <h2>Skills</h2>

            <div className="list">
              {skills.map((skill,i)=>(
                <div
                  key={i}
                  className="listItem"
                  onClick={()=>setSelectedSkill(skill)}
                >
                  {skill}
                </div>
              ))}
            </div>
          </>
        )}

        {/* PROJECTS FROM SKILL */}

        {selectedSkill && !selectedProject && (
          <>
            <h2>{selectedSkill}</h2>

            <p className="subtitle">Projects using this skill</p>

            <div className="list">
              {getProjectsForSkill(selectedSkill).map((p,i)=>(
                <div
                  key={i}
                  className="listItem"
                  onClick={()=>setSelectedProject(p.name)}
                >
                  {p.name}
                </div>
              ))}
            </div>

            <button className="back" onClick={()=>setSelectedSkill(null)}>
              ← Back
            </button>
          </>
        )}

        {/* PROJECT DETAILS */}

        {selectedProject && (
          <>
            <h2>{selectedProject}</h2>

            <p className="subtitle">Skills used</p>

            <div className="list">
              {getSkillsForProject(selectedProject).map((skill,i)=>(
                <div
                  key={i}
                  className="listItem"
                  onClick={()=>setSelectedSkill(skill)}
                >
                  {skill}
                </div>
              ))}
            </div>

            <button className="back" onClick={()=>setSelectedProject(null)}>
              ← Back
            </button>
          </>
        )}

        {/* PROJECT BROWSER */}

        {active === "projects" && !selectedProject && (
          <>
            <h2>Projects</h2>

            <div className="list">
              {projects.map((proj,i)=>(
                <div
                  key={i}
                  className="listItem"
                  onClick={()=>setSelectedProject(proj.name)}
                >
                  {proj.name}
                </div>
              ))}
            </div>
          </>
        )}

        {/* EXPERIENCE */}

        {active === "experience" && (
          <>
            <h2>Experience</h2>

            {experience.map((item,i)=>(
              <p key={i}>{item}</p>
            ))}
          </>
        )}

        {/* ACHIEVEMENTS */}

        {active === "achievements" && (
          <>
            <h2>Achievements</h2>

            {achievements.map((item,i)=>(
              <p key={i}>{item}</p>
            ))}
          </>
        )}

      </div>

    </div>

  )}

</div>
);

}

export default App;
