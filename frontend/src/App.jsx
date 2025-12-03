import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGraduationCap, faCode, faBriefcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faReact, faPython, faJs, faNode, faDocker, faGit } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const skills = [
    { name: 'Python', icon: faPython, color: '#3776AB' },
    { name: 'JavaScript', icon: faJs, color: '#F7DF1E' },
    { name: 'React', icon: faReact, color: '#61DAFB' },
    { name: 'Node.js', icon: faNode, color: '#339933' },
    { name: 'Docker', icon: faDocker, color: '#2496ED' },
    { name: 'Git', icon: faGit, color: '#F05032' },
  ]

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with payment integration and real-time inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/himmsrathore',
      demo: 'https://demo.example.com'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com/himmsrathore',
      demo: 'https://demo.example.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather tracking application with interactive maps and detailed forecasts.',
      technologies: ['JavaScript', 'OpenWeather API', 'Chart.js'],
      github: 'https://github.com/himmsrathore',
      demo: 'https://demo.example.com'
    }
  ]

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="display-3 fw-bold mb-3">Himmat Singh Rathore</h1>
              <p className="lead text-primary fw-semibold mb-3">Full Stack Developer</p>
              <p className="text-muted mb-4">Building elegant solutions to complex problems</p>
              <div className="social-links">
                <a href="https://github.com/himmsrathore" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-lg">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://linkedin.com/in/himmsrathore" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-lg">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="mailto:himmat@example.com" className="btn btn-outline-danger btn-lg">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <div className="section-icon mb-3">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <h2 className="section-title">About Me</h2>
              <p className="section-subtitle text-muted">Get to know more about my background</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <p className="card-text text-muted mb-0">
                    Passionate full-stack developer with expertise in building scalable web applications.
                    I love turning ideas into reality through clean, efficient code. With a strong foundation
                    in both frontend and backend technologies, I create seamless user experiences backed by
                    robust server-side logic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <div className="section-icon mb-3">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <h2 className="section-title">Skills & Technologies</h2>
              <p className="section-subtitle text-muted">Technologies I work with</p>
            </div>
          </div>
          <div className="row g-4">
            {skills.map((skill, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2">
                <div className="card skill-card h-100 text-center shadow-sm border-0">
                  <div className="card-body">
                    <FontAwesomeIcon icon={skill.icon} style={{ color: skill.color }} className="skill-icon mb-3" />
                    <h6 className="card-title mb-0">{skill.name}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <div className="section-icon mb-3">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <h2 className="section-title">Education</h2>
              <p className="section-subtitle text-muted">My academic background</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-2">Bachelor of Technology in Computer Science</h5>
                  <h6 className="text-primary mb-2">University of Technology</h6>
                  <p className="text-muted small mb-3">2019 - 2023</p>
                  <p className="card-text text-muted mb-0">
                    Specialized in software engineering and web development. Graduated with honors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <div className="section-icon mb-3">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <h2 className="section-title">Projects</h2>
              <p className="section-subtitle text-muted">Some of my recent work</p>
            </div>
          </div>
          <div className="row g-4">
            {projects.map((project, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card project-card h-100 shadow-sm border-0">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold mb-3">{project.title}</h5>
                    <p className="card-text text-muted flex-grow-1">{project.description}</p>
                    <div className="mb-3">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="badge bg-primary bg-opacity-10 text-primary me-2 mb-2">{tech}</span>
                      ))}
                    </div>
                    <div className="d-flex gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
                        <FontAwesomeIcon icon={faGithub} className="me-1" /> Code
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-icon mb-3">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-subtitle text-muted mb-4">
                I'm always open to discussing new projects and opportunities.
              </p>
              <a href="mailto:himmat@example.com" className="btn btn-primary btn-lg">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p className="mb-0">&copy; 2025 Himmat Singh Rathore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
