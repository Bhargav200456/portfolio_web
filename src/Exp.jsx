import { useState, useEffect } from "react";

function Exp({ goHome, isMobile }) {

  // ✅ SWIPE LOGIC
  const [touchStartY, setTouchStartY] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;

    if (touchEndY - touchStartY > 80) {
      if (activeCert) {
        setActiveCert(null); // close cert first
      } else {
        goHome(); // then go home
      }
    }
  };

  // ✅ CERTIFICATE STATE
  const [activeCert, setActiveCert] = useState(null);

  // ✅ HINT STATE
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* MAIN EXPERIENCE */}
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
          color: "white",
          zIndex: 150,
          overflowY: "auto",
          padding: "80px 20px",
          cursor: !isMobile ? "pointer" : "default"
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            maxWidth: "900px",
            margin: "0 auto"
          }}
        >

          <h2 style={{ borderBottom: "1px solid gray", paddingBottom: "10px" }}>
            EXPERIENCE
          </h2>

          {/* 🔥 HINT */}
          {showHint && (
            <div
              style={{
                textAlign: "center",
                marginTop: "10px",
                fontSize: "0.85rem",
                opacity: 0.7
              }}
            >
              Tap / Click on experience to view certificate
            </div>
          )}

          {/* GITAM */}
          <div
            style={{ marginTop: "20px", cursor: "pointer" }}
            onClick={() => setActiveCert("/gitaminternship.pdf")}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>Gitam (Deemed-to-be-university)</strong>
              <span>02/2025 – 04/2025</span>
            </div>

            <div style={{ fontStyle: "italic", marginTop: "4px" }}>
              Python developer
            </div>

            <ul style={{ marginTop: "8px", lineHeight: "1.6" }}>
              <li>Developed UUID-based primary keys using Python’s uuid module and integrated them into
PostgreSQL databases using psycopg2 and SQLAlchemy</li>
              <li>Built a data ingestion pipeline to process structured CSV files and programmatically insert cleaned
data into PostgreSQL tables.
</li>
              <li>Implemented UUID identifiers to enable collision-resistant record generation and support scalable
data management in distributed environments.</li>
            </ul>
          </div>

          {/* OCTAL */}
          <div
            style={{ marginTop: "25px", cursor: "pointer" }}
            onClick={() => setActiveCert("/octalintern.pdf")}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>Octal frames technologies private limited</strong>
              <span>05/2024 – 09/2024</span>
            </div>

            <div style={{ fontStyle: "italic", marginTop: "4px" }}>
              Data Science intern
            </div>

            <ul style={{ marginTop: "8px", lineHeight: "1.6" }}>
              <li>Developed a Python script to automatically generate Cypher commands for constructing knowledge
graphs in Neo4j, transforming structured data into visual networks that highlight relationships
between entities.</li>
              <li>•Designed and implemented a Python-based pipeline to extract information from resume data and
convert it into structured knowledge graphs, enabling identification of key entities,relationships,
and career patterns to support data-driven recruitment insights.</li>
            </ul>
          </div>

        </div>
      </div>

      {/* ✅ PDF VIEWER */}
      {activeCert && (
        <div
          onClick={() => setActiveCert(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "black",
            zIndex: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <iframe
            src={activeCert}
            title="certificate"
            style={{
              width: "90vw",
              height: "85vh",
              border: "none",
              borderRadius: "10px",
              background: "white"
            }}
            onClick={(e) => e.stopPropagation()}
          />

          {/* DOWNLOAD BUTTON */}
          <a
            href={activeCert}
            download
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              color: "white",
              fontSize: "0.9rem",
              opacity: 0.8
            }}
          >
            ⬇ Download
          </a>
        </div>
      )}
    </>
  );
}

export default Exp;