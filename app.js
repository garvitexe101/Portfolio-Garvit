
const { useState, useEffect } = React;

const navigation = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
];

const education = [
  {
    year: "2024‑2028",
    degree: "B.Tech CSE (AI)",
    institute: "Chitkara University",
    score: "CGPA: 7.55"
  },
  {
    year: "2024",
    degree: "Class XII",
    institute: "CBSE Board",
    score: "84%"
  },
  {
    year: "2022",
    degree: "Class X",
    institute: "CBSE Board",
    score: "89.4%"
  }
];

const certifications = [
  "Microsoft Azure AI Fundamentals (AI‑900) — Microsoft",
  "Microsoft Azure Fundamentals (AZ‑900) — Microsoft",
  "Communication Skills for Engineers — Rice University (Coursera)",
  "Effective Communication: Writing, Design and Presentation — University of Colorado Boulder (Coursera)",
  "AI for Marketing — Emory University (Coursera)"
];

const projects = [
  {
    title: "BidBash — Frontend Auction Website",
    description:
      "Developed a responsive frontend auction interface using HTML, CSS, and JavaScript to simulate an online bidding platform.",
    link: "https://github.com/garvitexe101/bidbsh-auction-webpage"
  },
  {
    title: "House Price Prediction — Machine Learning Project",
    description:
      "Built a machine learning model to predict housing prices using Python and regression techniques based on housing dataset features.",
    link: "https://github.com/garvitexe101/house-price-prediction-ML"
  }
];

const skills = {
  frontend: "HTML · CSS · JavaScript",
  backend: "Flask · Django",
  data: "NumPy · Pandas · Seaborn · Matplotlib · RegEx",
  languages: "Python · C++ · Java"
};

function App() {

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.classList.toggle("light-mode", theme === "light");
  }, [theme]);

  return (

    <div className="shell">

      <header className="topbar">
        <div className="container nav">

          <a className="brand" href="#top">
            <span className="brand-mark">G</span>
            <span>Garvit Narula</span>
          </a>

          <nav className="nav-links">

            {navigation.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}

            <button
              className="theme-toggle"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? "L" : "D"}
            </button>

          </nav>
        </div>
      </header>


      <main id="top">


        <section className="hero">
          <div className="container hero-grid">

            <article className="hero-panel">

              <div className="eyebrow">
                Computer Science Engineering (AI/ML) Undergraduate
              </div>

              <h1>
                Hi, I'm <span>Garvit Narula</span>
              </h1>

              <p className="hero-copy">
                Computer Science Engineering student at Chitkara University
                focused on Artificial Intelligence, Machine Learning, and
                software development. I build projects in web development and
                machine learning while continuously expanding my technical
                skillset.
              </p>

            </article>

          </div>
        </section>


        <section className="section" id="about">
          <div className="container">

            <div className="section-header">

              <div>
                <div className="eyebrow">About</div>

                <h2 className="section-title">About Me</h2>

                <p className="section-copy">
                  I am a Computer Science Engineering student specializing in
                  AI/ML. My interests include machine learning, backend
                  development, and building scalable software systems. I enjoy
                  applying programming concepts to solve real-world problems
                  through projects and research.
                </p>

              </div>
            </div>
          </div>
        </section>


        <section className="section" id="education">

          <div className="container">

            <div className="section-header">

              <div>
                <div className="eyebrow">Education</div>
                <h2 className="section-title">Academic Background</h2>
              </div>

            </div>

            <div className="timeline">

              {education.map((edu) => (

                <article className="timeline-item" key={edu.degree}>

                  <div className="timeline-content">

                    <div className="timeline-meta">
                      <span className="timeline-tag">{edu.year}</span>
                    </div>

                    <h3>{edu.degree}</h3>

                    <p>
                      {edu.institute}
                      <br />
                      {edu.score}
                    </p>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        <section className="section" id="certifications">

          <div className="container">

            <div className="section-header">
              <div>
                <div className="eyebrow">Certifications</div>
                <h2 className="section-title">Professional Courses</h2>
              </div>
            </div>

            <div className="skills-grid">

              {certifications.map((cert) => (
                <div className="skill-pill" key={cert}>
                  {cert}
                </div>
              ))}

            </div>

          </div>

        </section>


        <section className="section" id="projects">

          <div className="container">

            <div className="section-header">

              <div>
                <div className="eyebrow">Projects</div>
                <h2 className="section-title">Featured Work</h2>
              </div>

            </div>


            <div className="projects-grid">

              {projects.map((project) => (

                <article className="project-card" key={project.title}>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <a className="project-link" href={project.link} target="_blank">
                    View Source Code →
                  </a>

                </article>

              ))}

            </div>

          </div>

        </section>


        <section className="section" id="skills">

          <div className="container">

            <div className="section-header">

              <div>
                <div className="eyebrow">Skills</div>
                <h2 className="section-title">Technical Skills</h2>
              </div>

            </div>


            <div className="card">

              <p><strong>Frontend:</strong> {skills.frontend}</p>

              <p><strong>Backend:</strong> {skills.backend}</p>

              <p><strong>Data Analytics:</strong> {skills.data}</p>

              <p><strong>Programming Languages:</strong> {skills.languages}</p>

            </div>

          </div>

        </section>


        <section className="section" id="contact">

          <div className="container contact-grid">

            <article className="contact-panel">

              <div className="eyebrow">Contact</div>

              <h2 className="section-title">Get In Touch</h2>

              <p>
                Rajpura, Punjab<br />
                +91 7082628781<br />
                garvitnarula1@gmail.com
              </p>

              <div className="social-row">

                <a className="social-link" href="https://github.com/garvitexe101">
                  GitHub
                </a>

                <a className="social-link" href="#">
                  LinkedIn
                </a>

              </div>

            </article>

          </div>

        </section>


      </main>


      <footer className="footer">

        <div className="container footer-card">

          <div className="footer-row">

            <div>

              <strong>Garvit Narula</strong>

              <p className="section-copy">
                Computer Science Engineering (AI/ML) Undergraduate
              </p>

            </div>

          </div>

        </div>

      </footer>


    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
