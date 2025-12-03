import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGraduationCap, faCode, faBriefcase, faUser, faMoon, faSun, faLanguage } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faReact, faPython, faJs, faNode, faDocker, faGit } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')
  const [language, setLanguage] = useState('en')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en')
  }

  const content = {
    en: {
      name: 'Himmat Singh Rathore',
      title: 'Full Stack Developer',
      tagline: 'Building elegant solutions to complex problems',
      about: {
        title: 'About Me',
        subtitle: 'Get to know more about my background',
        text: 'Passionate full-stack developer with expertise in building scalable web applications. I love turning ideas into reality through clean, efficient code. With a strong foundation in both frontend and backend technologies, I create seamless user experiences backed by robust server-side logic.'
      },
      skills: {
        title: 'Skills & Technologies',
        subtitle: 'Technologies I work with'
      },
      education: {
        title: 'Education',
        subtitle: 'My academic background',
        degree: 'Bachelor of Technology in Computer Science',
        institution: 'University of Technology',
        year: '2019 - 2023',
        description: 'Specialized in software engineering and web development. Graduated with honors.'
      },
      projects: {
        title: 'Projects',
        subtitle: 'Some of my recent work'
      },
      contact: {
        title: 'Get In Touch',
        subtitle: "I'm always open to discussing new projects and opportunities.",
        button: 'Contact Me'
      }
    },
    hi: {
      name: 'हिम्मत सिंह राठौर',
      title: 'फुल स्टैक डेवलपर',
      tagline: 'जटिल समस्याओं के लिए सुरुचिपूर्ण समाधान बनाना',
      about: {
        title: 'मेरे बारे में',
        subtitle: 'मेरी पृष्ठभूमि के बारे में अधिक जानें',
        text: 'स्केलेबल वेब एप्लिकेशन बनाने में विशेषज्ञता वाला एक भावुक फुल-स्टैक डेवलपर। मुझे स्वच्छ, कुशल कोड के माध्यम से विचारों को वास्तविकता में बदलना पसंद है।'
      },
      skills: {
        title: 'कौशल और प्रौद्योगिकियां',
        subtitle: 'जिन तकनीकों के साथ मैं काम करता हूं'
      },
      education: {
        title: 'शिक्षा',
        subtitle: 'मेरी शैक्षणिक पृष्ठभूमि',
        degree: 'कंप्यूटर विज्ञान में प्रौद्योगिकी स्नातक',
        institution: 'प्रौद्योगिकी विश्वविद्यालय',
        year: '2019 - 2023',
        description: 'सॉफ्टवेयर इंजीनियरिंग और वेब विकास में विशेषज्ञता। सम्मान के साथ स्नातक।'
      },
      projects: {
        title: 'परियोजनाएं',
        subtitle: 'मेरे हाल के कुछ काम'
      },
      contact: {
        title: 'संपर्क करें',
        subtitle: 'मैं हमेशा नई परियोजनाओं और अवसरों पर चर्चा के लिए तैयार हूं।',
        button: 'मुझसे संपर्क करें'
      }
    }
  }

  const t = content[language]

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
    <div className={`portfolio ${theme}`} data-theme={theme}>
      {/* Top Navigation Bar with Toggles */}
      <nav className="navbar navbar-expand-lg sticky-top border-bottom">
        <div className="container-fluid">
          <span className="navbar-brand fw-bold">{t.name}</span>
          <div className="d-flex gap-2">
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={toggleTheme}
              title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            >
              <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
            </button>
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={toggleLanguage}
              title={language === 'en' ? 'हिंदी' : 'English'}
            >
              <FontAwesomeIcon icon={faLanguage} className="me-1" />
              {language === 'en' ? 'हिं' : 'EN'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="display-3 fw-bold mb-3">{t.name}</h1>
              <p className="lead text-primary fw-semibold mb-3">{t.title}</p>
              <p className="text-muted mb-4">{t.tagline}</p>
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
      <section className="section-padding">
        <div className="container-fluid px-4">
          <div className="row justify-content-center mb-4">
            <div className="col-12 text-center">
              <div className="section-icon mb-3">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <h2 className="section-title">{t.about.title}</h2>
              <p className="section-subtitle text-muted">{t.about.subtitle}</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <p className="card-text text-muted mb-0">{t.about.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <div className="container-fluid px-4">
          <div className="row justify-content-center mb-4">
            <div className="col-12 text-center">
              <div className="section-icon mb-3">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <h2 className="section-title">{t.skills.title}</h2>
              <p className="section-subtitle text-muted">{t.skills.subtitle}</p>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
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
      <section className="section-padding">
        <div className="container-fluid px-4">
          <div className="row justify-content-center mb-4">
            <div className="col-12 text-center">
              <div className="section-icon mb-3">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <h2 className="section-title">{t.education.title}</h2>
              <p className="section-subtitle text-muted">{t.education.subtitle}</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-2">{t.education.degree}</h5>
                  <h6 className="text-primary mb-2">{t.education.institution}</h6>
                  <p className="text-muted small mb-3">{t.education.year}</p>
                  <p className="card-text text-muted mb-0">{t.education.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding">
        <div className="container-fluid px-4">
          <div className="row justify-content-center mb-4">
            <div className="col-12 text-center">
              <div className="section-icon mb-3">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <h2 className="section-title">{t.projects.title}</h2>
              <p className="section-subtitle text-muted">{t.projects.subtitle}</p>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
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
      <section className="section-padding">
        <div className="container-fluid px-4">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-icon mb-3">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <h2 className="section-title">{t.contact.title}</h2>
              <p className="section-subtitle text-muted mb-4">{t.contact.subtitle}</p>
              <a href="mailto:himmat@example.com" className="btn btn-primary btn-lg">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" /> {t.contact.button}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section text-center py-4">
        <div className="container">
          <p className="mb-0">&copy; 2025 {t.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
