import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGraduationCap, faCode, faBriefcase, faUser, faMoon, faSun, faLanguage, faTerminal, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faReact, faPython, faJs, faNode, faDocker, faGit } from '@fortawesome/free-brands-svg-icons'
import './App.css'

const Quote = ({ text }) => (
  <div className="quote-container">
    <div className="quote-text">
      {text}
    </div>
  </div>
)

function App() {
  const [theme, setTheme] = useState('dark') // Default to dark for coder aesthetic
  const [language, setLanguage] = useState('en')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en')
  }

  const quotes = [
    "There are 10 types of people in the world: those who understand binary, and those who don't.",
    "I don't always test my code, but when I do, I do it in production.",
    "Debuggers don't remove bugs. They only show them in slow motion.",
    "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science."
  ]

  const content = {
    en: {
      name: 'HIMMAT SINGH RATHORE',
      handle: '@WhiteHawk',
      title: 'Executive – CRIS | Python Developer | Power BI Analyst | Full Stack & Flutter Developer',
      tagline: 'Merging IT expertise with operational understanding to build high-impact digital systems',
      location: 'Mumbai / Delhi',
      phone: '+91-7737264778',
      email: 'himmsrathore@gmail.com',
      portfolio: 'himmsrathore.com',
      brand: 'WhiteHawk',
      about: {
        title: 'About Me',
        subtitle: '10+ years experience',
        text: 'A result-oriented technology professional with 10+ years of combined experience in Data Analytics & Visualization (Python, Power BI, Qlik), Full-Stack Development (Laravel, MySQL, PHP), Mobile App Development (Flutter), and Railway Operational Systems (CRIS & MMCT Division). I merge IT expertise with deep operational understanding to build high-impact digital systems for analytics, automation & workforce efficiency.'
      },
      skills: {
        title: 'Tech Stack',
        subtitle: 'Tools & Technologies'
      },
      experience: {
        title: 'Experience',
        subtitle: 'Professional Timeline',
        jobs: [
          {
            title: 'Executive – CRIS',
            period: '2023–Present',
            description: 'Python automation, Power BI dashboards, data engineering, building web & mobile solutions for Indian Railways.'
          },
          {
            title: 'Divisional Traffic Inspector – Indian Railways',
            period: '2017–2023',
            description: 'Created digital platforms for Unusual Reporting, Safety Compliance, Caution Orders, Staff Training, and Inspection Automation.'
          },
          {
            title: 'Sr. Software Engineer – CoreTechies',
            period: '2013–2017',
            description: 'PHP/Laravel development, UI/UX design, multi-project management.'
          }
        ]
      },
      education: {
        title: 'Education',
        subtitle: 'Academic Background',
        degree: 'B.Tech – Computer Science Engineering',
        institution: 'Rajasthan Technical University, Kota',
        year: '2009 - 2013',
        description: 'Final-Year Project: Cryptography using Public/Private Key'
      },
      projects: {
        title: 'Projects',
        subtitle: 'Analytics • Web • Mobile',
        categories: ['Analytics & Dashboards', 'Web Projects', 'Mobile Apps']
      },
      highlights: {
        title: 'Highlights',
        items: [
          'Created 15+ dashboards used by Divisional & HQ Railway teams',
          'Built 10+ web systems (Laravel/Python) for operations, safety & analytics',
          'Developed multiple mobile apps using Flutter',
          'Led digital transformation initiatives across MMCT Division',
          'Conducted staff digital training (500+ daily participants during lockdown)'
        ]
      },
      contact: {
        title: 'Contact',
        subtitle: "Let's build something amazing together.",
        button: 'Get In Touch'
      }
    },
    hi: {
      name: 'हिम्मत सिंह राठौर',
      handle: '@WhiteHawk',
      title: 'कार्यकारी – CRIS | पायथन डेवलपर | पावर बीआई विश्लेषक | फुल स्टैक और फ्लटर डेवलपर',
      tagline: 'उच्च प्रभाव वाली डिजिटल प्रणालियों के निर्माण के लिए आईटी विशेषज्ञता को परिचालन समझ के साथ मिलाना',
      location: 'मुंबई / दिल्ली',
      phone: '+91-7737264778',
      email: 'himmsrathore@gmail.com',
      portfolio: 'himmsrathore.com',
      brand: 'WhiteHawk',
      about: {
        title: 'मेरे बारे में',
        subtitle: '10+ वर्षों का अनुभव',
        text: 'डेटा एनालिटिक्स और विज़ुअलाइज़ेशन (पायथन, पावर बीआई, क्लिक), फुल-स्टैक डेवलपमेंट (लारावेल, MySQL, PHP), मोबाइल ऐप डेवलपमेंट (फ्लटर), और रेलवे परिचालन प्रणाली (CRIS और MMCT डिवीजन) में 10+ वर्षों के संयुक्त अनुभव के साथ एक परिणाम-उन्मुख प्रौद्योगिकी पेशेवर। मैं एनालिटिक्स, स्वचालन और कार्यबल दक्षता के लिए उच्च प्रभाव वाली डिजिटल प्रणालियों के निर्माण हेतु आईटी विशेषज्ञता को गहरी परिचालन समझ के साथ मिलाता हूं।'
      },
      skills: {
        title: 'तकनीकी स्टैक',
        subtitle: 'उपकरण और प्रौद्योगिकियां'
      },
      experience: {
        title: 'अनुभव',
        subtitle: 'व्यावसायिक समयरेखा',
        jobs: [
          {
            title: 'कार्यकारी – CRIS',
            period: '2023–वर्तमान',
            description: 'पायथन स्वचालन, पावर बीआई डैशबोर्ड, डेटा इंजीनियरिंग, भारतीय रेलवे के लिए वेब और मोबाइल समाधान निर्माण।'
          },
          {
            title: 'डिवीजनल ट्रैफिक इंस्पेक्टर – भारतीय रेलवे',
            period: '2017–2023',
            description: 'असामान्य रिपोर्टिंग, सुरक्षा अनुपालन, सावधानी आदेश, कर्मचारी प्रशिक्षण और निरीक्षण स्वचालन के लिए डिजिटल प्लेटफॉर्म बनाए।'
          },
          {
            title: 'वरिष्ठ सॉफ्टवेयर इंजीनियर – CoreTechies',
            period: '2013–2017',
            description: 'PHP/Laravel विकास, UI/UX डिज़ाइन, बहु-परियोजना प्रबंधन।'
          }
        ]
      },
      education: {
        title: 'शिक्षा',
        subtitle: 'शैक्षणिक पृष्ठभूमि',
        degree: 'बी.टेक – कंप्यूटर विज्ञान इंजीनियरिंग',
        institution: 'राजस्थान तकनीकी विश्वविद्यालय, कोटा',
        year: '2009 - 2013',
        description: 'अंतिम वर्ष परियोजना: सार्वजनिक/निजी कुंजी का उपयोग करते हुए क्रिप्टोग्राफी'
      },
      projects: {
        title: 'परियोजनाएं',
        subtitle: 'एनालिटिक्स • वेब • मोबाइल',
        categories: ['एनालिटिक्स और डैशबोर्ड', 'वेब परियोजनाएं', 'मोबाइल ऐप्स']
      },
      highlights: {
        title: 'मुख्य विशेषताएं',
        items: [
          'डिवीजनल और मुख्यालय रेलवे टीमों द्वारा उपयोग किए जाने वाले 15+ डैशबोर्ड बनाए',
          'संचालन, सुरक्षा और एनालिटिक्स के लिए 10+ वेब सिस्टम (Laravel/Python) बनाए',
          'फ्लटर का उपयोग करके कई मोबाइल ऐप विकसित किए',
          'MMCT डिवीजन में डिजिटल परिवर्तन पहल का नेतृत्व किया',
          'कर्मचारी डिजिटल प्रशिक्षण आयोजित किया (लॉकडाउन के दौरान 500+ दैनिक प्रतिभागी)'
        ]
      },
      contact: {
        title: 'संपर्क करें',
        subtitle: 'आइए कुछ अद्भुत बनाएं।',
        button: 'संपर्क करें'
      }
    }
  }

  const t = content[language]

  const skills = [
    { name: 'Python', icon: faPython, color: '#3776AB' },
    { name: 'Power BI', icon: faCode, color: '#F2C811' },
    { name: 'JavaScript', icon: faJs, color: '#F7DF1E' },
    { name: 'React', icon: faReact, color: '#61DAFB' },
    { name: 'Laravel', icon: faCode, color: '#FF2D20' },
    { name: 'Flutter', icon: faCode, color: '#02569B' },
    { name: 'Node.js', icon: faNode, color: '#339933' },
    { name: 'Docker', icon: faDocker, color: '#2496ED' },
    { name: 'Git', icon: faGit, color: '#F05032' },
    { name: 'SQL', icon: faCode, color: '#4479A1' },
    { name: 'Firebase', icon: faCode, color: '#FFCA28' },
    { name: 'Bootstrap', icon: faCode, color: '#7952B3' },
  ]

  const projectsData = {
    'Analytics & Dashboards': [
      {
        title: 'Block Productivity Analysis',
        description: 'Analysis of machine utilization, falling productivity, and KPI-based recommendations.',
        technologies: ['Looker Studio', 'Data Analytics'],
        link: 'https://datastudio.google.com/reporting/22f59a49-d5e5-4e5e-9e5e-5e5e5e5e5e5e',
        type: 'dashboard'
      },
      {
        title: 'Online Engine Book',
        description: 'Real-time interchange monitoring, PU position tracking, loading analysis.',
        technologies: ['Looker Studio', 'Real-time Data'],
        link: 'https://datastudio.google.com/reporting/f9e11ec6-d5e5-4e5e-9e5e-5e5e5e5e5e5e',
        type: 'dashboard'
      },
      {
        title: 'HDN Speed Analysis',
        description: 'Network speed KPIs, restrictions monitoring, and section-wise performance analysis.',
        technologies: ['Looker Studio', 'Performance Analytics'],
        link: 'https://datastudio.google.com/reporting/dfcd7114-d5e5-4e5e-9e5e-5e5e5e5e5e5e',
        type: 'dashboard'
      },
      {
        title: 'DRM IT Cell Analytics',
        description: 'Division-level data insights and analytics for decision-making support.',
        technologies: ['Looker Studio', 'BI'],
        link: 'https://datastudio.google.com/reporting/349530f9-d5e5-4e5e-9e5e-5e5e5e5e5e5e',
        type: 'dashboard'
      },
      {
        title: 'CRIS Internal Analytics',
        description: 'Comprehensive operational dashboards and analytics platform.',
        technologies: ['Python', 'Power BI'],
        link: 'https://analytics.cris.org.in',
        type: 'internal'
      }
    ],
    'Web Projects': [
      {
        title: 'eOPT GBCT',
        description: 'Real-time unusual reporting and analysis system with asset failure tracking.',
        technologies: ['Laravel', 'MySQL'],
        link: 'https://www.eoptgbct.in',
        github: 'https://github.com/himmsrathore'
      },
      {
        title: 'MyCBT Exam Platform',
        description: 'Comprehensive exam preparation platform with 150+ tests and analytics.',
        technologies: ['Laravel', 'MySQL'],
        link: 'https://mycbt.in',
        github: 'https://github.com/himmsrathore'
      },
      {
        title: 'Rawla Community',
        description: 'Profile network system designed for community members to connect.',
        technologies: ['Laravel', 'MySQL'],
        link: 'https://rawla.in',
        github: 'https://github.com/himmsrathore'
      },
      {
        title: '7Step Learning',
        description: 'Technology learning platform with modules and user analytics.',
        technologies: ['Laravel', 'MySQL'],
        link: 'https://7step.in',
        github: 'https://github.com/himmsrathore'
      },
      {
        title: 'WR Library',
        description: 'Digital library platform for Western Railway with book management.',
        technologies: ['Laravel', 'MySQL'],
        link: 'https://books.mycbt.in',
        github: 'https://github.com/himmsrathore'
      }
    ],
    'Mobile Apps': [
      {
        title: 'myLibrary App',
        description: 'Mobile application for library management.',
        technologies: ['Flutter', 'Firebase'],
        link: '#',
        status: 'Coming Soon'
      },
      {
        title: 'CBT Prep App',
        description: 'Mobile exam preparation app for railway exams.',
        technologies: ['Flutter', 'SQLite'],
        link: '#',
        status: 'Coming Soon'
      },
      {
        title: 'Rawla App',
        description: 'Mobile version of the Rawla community platform.',
        technologies: ['Flutter', 'REST API'],
        link: '#',
        status: 'Coming Soon'
      }
    ]
  }

  return (
    <div className={`portfolio ${theme}`} data-theme={theme}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid px-4">
          <span className="navbar-brand">
            <FontAwesomeIcon icon={faTerminal} className="me-2 text-accent" />
            {t.brand}
          </span>
          <div className="d-flex gap-2">
            <button className="btn btn-sm" onClick={toggleTheme} title="Toggle Theme">
              <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
            </button>
            <button className="btn btn-sm" onClick={toggleLanguage} title="Toggle Language">
              <FontAwesomeIcon icon={faLanguage} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center hero-content">
              <h1 className="hero-title display-4">{t.name}</h1>
              <p className="hero-subtitle">{t.handle} | {t.title}</p>
              <p className="lead text-muted mb-4" style={{ maxWidth: '700px', margin: '0 auto' }}>{t.tagline}</p>
              <div className="social-links">
                <a href="https://github.com/himmsrathore" target="_blank" rel="noopener noreferrer" className="btn">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://linkedin.com/in/himmsrathore" target="_blank" rel="noopener noreferrer" className="btn">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href={`mailto:${t.email}`} className="btn">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Quote text={quotes[0]} />

      {/* About & Skills Grid */}
      <section className="section-padding">
        <div className="container-fluid px-4">
          <div className="row g-4 justify-content-center">
            {/* About */}
            <div className="col-lg-5">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="section-title h4">
                    <FontAwesomeIcon icon={faUser} className="me-2 text-accent" />
                    {t.about.title}
                  </h3>
                  <p className="section-subtitle">{t.about.subtitle}</p>
                  <p className="text-muted">{t.about.text}</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="col-lg-5">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="section-title h4">
                    <FontAwesomeIcon icon={faCode} className="me-2 text-accent" />
                    {t.skills.title}
                  </h3>
                  <p className="section-subtitle">{t.skills.subtitle}</p>
                  <div className="row g-2">
                    {skills.map((skill, index) => (
                      <div key={index} className="col-4 col-md-3">
                        <div className="skill-card rounded">
                          <FontAwesomeIcon icon={skill.icon} style={{ color: skill.color }} className="skill-icon" />
                          <div className="skill-name">{skill.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Quote text={quotes[1]} />

      {/* Experience Section */}
      <section className="section-padding">
        <div className="container-fluid px-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-center section-title mb-5">
                <span className="text-gradient">{t.experience.title}</span>
              </h2>
              <div className="card">
                <div className="card-body">
                  {t.experience.jobs.map((job, index) => (
                    <div key={index} className="experience-item">
                      <h5 className="experience-title">{job.title}</h5>
                      <span className="experience-period">{job.period}</span>
                      <p className="text-muted mb-0">{job.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Quote text={quotes[2]} />

      {/* Projects Section */}
      <section className="section-padding">
        <div className="container-fluid px-4">
          <h2 className="text-center section-title mb-5">
            <span className="text-gradient">{t.projects.title}</span>
          </h2>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              {Object.entries(projectsData).map(([category, projects], catIndex) => (
                <div key={catIndex} className="mb-5">
                  <h4 className="mb-4 font-mono text-accent border-bottom pb-2 d-inline-block">{category}</h4>
                  <div className="row g-3">
                    {projects.map((project, index) => (
                      <div key={index} className="col-md-6 col-lg-4">
                        <div className="card project-card h-100">
                          <div className="card-body">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <h5 className="card-title mb-0">{project.title}</h5>
                              {project.status && <span className="badge warning">{project.status}</span>}
                            </div>
                            <p className="card-text text-muted small mb-3">{project.description}</p>
                            <div className="mb-3">
                              {project.technologies.map((tech, i) => (
                                <span key={i} className="badge me-1 mb-1">{tech}</span>
                              ))}
                            </div>
                            <div className="d-flex gap-2 mt-auto">
                              {project.link && project.link !== '#' && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-accent small text-decoration-none">
                                  View Project →
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Quote text={quotes[3]} />

      {/* Highlights & Education Grid */}
      <section className="section-padding">
        <div className="container-fluid px-4">
          <div className="row g-4 justify-content-center">
            {/* Highlights */}
            <div className="col-lg-5">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="section-title h4">
                    <FontAwesomeIcon icon={faBriefcase} className="me-2 text-accent" />
                    {t.highlights.title}
                  </h3>
                  <ul className="list-unstyled mt-3">
                    {t.highlights.items.map((item, index) => (
                      <li key={index} className="mb-3 d-flex align-items-start">
                        <span className="text-accent me-2">➜</span>
                        <span className="text-muted small">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="col-lg-5">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="section-title h4">
                    <FontAwesomeIcon icon={faGraduationCap} className="me-2 text-accent" />
                    {t.education.title}
                  </h3>
                  <div className="mt-3">
                    <h5 className="font-mono fw-bold">{t.education.degree}</h5>
                    <p className="text-accent mb-1">{t.education.institution}</p>
                    <p className="text-muted small mb-2">{t.education.year}</p>
                    <p className="text-muted small">{t.education.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding text-center">
        <div className="container">
          <h2 className="section-title mb-3">{t.contact.title}</h2>
          <p className="text-muted mb-4">{t.contact.subtitle}</p>
          <a href={`mailto:${t.email}`} className="btn btn-lg px-5 py-3" style={{ background: 'var(--primary-color)', color: '#fff' }}>
            {t.contact.button}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section text-center">
        <div className="container">
          <p className="footer-text mb-0">&copy; 2025 {t.brand}. Built with React & Coffee.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
