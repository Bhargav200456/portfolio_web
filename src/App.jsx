import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Name / Logo */}
      <div className="logo">
        Bhargav KN
      </div>

      <section className="hero">

        <div className="content">
          <p className="objective">
            Motivated MCA student passionate about building modern
            web applications using React and JavaScript.
          </p>
        </div>

        <footer className="footer">

          <div className="email">
            bhargavkn13@email.com
          </div>

          <div className="socials">
            <a href="https://github.com/" target="_blank">GitHub</a>
            <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
          </div>

        </footer>

      </section>

    </div>
  );
}

export default App;