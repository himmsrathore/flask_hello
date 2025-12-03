import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGraduationCap, faCode, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faReact, faPython, faJs, faNode, faDocker, faGit } from '@fortawesome/free-brands-svg-icons'
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
      description: 'Full-stack e-commerce application with payment integration',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/himmsrathore',
      demo: 'https://demo.example.com'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      technologies: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com/himmsrathore',
      demo: 'https://demo.example.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather tracking application with interactive maps',
      technologies: ['JavaScript', 'OpenWeather API', 'Chart.js'],
      github: 'https://github.com/himmsrathore',
      demo: 'https://demo.example.com'
    }
  ]

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="name">Himmat Singh Rathore</h1>
          <p className="title">Full Stack Developer</p>
          <p className="tagline">Building elegant solutions to complex problems</p>
          <div className="social-links">
            <a href="https://github.com/himmsrathore" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/in/himmsrathore" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto:himmat@example.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2><FontAwesomeIcon icon={faCode} /> About Me</h2>
          <p>
            Passionate full-stack developer with expertise in building scalable web applications.
            I love turning ideas into reality through clean, efficient code. With a strong foundation
            in both frontend and backend technologies, I create seamless user experiences backed by
            robust server-side logic.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <div className="container">
          <h2><FontAwesomeIcon icon={faCode} /> Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <FontAwesomeIcon icon={skill.icon} style={{ color: skill.color }} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education">
        <div className="container">
          <h2><FontAwesomeIcon icon={faGraduationCap} /> Education</h2>
          <div className="education-card">
            <h3>Bachelor of Technology in Computer Science</h3>
            <p className="institution">University of Technology</p>
            <p className="year">2019 - 2023</p>
            <p className="description">
              Specialized in software engineering and web development. Graduated with honors.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <div className="container">
          <h2><FontAwesomeIcon icon={faBriefcase} /> Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>I'm always open to discussing new projects and opportunities.</p>
          <a href="mailto:himmat@example.com" className="contact-button">
            <FontAwesomeIcon icon={faEnvelope} /> Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Himmat Singh Rathore. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
