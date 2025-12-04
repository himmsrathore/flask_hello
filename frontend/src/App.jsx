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
      name: 'HIMMAT SINGH RATHORE (WhiteHawk)',
      title: 'Executive – CRIS | Python Developer | Power BI Analyst | Full Stack & Flutter Developer',
      tagline: 'Merging IT expertise with operational understanding to build high-impact digital systems',
      location: 'Mumbai / Delhi',
      phone: '+91-7737264778',
      email: 'himmsrathore@gmail.com',
      portfolio: 'himmsrathore.com',
      brand: 'WhiteHawk',
      about: {
        title: 'About Me',
        subtitle: 'A result-oriented technology professional with 10+ years of combined experience',
        text: 'A result-oriented technology professional with 10+ years of combined experience in Data Analytics & Visualization (Python, Power BI, Qlik), Full-Stack Development (Laravel, MySQL, PHP), Mobile App Development (Flutter), and Railway Operational Systems (CRIS & MMCT Division). I merge IT expertise with deep operational understanding to build high-impact digital systems for analytics, automation & workforce efficiency.'
      },
      skills: {
        title: 'Skills & Technologies',
        subtitle: 'Technologies I work with'
      },
      experience: {
        title: 'Professional Experience',
        subtitle: '10+ years of technology and operational expertise',
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
        subtitle: 'My academic background',
        degree: 'B.Tech – Computer Science Engineering',
        institution: 'Rajasthan Technical University, Kota',
        year: '2009 - 2013',
        description: 'Final-Year Project: Cryptography using Public/Private Key'
      },
      projects: {
        title: 'Projects',
        subtitle: 'Analytics, Web Applications & Mobile Apps',
        categories: ['Analytics & Dashboards', 'Web Projects', 'Mobile Apps']
      },
      highlights: {
        title: 'Key Highlights',
        items: [
          'Created 15+ dashboards used by Divisional & HQ Railway teams',
          'Built 10+ web systems (Laravel/Python) for operations, safety & analytics',
          'Developed multiple mobile apps using Flutter',
          'Led digital transformation initiatives across MMCT Division',
          'Conducted staff digital training (500+ daily participants during lockdown)'
        ]
      },
      contact: {
        title: 'Get In Touch',
        subtitle: "I'm always open to discussing new projects and opportunities.",
        button: 'Contact Me'
      }
    },
    hi: {
      name: 'हिम्मत सिंह राठौर (WhiteHawk)',
      title: 'कार्यकारी – CRIS | पायथन डेवलपर | पावर बीआई विश्लेषक | फुल स्टैक और फ्लटर डेवलपर',
      tagline: 'उच्च प्रभाव वाली डिजिटल प्रणालियों के निर्माण के लिए आईटी विशेषज्ञता को परिचालन समझ के साथ मिलाना',
      location: 'मुंबई / दिल्ली',
      phone: '+91-7737264778',
      email: 'himmsrathore@gmail.com',
      portfolio: 'himmsrathore.com',
      brand: 'WhiteHawk',
      about: {
        title: 'मेरे बारे में',
        subtitle: '10+ वर्षों के संयुक्त अनुभव के साथ परिणाम-उन्मुख प्रौद्योगिकी पेशेवर',
        text: 'डेटा एनालिटिक्स और विज़ुअलाइज़ेशन (पायथन, पावर बीआई, क्लिक), फुल-स्टैक डेवलपमेंट (लारावेल, MySQL, PHP), मोबाइल ऐप डेवलपमेंट (फ्लटर), और रेलवे परिचालन प्रणाली (CRIS और MMCT डिवीजन) में 10+ वर्षों के संयुक्त अनुभव के साथ एक परिणाम-उन्मुख प्रौद्योगिकी पेशेवर। मैं एनालिटिक्स, स्वचालन और कार्यबल दक्षता के लिए उच्च प्रभाव वाली डिजिटल प्रणालियों के निर्माण हेतु आईटी विशेषज्ञता को गहरी परिचालन समझ के साथ मिलाता हूं।'
      },
      skills: {
        title: 'कौशल और प्रौद्योगिकियां',
        subtitle: 'जिन तकनीकों के साथ मैं काम करता हूं'
      },
      experience: {
        title: 'व्यावसायिक अनुभव',
        subtitle: '10+ वर्षों की प्रौद्योगिकी और परिचालन विशेषज्ञता',
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
        subtitle: 'मेरी शैक्षणिक पृष्ठभूमि',
        degree: 'बी.टेक – कंप्यूटर विज्ञान इंजीनियरिंग',
        institution: 'राजस्थान तकनीकी विश्वविद्यालय, कोटा',
        year: '2009 - 2013',
        description: 'अंतिम वर्ष परियोजना: सार्वजनिक/निजी कुंजी का उपयोग करते हुए क्रिप्टोग्राफी'
      },
      projects: {
        title: 'परियोजनाएं',
        subtitle: 'एनालिटिक्स, वेब एप्लिकेशन और मोबाइल ऐप्स',
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
        subtitle: 'मैं हमेशा नई परियोजनाओं और अवसरों पर चर्चा के लिए तैयार हूं।',
        button: 'मुझसे संपर्क करें'
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
        title: 'Block Productivity Analysis – Engineering',
        description: 'Analysis of machine utilization, falling productivity, and KPI-based recommendations for engineering operations.',
        technologies: ['Looker Studio', 'Data Analytics', 'KPI Tracking'],
        link: 'https://datastudio.google.com/reporting/22f59a49-d5e5-4e5e-9e5e-5e5e5e5e5e5e',
        type: 'dashboard'
      },
      {
        title: 'Online Engine Book – BL Interchange Dashboard',
        description: 'Real-time interchange monitoring, PU position tracking, loading analysis, and daily report automation.',
        technologies: ['Looker Studio', 'Real-time Data', 'Automation'],
        link: 'https://datastudio.google.com/reporting/f9e11ec6-d5e5-4e5e-9e5e-5e5e5e5e5e5e',
        type: 'dashboard'
      },
      {
        title: 'HDN Speed Analysis Dashboard',
        description: 'Network speed KPIs, restrictions monitoring, and section-wise performance analysis for railway operations.',
        technologies: ['Looker Studio', 'Performance Analytics', 'Network Monitoring'],
        link: 'https://datastudio.google.com/reporting/dfcd7114-d5e5-4e5e-9e5e-5e5e5e5e5e5e',
        type: 'dashboard'
      },
      {
        title: 'DRM IT Cell Analytics Dashboard',
        description: 'Division-level data insights and analytics for decision-making support at divisional management level.',
        technologies: ['Looker Studio', 'Business Intelligence', 'Decision Support'],
        link: 'https://datastudio.google.com/reporting/349530f9-d5e5-4e5e-9e5e-5e5e5e5e5e5e',
        type: 'dashboard'
      },
      {
        title: 'CRIS Internal Analytics Portal',
        description: 'Comprehensive operational dashboards and analytics platform for Indian Railways internal operations.',
        technologies: ['Python', 'Power BI', 'Data Engineering'],
        link: 'https://analytics.cris.org.in',
        type: 'internal'
      }
    ],
    'Web Projects': [
      {
        title: 'eOPT GBCT – Unusual Reporting System',
        description: 'Real-time unusual reporting and analysis system with asset failure tracking, PDF generation, and dashboard analytics.',
        technologies: ['Laravel', 'MySQL', 'PDF Generation', 'Analytics'],
        link: 'https://www.eoptgbct.in',
        github: 'https://github.com/himmsrathore'
      },
      {
        title: 'MyCBT – Railway LDCE Exam Platform',
        description: 'Comprehensive exam preparation platform with 150+ tests, 10,000+ questions, analytics, videos, and community features.',
        technologies: ['Laravel', 'MySQL', 'Analytics', 'Video Platform'],
        link: 'https://mycbt.in',
        github: 'https://github.com/himmsrathore'
      },
      {
        title: 'Rawla – Community Platform',
        description: 'Profile network system designed for community members to connect and collaborate.',
        technologies: ['Laravel', 'MySQL', 'Social Network'],
        link: 'https://rawla.in',
        github: 'https://github.com/himmsrathore'
      },
      {
        title: '7Step – Learning & Earning Platform',
        description: 'Technology learning platform with modules, dashboards, user analytics, and earning opportunities.',
        technologies: ['Laravel', 'MySQL', 'Analytics', 'E-learning'],
        link: 'https://7step.in',
        github: 'https://github.com/himmsrathore'
      },
      {
        title: 'Western Railway Library',
        description: 'Digital library platform for Western Railway with comprehensive book management and user access system.',
        technologies: ['Laravel', 'MySQL', 'Library Management'],
        link: 'https://books.mycbt.in',
        github: 'https://github.com/himmsrathore'
      },
      {
        title: 'myLibrary – Smart Library Management',
        description: 'Complete library management system with seat booking, attendance tracking, membership payments, and admin panel.',
        technologies: ['Laravel', 'MySQL', 'Payment Integration', 'Booking System'],
        link: 'https://library.7step.in',
        github: 'https://github.com/himmsrathore'
      },
      {
        title: 'Online Safety & Inspection System',
        description: 'Automated SS/TI/LC inspections with PDF email generation and real-time compliance monitoring.',
        technologies: ['Laravel', 'MySQL', 'PDF Generation', 'Email Automation'],
        link: '#',
        github: 'https://github.com/himmsrathore'
      },
      {
        title: 'e-Election Module – MMCT Division',
        description: 'Secure election management system with voting, results processing, and comprehensive dashboards.',
        technologies: ['Laravel', 'MySQL', 'Security', 'Voting System'],
        link: '#',
        github: 'https://github.com/himmsrathore'
      },
      {
        title: 'EMU Maintenance Module',
        description: 'Maintenance workflow management system for EMU Shed MMCT operations.',
        technologies: ['Laravel', 'MySQL', 'Workflow Management'],
        link: '#',
        github: 'https://github.com/himmsrathore'
      },
      {
        title: 'Operating Department Portal',
        description: 'Digitized operational workflows platform for railway staff and department operations.',
        technologies: ['Laravel', 'MySQL', 'Workflow Automation'],
        link: 'http://10.34.2.55/assets/deppt/Operating/',
        github: 'https://github.com/himmsrathore'
      }
    ],
    'Mobile Apps': [
      {
        title: 'myLibrary Mobile App',
        description: 'Mobile application for library management with seat booking and membership features.',
        technologies: ['Flutter', 'Dart', 'Firebase'],
        link: '#',
        github: 'https://github.com/himmsrathore',
        status: 'Coming Soon'
      },
      {
        title: 'CBT Preparation App',
        description: 'Mobile exam preparation app for railway competitive exams with offline support.',
        technologies: ['Flutter', 'Dart', 'SQLite'],
        link: '#',
        github: 'https://github.com/himmsrathore',
        status: 'Coming Soon'
      },
      {
        title: 'Rawla App (Beta)',
        description: 'Mobile version of the Rawla community platform for on-the-go networking.',
        technologies: ['Flutter', 'Dart', 'REST API'],
        link: '#',
        github: 'https://github.com/himmsrathore',
        status: 'Coming Soon'
      },
      {
        title: '7Step Learning App',
        description: 'Mobile learning platform for technology courses and skill development.',
        technologies: ['Flutter', 'Dart', 'Video Streaming'],
        link: '#',
        github: 'https://github.com/himmsrathore',
        status: 'Coming Soon'
      },
      {
        title: 'Internal CRIS Utilities',
        description: 'Python and Flutter based utility tools for internal CRIS operations.',
        technologies: ['Flutter', 'Python', 'Dart'],
        link: '#',
        github: 'https://github.com/himmsrathore',
        status: 'Coming Soon'
      }
    ]
  }

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
                <a href="mailto:himmsrathore@gmail.com" className="btn btn-outline-danger btn-lg">
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

      {/* Experience Section */}
      <section className="section-padding">
        <div className="container-fluid px-4">
          <div className="row justify-content-center mb-4">
            <div className="col-12 text-center">
              <div className="section-icon mb-3">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <h2 className="section-title">{t.experience.title}</h2>
              <p className="section-subtitle text-muted">{t.experience.subtitle}</p>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            {t.experience.jobs.map((job, index) => (
              <div key={index} className="col-lg-10">
                <div className="card shadow-sm border-0">
                  <div className="card-body p-4">
                    <h5 className="card-title fw-bold mb-2">{job.title}</h5>
                    <p className="text-primary mb-3">{job.period}</p>
                    <p className="card-text text-muted mb-0">{job.description}</p>
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
                <FontAwesomeIcon icon={faCode} />
              </div>
              <h2 className="section-title">{t.projects.title}</h2>
              <p className="section-subtitle text-muted">{t.projects.subtitle}</p>
            </div>
          </div>

          {/* Project Categories */}
          {Object.entries(projectsData).map(([category, projects], catIndex) => (
            <div key={catIndex} className="mb-5">
              <h3 className="text-center mb-4 fw-bold">{category}</h3>
              <div className="row g-4 justify-content-center">
                {projects.map((project, index) => (
                  <div key={index} className="col-md-6 col-lg-4">
                    <div className="card project-card h-100 shadow-sm border-0">
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title fw-bold mb-3">{project.title}</h5>
                        {project.status && (
                          <span className="badge bg-warning text-dark mb-2 align-self-start">{project.status}</span>
                        )}
                        <p className="card-text text-muted flex-grow-1">{project.description}</p>
                        <div className="mb-3">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="badge bg-primary bg-opacity-10 text-primary me-2 mb-2">{tech}</span>
                          ))}
                        </div>
                        <div className="d-flex gap-2">
                          {project.link && project.link !== '#' && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                              {project.type === 'dashboard' ? 'View Dashboard' : project.type === 'internal' ? 'Internal Portal' : 'Live Demo'}
                            </a>
                          )}
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
                              <FontAwesomeIcon icon={faGithub} className="me-1" /> Code
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
      </section>

      {/* Highlights Section */}
      <section className="section-padding">
        <div className="container-fluid px-4">
          <div className="row justify-content-center mb-4">
            <div className="col-12 text-center">
              <div className="section-icon mb-3">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <h2 className="section-title">{t.highlights.title}</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <ul className="list-unstyled mb-0">
                    {t.highlights.items.map((item, index) => (
                      <li key={index} className="mb-3 d-flex align-items-start">
                        <span className="text-primary me-3">✓</span>
                        <span className="text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
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
              <a href="mailto:himmsrathore@gmail.com" className="btn btn-primary btn-lg">
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
