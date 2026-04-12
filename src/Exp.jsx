function Exp({ goHome }) {
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
        color: "white",
        zIndex: 150,
        overflowY: "auto",
        padding: "80px 20px", // 🔥 slightly better padding
        cursor: "pointer" // 🔥 shows user can click outside
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "900px", // 🔥 keeps content centered & clean
          margin: "0 auto",
          cursor: "default"
        }}
      >

        <h2 style={{ borderBottom: "1px solid gray", paddingBottom: "10px" }}>
          EXPERIENCE
        </h2>

        {/* GITAM */}
        <div style={{ marginTop: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Gitam (Deemed-to-be-university)</strong>
            <span>02/2025 – 04/2025</span>
          </div>

          <div style={{ fontStyle: "italic", marginTop: "4px" }}>
            Python developer
          </div>

          <ul style={{ marginTop: "8px", lineHeight: "1.6" }}>
            <li>
              Developed UUID-based primary keys using Python's uuid module and integrated them into PostgreSQL databases using psycopg2 and SQLAlchemy
            </li>
            <li>
              Built a data ingestion pipeline to process structured CSV files and programmatically insert cleaned data into PostgreSQL tables.
            </li>
            <li>
              Implemented UUID identifiers to enable collision-resistant record generation and support scalable data management in distributed environments.
            </li>
          </ul>
        </div>

        {/* OCTAL */}
        <div style={{ marginTop: "25px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Octal frames technologies private limited</strong>
            <span>05/2024 – 09/2024</span>
          </div>

          <div style={{ fontStyle: "italic", marginTop: "4px" }}>
            Data Science intern
          </div>

          <ul style={{ marginTop: "8px", lineHeight: "1.6" }}>
            <li>
              Developed a Python script to automatically generate Cypher commands for constructing knowledge graphs in Neo4j, transforming structured data into visual networks that highlight relationships between entities.
            </li>
            <li>
              Designed and implemented a Python-based pipeline to extract information from resume data and convert it into structured knowledge graphs, enabling identification of key entities, relationships, and career patterns to support data-driven recruitment insights.
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Exp;