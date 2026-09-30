import "./App.css";
import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";

import Projects from "./projects";
import Skills from "./Skills";
import Exp from "./Exp";
import Achievements from "./Achievements";

import { db } from "./firebase";
import {
  doc,
  getDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore";


function App() {

  /* =====================================================
     STATE
  ===================================================== */

  const [active, setActive] = useState("home");

  const [profileOpen, setProfileOpen] =
    useState(false);

  const [likes, setLikes] =
    useState(0);

  const [liked, setLiked] =
    useState(false);

  const [isMobile, setIsMobile] =
    useState(window.innerWidth < 768);


  /* =====================================================
     RESPONSIVE CHECK
  ===================================================== */

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(
        window.innerWidth < 768
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };

  }, []);


  /* =====================================================
     NAVIGATION
  ===================================================== */

  const openSection = (section) => {

    setActive(section);

    setProfileOpen(false);

  };


  const goHome = () => {

    setActive("home");

    setProfileOpen(false);

  };


  /* =====================================================
     USER ID
  ===================================================== */

  const getUserId = () => {

    let userId =
      localStorage.getItem(
        "portfolioUserId"
      );

    if (!userId) {

      userId =
        "user_" +
        Math.random()
          .toString(36)
          .substring(2, 11);

      localStorage.setItem(
        "portfolioUserId",
        userId
      );

    }

    return userId;

  };


  /* =====================================================
     LOAD LIKES
  ===================================================== */

  useEffect(() => {

    const fetchLikes = async () => {

      try {

        const ref =
          doc(db, "likes", "main");

        const snap =
          await getDoc(ref);

        const userId =
          getUserId();

        const THIRTY_DAYS =
          30 *
          24 *
          60 *
          60 *
          1000;

        if (snap.exists()) {

          const data =
            snap.data();

          setLikes(
            data.count || 0
          );

          const lastLikedTime =
            data.likedUsers?.[userId];

          if (
            lastLikedTime &&
            Date.now() -
              lastLikedTime <
              THIRTY_DAYS
          ) {

            setLiked(true);

          }

        } else {

          await setDoc(ref, {
            count: 0,
            likedUsers: {},
          });

        }

      } catch (error) {

        console.error(
          "Error loading likes:",
          error
        );

      }

    };

    fetchLikes();

  }, []);


  /* =====================================================
     HANDLE LIKE
  ===================================================== */

  const handleLike = async () => {

    try {

      const ref =
        doc(db, "likes", "main");

      const userId =
        getUserId();

      const snap =
        await getDoc(ref);

      const data =
        snap.exists()
          ? snap.data()
          : {
              count: 0,
              likedUsers: {},
            };

      const now =
        Date.now();

      const THIRTY_DAYS =
        30 *
        24 *
        60 *
        60 *
        1000;

      const lastLikedTime =
        data.likedUsers?.[userId];

      if (
        lastLikedTime &&
        now - lastLikedTime <
          THIRTY_DAYS
      ) {

        setLiked(true);

        return;

      }

      await updateDoc(ref, {

        count:
          (data.count || 0) + 1,

        [`likedUsers.${userId}`]:
          now,

      });

      setLikes(
        (prev) => prev + 1
      );

      setLiked(true);

    } catch (error) {

      console.error(
        "Error updating like:",
        error
      );

    }

  };


  /* =====================================================
     NAVIGATION ITEMS
  ===================================================== */

  const navItems = [

    {
      label: "Home",
      value: "home",
    },

    {
      label: "About",
      value: "about",
    },

    {
      label: "Skills",
      value: "skills",
    },

    {
      label: "Projects",
      value: "projects",
    },

    {
      label: "Experience",
      value: "experience",
    },

    {
      label: "Achievements",
      value: "achievements",
    },

  ];


  /* =====================================================
     HOME SECTION
  ===================================================== */

  const renderHome = () => {

    return (

      <section className="homeSection">

        {/* =========================================
            LEFT SIDE
        ========================================= */}

        <div className="heroContent">

          <div className="availability">

            <span className="availabilityDot"></span>

            <span>
              Open to opportunities
            </span>

            <span className="availabilitySeparator">
              •
            </span>

            <span>
              AI/ML & Software Development
            </span>

          </div>


          {/* =====================================
              HERO TITLE
          ===================================== */}

          <h1 className="heroTitle">

            <span className="heroWhite">
              Building
            </span>

            <span className="heroWhite">
              intelligent
            </span>

            <span className="heroGreen">
              systems that
            </span>

            <span className="heroGreen">
              matter.
            </span>

          </h1>


          {/* =====================================
              DESCRIPTION
          ===================================== */}

          <p className="heroDescription">

            Computer Science student focused on
            Python, AI, data engineering, and
            full-stack development.

            <br />

            I turn ideas and complex data into
            practical, scalable applications.

          </p>


          {/* =====================================
              BUTTONS
          ===================================== */}

          <div className="heroButtons">

            <button
              className="primaryButton"
              onClick={() =>
                openSection("projects")
              }
            >

              <span>
                View my work
              </span>

              <FaArrowRight />

            </button>


            <button
              className="secondaryButton"
              onClick={() =>
                openSection("about")
              }
            >

              More about me

            </button>

          </div>

        </div>


        {/* =========================================
            RIGHT SIDE CARD
        ========================================= */}

        <div className="heroCard">

          <div className="heroCardGlow"></div>


          <img
            src="/profile.jpeg"
            alt="Bhargav"
            className="heroProfile"
          />


          <div className="heroCardContent">

            <span className="cardLabel">
              CURRENT FOCUS
            </span>


            <h2>

              AI-powered

              <br />

              applications

            </h2>


            <p>
              Data pipelines · RAG · APIs ·
              Knowledge graphs
            </p>


            <div className="techTags">

              <span>
                Python
              </span>

              <span>
                AI/ML
              </span>

              <span>
                PostgreSQL
              </span>

              <span>
                React
              </span>

            </div>

          </div>

        </div>

      </section>

    );

  };


  /* =====================================================
     ABOUT SECTION
  ===================================================== */

  const renderAbout = () => {

    return (

      <section className="fullSection aboutSection">

        <div className="sectionInner">

          <span className="sectionEyebrow">
            01 / ABOUT
          </span>


          <h1 className="sectionTitle">

            A little about

            <span>
              {" "}me.
            </span>

          </h1>


          <div className="aboutGrid">

            {/* ABOUT CARD */}

            <div className="aboutMainCard">

              <div className="aboutProfileRow">

                <img
                  src="/profile.jpeg"
                  alt="Bhargav"
                />


                <div>

                  <h2>
                    Bhargav KN
                  </h2>

                  <p>
                    Computer Science · AI/ML
                  </p>

                </div>

              </div>


              <p className="aboutText">

                Computer Science student with
                a strong foundation in Python,
                data engineering, and AI.

                <br />
                <br />

                I enjoy building scalable systems,
                efficient data pipelines, and
                AI-driven applications that solve
                practical problems.

              </p>

            </div>


            {/* EDUCATION CARD */}

            <div className="educationCard">

              <span className="cardLabel">
                EDUCATION
              </span>


              <div className="educationItem">

                <strong>
                  MCA — AI & Machine Learning
                </strong>

                <span>
                  JAIN (Deemed-to-be University)
                </span>

                <small>
                  2025 — 2027
                </small>

              </div>


              <div className="educationItem">

                <strong>
                  Bachelor of Computer
                  Applications
                </strong>

                <span>
                  GITAM (Deemed-to-be University)
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

    );

  };


  /* =====================================================
     PROFILE MODAL
  ===================================================== */

  const renderProfile = () => {

    if (!profileOpen) {
      return null;
    }


    return (

      <div
        className="profileOverlay"
        onClick={() =>
          setProfileOpen(false)
        }
      >

        <div
          className="profileModal"
          onClick={(event) =>
            event.stopPropagation()
          }
        >

          <button
            className="modalClose"
            onClick={() =>
              setProfileOpen(false)
            }
          >
            ×
          </button>


          <img
            src="/profile.jpeg"
            alt="Bhargav"
            className="profileModalImage"
          />


          <h2>
            Bhargav KN
          </h2>


          <p>
            AI/ML · Python · Data Engineering
          </p>


          <div className="profileSocials">

            <a
              href="https://github.com/Bhargav200456"
              target="_blank"
              rel="noreferrer"
            >

              <FaGithub />

            </a>


            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >

              <FaLinkedin />

            </a>

          </div>


          <span className="profileEmail">
            bhargavkn13@email.com
          </span>

        </div>

      </div>

    );

  };


  /* =====================================================
     SECTION RENDERER
  ===================================================== */

  const renderSection = () => {

    switch (active) {

      case "home":

        return renderHome();


      case "about":

        return renderAbout();


      case "skills":

        return (
          <Skills
            goHome={goHome}
            isMobile={isMobile}
          />
        );


      case "projects":

        return (
          <Projects
            goHome={goHome}
            isMobile={isMobile}
          />
        );


      case "experience":

        return (
          <Exp
            goHome={goHome}
            isMobile={isMobile}
          />
        );


      case "achievements":

        return (
          <Achievements
            goHome={goHome}
            isMobile={isMobile}
          />
        );


      default:

        return renderHome();

    }

  };


  /* =====================================================
     MAIN UI
  ===================================================== */

  return (

    <div className="app">

      {/* ===============================================
          TOP NAVBAR
      =============================================== */}

      <header className="topbar">


        {/* BRAND */}

        <div
          className="brand"
          onClick={goHome}
        >

          <img
            src="/profile.jpeg"
            alt="Bhargav"
          />

          <span>
            Bhargav.
          </span>

        </div>


        {/* =========================================
            DESKTOP NAVIGATION
        ========================================= */}

        {!isMobile && (

          <nav className="nav">

            {navItems.map((item) => (

              <button
                key={item.value}
                className={
                  active === item.value
                    ? "navItem active"
                    : "navItem"
                }
                onClick={() =>
                  openSection(item.value)
                }
              >

                {item.label}

              </button>

            ))}

          </nav>

        )}


        {/* =========================================
            NAV ACTIONS
        ========================================= */}

        <div className="navActions">


          {/* LIKE */}

          <button
            className={
              liked
                ? "likeButton liked"
                : "likeButton"
            }
            onClick={handleLike}
          >

            <FaHeart />

            <span>
              {likes}
            </span>

          </button>


          {/* CONNECT */}

          <button
            className="connectButton"
            onClick={() =>
              setProfileOpen(true)
            }
          >

            Connect

          </button>

        </div>

      </header>


      {/* ===============================================
          PAGE CONTENT
      =============================================== */}

      <main className="pageContent">

        {renderSection()}

      </main>


      {/* ===============================================
          CONNECT MODAL
      =============================================== */}

      {renderProfile()}


      {/* ===============================================
          MOBILE NAV
      =============================================== */}

      {isMobile && (

        <nav className="mobileNav">

          {navItems.map((item) => (

            <button
              key={item.value}
              className={
                active === item.value
                  ? "mobileNavItem active"
                  : "mobileNavItem"
              }
              onClick={() =>
                openSection(item.value)
              }
            >

              {item.label}

            </button>

          ))}

        </nav>

      )}

    </div>

  );

}


export default App;