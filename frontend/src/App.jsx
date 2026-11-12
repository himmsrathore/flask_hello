import { useCallback, useEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope, faGraduationCap, faMoon, faSun, faArrowRight,
  faLocationDot, faBolt, faCopy, faCheck,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub, faLinkedin, faReact, faPython, faJs, faNode, faDocker, faGitAlt, faLaravel, faBootstrap, faFlutter,
} from '@fortawesome/free-brands-svg-icons'
import Shell from './Shell.jsx'
import WhiteHawk from './WhiteHawk.jsx'
import './App.css'

const WH_ROUTE = '#/whitehawk'

const content = {
  en: {
    name: 'Himmat Singh Rathore',
    handle: '@WhiteHawk',
    roles: ['Executive – CRIS', 'Python Developer', 'Power BI Analyst', 'Full Stack', 'Flutter'],
    tagline: 'Merging IT expertise with operational understanding to build high-impact digital systems.',
    location: 'Mumbai / Delhi',
    email: 'himmsrathore@gmail.com',
    brand: 'WhiteHawk',
    nav: { about: 'About', experience: 'Experience', work: 'Work', contact: 'Contact' },
    hero: { status: 'Open to new collaborations', primary: 'View my work', secondary: 'Get in touch' },
    stats: [
      { value: '10', suffix: '+', label: 'Years of experience' },
      { value: '15', suffix: '+', label: 'Dashboards shipped' },
      { value: '10', suffix: '+', label: 'Web systems built' },
      { value: '500', suffix: '+', label: 'Staff trained daily' },
    ],
    about: {
      eyebrow: 'About',
      title: 'Data, code & railway operations — in one person.',
      text: 'A result-oriented technology professional with 10+ years of combined experience in Data Analytics & Visualization (Python, Power BI, Qlik), Full-Stack Development (Laravel, MySQL, PHP), Mobile App Development (Flutter), and Railway Operational Systems (CRIS & MMCT Division). I merge IT expertise with deep operational understanding to build high-impact digital systems for analytics, automation & workforce efficiency.',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Where I’ve worked.',
      jobs: [
        { title: 'Executive – CRIS', period: '2023 — Present', description: 'Python automation, Power BI dashboards, data engineering, building web & mobile solutions for Indian Railways.' },
        { title: 'Divisional Traffic Inspector – Indian Railways', period: '2017 — 2023', description: 'Created digital platforms for Unusual Reporting, Safety Compliance, Caution Orders, Staff Training, and Inspection Automation.' },
        { title: 'Sr. Software Engineer – CoreTechies', period: '2013 — 2017', description: 'PHP/Laravel development, UI/UX design, multi-project management.' },
      ],
    },
    projects: {
      eyebrow: 'Selected work',
      title: 'Analytics, web & mobile.',
      all: 'All',
      categories: ['Analytics', 'Web', 'Mobile'],
    },
    highlights: {
      title: 'Highlights',
      items: [
        'Created 15+ dashboards used by Divisional & HQ Railway teams',
        'Built 10+ web systems (Laravel/Python) for operations, safety & analytics',
        'Developed multiple mobile apps using Flutter',
        'Led digital transformation initiatives across MMCT Division',
        'Conducted staff digital training (500+ daily participants during lockdown)',
      ],
    },
    education: {
      title: 'Education',
      degree: 'B.Tech — Computer Science Engineering',
      institution: 'Rajasthan Technical University, Kota',
      year: '2009 — 2013',
      description: 'Final-year project: Cryptography using Public/Private Key',
    },
    quoteLabel: '// developer wisdom',
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s build something amazing together.',
      subtitle: 'Have a project, a dashboard idea or just want to say hi? My inbox is always open.',
      button: 'Say hello',
      copy: 'Copy email',
      copied: 'Copied!',
    },
    footer: 'Designed & built with React.',
    comingSoon: 'Coming soon',
  },
  hi: {
    name: 'हिम्मत सिंह राठौर',
    handle: '@WhiteHawk',
    roles: ['कार्यकारी – CRIS', 'पायथन डेवलपर', 'पावर बीआई विश्लेषक', 'फुल स्टैक', 'फ्लटर'],
    tagline: 'उच्च प्रभाव वाली डिजिटल प्रणालियों के निर्माण के लिए आईटी विशेषज्ञता को परिचालन समझ के साथ मिलाना।',
    location: 'मुंबई / दिल्ली',
    email: 'himmsrathore@gmail.com',
    brand: 'WhiteHawk',
    nav: { about: 'परिचय', experience: 'अनुभव', work: 'कार्य', contact: 'संपर्क' },
    hero: { status: 'नए सहयोग के लिए उपलब्ध', primary: 'मेरा कार्य देखें', secondary: 'संपर्क करें' },
    stats: [
      { value: '10', suffix: '+', label: 'वर्षों का अनुभव' },
      { value: '15', suffix: '+', label: 'डैशबोर्ड बनाए' },
      { value: '10', suffix: '+', label: 'वेब सिस्टम बनाए' },
      { value: '500', suffix: '+', label: 'दैनिक प्रशिक्षित कर्मचारी' },
    ],
    about: {
      eyebrow: 'मेरे बारे में',
      title: 'डेटा, कोड और रेलवे संचालन — एक साथ।',
      text: 'डेटा एनालिटिक्स और विज़ुअलाइज़ेशन (पायथन, पावर बीआई, क्लिक), फुल-स्टैक डेवलपमेंट (लारावेल, MySQL, PHP), मोबाइल ऐप डेवलपमेंट (फ्लटर), और रेलवे परिचालन प्रणाली (CRIS और MMCT डिवीजन) में 10+ वर्षों के संयुक्त अनुभव के साथ एक परिणाम-उन्मुख प्रौद्योगिकी पेशेवर। मैं एनालिटिक्स, स्वचालन और कार्यबल दक्षता के लिए उच्च प्रभाव वाली डिजिटल प्रणालियों के निर्माण हेतु आईटी विशेषज्ञता को गहरी परिचालन समझ के साथ मिलाता हूं।',
    },
    experience: {
      eyebrow: 'अनुभव',
      title: 'जहाँ मैंने काम किया।',
      jobs: [
        { title: 'कार्यकारी – CRIS', period: '2023 — वर्तमान', description: 'पायथन स्वचालन, पावर बीआई डैशबोर्ड, डेटा इंजीनियरिंग, भारतीय रेलवे के लिए वेब और मोबाइल समाधान निर्माण।' },
        { title: 'डिवीजनल ट्रैफिक इंस्पेक्टर – भारतीय रेलवे', period: '2017 — 2023', description: 'असामान्य रिपोर्टिंग, सुरक्षा अनुपालन, सावधानी आदेश, कर्मचारी प्रशिक्षण और निरीक्षण स्वचालन के लिए डिजिटल प्लेटफॉर्म बनाए।' },
        { title: 'वरिष्ठ सॉफ्टवेयर इंजीनियर – CoreTechies', period: '2013 — 2017', description: 'PHP/Laravel विकास, UI/UX डिज़ाइन, बहु-परियोजना प्रबंधन।' },
      ],
    },
    projects: {
      eyebrow: 'चुनिंदा कार्य',
      title: 'एनालिटिक्स, वेब और मोबाइल।',
      all: 'सभी',
      categories: ['एनालिटिक्स', 'वेब', 'मोबाइल'],
    },
    highlights: {
      title: 'मुख्य विशेषताएं',
      items: [
        'डिवीजनल और मुख्यालय रेलवे टीमों द्वारा उपयोग किए जाने वाले 15+ डैशबोर्ड बनाए',
        'संचालन, सुरक्षा और एनालिटिक्स के लिए 10+ वेब सिस्टम (Laravel/Python) बनाए',
        'फ्लटर का उपयोग करके कई मोबाइल ऐप विकसित किए',
        'MMCT डिवीजन में डिजिटल परिवर्तन पहल का नेतृत्व किया',
        'कर्मचारी डिजिटल प्रशिक्षण आयोजित किया (लॉकडाउन के दौरान 500+ दैनिक प्रतिभागी)',
      ],
    },
    education: {
      title: 'शिक्षा',
      degree: 'बी.टेक — कंप्यूटर विज्ञान इंजीनियरिंग',
      institution: 'राजस्थान तकनीकी विश्वविद्यालय, कोटा',
      year: '2009 — 2013',
      description: 'अंतिम वर्ष परियोजना: सार्वजनिक/निजी कुंजी का उपयोग करते हुए क्रिप्टोग्राफी',
    },
    quoteLabel: '// डेवलपर ज्ञान',
    contact: {
      eyebrow: 'संपर्क',
      title: 'आइए कुछ अद्भुत बनाएं।',
      subtitle: 'कोई प्रोजेक्ट, डैशबोर्ड का विचार, या बस नमस्ते कहना है? मेरा इनबॉक्स हमेशा खुला है।',
      button: 'नमस्ते कहें',
      copy: 'ईमेल कॉपी करें',
      copied: 'कॉपी हो गया!',
    },
    footer: 'React के साथ डिज़ाइन और निर्मित।',
    comingSoon: 'जल्द आ रहा है',
  },
}

const quotes = [
  "There are 10 types of people in the world: those who understand binary, and those who don't.",
  "I don't always test my code, but when I do, I do it in production.",
  "Debuggers don't remove bugs. They only show them in slow motion.",
  'Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.',
]

// icon: brand icon when one exists, otherwise a coloured dot is shown
const skills = [
  { name: 'Python', icon: faPython, color: '#3776AB' },
  { name: 'Power BI', color: '#F2C811' },
  { name: 'JavaScript', icon: faJs, color: '#F7DF1E' },
  { name: 'React', icon: faReact, color: '#61DAFB' },
  { name: 'Laravel', icon: faLaravel, color: '#FF2D20' },
  { name: 'Flutter', icon: faFlutter, color: '#02569B' },
  { name: 'Node.js', icon: faNode, color: '#339933' },
  { name: 'Docker', icon: faDocker, color: '#2496ED' },
  { name: 'Git', icon: faGitAlt, color: '#F05032' },
  { name: 'SQL', color: '#4479A1' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'Bootstrap', icon: faBootstrap, color: '#7952B3' },
  { name: 'Looker Studio', color: '#4285F4' },
  { name: 'Qlik', color: '#009848' },
]

// Category order must match content[lang].projects.categories
const projectsData = [
  [
    { title: 'Block Productivity Analysis', description: 'Analysis of machine utilization, falling productivity, and KPI-based recommendations.', technologies: ['Looker Studio', 'Data Analytics'], link: 'https://datastudio.google.com/reporting/22f59a49-d5e5-4e5e-9e5e-5e5e5e5e5e5e' },
    { title: 'Online Engine Book', description: 'Real-time interchange monitoring, PU position tracking, loading analysis.', technologies: ['Looker Studio', 'Real-time Data'], link: 'https://datastudio.google.com/reporting/f9e11ec6-d5e5-4e5e-9e5e-5e5e5e5e5e5e' },
    { title: 'HDN Speed Analysis', description: 'Network speed KPIs, restrictions monitoring, and section-wise performance analysis.', technologies: ['Looker Studio', 'Performance Analytics'], link: 'https://datastudio.google.com/reporting/dfcd7114-d5e5-4e5e-9e5e-5e5e5e5e5e5e' },
    { title: 'DRM IT Cell Analytics', description: 'Division-level data insights and analytics for decision-making support.', technologies: ['Looker Studio', 'BI'], link: 'https://datastudio.google.com/reporting/349530f9-d5e5-4e5e-9e5e-5e5e5e5e5e5e' },
    { title: 'CRIS Internal Analytics', description: 'Comprehensive operational dashboards and analytics platform.', technologies: ['Python', 'Power BI'], link: 'https://analytics.cris.org.in' },
  ],
  [
    { title: 'eOPT GBCT', description: 'Real-time unusual reporting and analysis system with asset failure tracking.', technologies: ['Laravel', 'MySQL'], link: 'https://www.eoptgbct.in' },
    // Private projects live in private_projects.json (gitignored) and are shown only in the hidden shell
    { title: 'WR Library', description: 'Digital library platform for Western Railway with book management.', technologies: ['Laravel', 'MySQL'], link: 'https://books.mycbt.in' },
  ],
  [
    { title: 'myLibrary App', description: 'Mobile application for library management.', technologies: ['Flutter', 'Firebase'], soon: true },
    { title: 'Rawla App', description: 'Mobile version of the Rawla community platform.', technologies: ['Flutter', 'REST API'], soon: true },
  ],
]

const socials = [
  { href: 'https://github.com/himmsrathore', icon: faGithub, label: 'GitHub' },
  { href: 'https://linkedin.com/in/himmsrathore', icon: faLinkedin, label: 'LinkedIn' },
  { href: 'mailto:himmsrathore@gmail.com', icon: faEnvelope, label: 'Email' },
]

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch { /* storage unavailable */ }
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

// Fade sections in as they scroll into view
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

// Track cursor position for the card spotlight effect
function spotlight(e) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

function ProjectCard({ project, category, comingSoon }) {
  const inner = (
    <>
      <div className="card-top">
        <span className="card-cat">{category}</span>
        {project.soon
          ? <span className="soon">{comingSoon}</span>
          : <span className="card-arrow"><FontAwesomeIcon icon={faArrowRight} /></span>}
      </div>
      <h3 className="card-title">{project.title}</h3>
      <p className="card-desc">{project.description}</p>
      <div className="tech">
        {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
      </div>
    </>
  )

  return project.link ? (
    <a className="card" href={project.link} target="_blank" rel="noopener noreferrer" onMouseMove={spotlight}>
      {inner}
    </a>
  ) : (
    <div className="card" onMouseMove={spotlight}>{inner}</div>
  )
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [language, setLanguage] = useState('en')
  const [activeTab, setActiveTab] = useState(-1) // -1 = all
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [copied, setCopied] = useState(false)
  const [shellOpen, setShellOpen] = useState(false)
  const logoClicks = useRef([])
  const t = content[language]

  useReveal()

  const closeShell = useCallback(() => setShellOpen(false), [])

  // Hidden shell: press ` (backtick) anywhere outside a text field
  useEffect(() => {
    const onKey = (e) => {
      const tag = e.target.tagName
      if (e.key === '`' && tag !== 'INPUT' && tag !== 'TEXTAREA') {
        e.preventDefault()
        setShellOpen(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Hidden shell on touch devices: tap the logo 5 times within 2 seconds
  const onLogoClick = () => {
    const now = Date.now()
    logoClicks.current = [...logoClicks.current.filter((ts) => now - ts < 2000), now]
    if (logoClicks.current.length >= 5) {
      logoClicks.current = []
      setShellOpen(true)
    }
  }

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { /* ignore */ }
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    const id = setInterval(() => setQuoteIndex((i) => (i + 1) % quotes.length), 7000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (document.startViewTransition && !reduced) {
      document.startViewTransition(() => flushSync(() => setTheme(next)))
    } else {
      setTheme(next)
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(t.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch { /* clipboard unavailable */ }
  }

  const visibleProjects = projectsData.flatMap((list, ci) =>
    activeTab === -1 || activeTab === ci
      ? list.map((p) => ({ ...p, category: t.projects.categories[ci] }))
      : [],
  )

  return (
    <div className="page">
      <div className="backdrop" aria-hidden="true" />

      {/* Navbar */}
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="#top" className="brand" onClick={onLogoClick}>
          <span className="brand-mark">WH</span>
          {t.brand}
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#about">{t.nav.about}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#work">{t.nav.work}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')} aria-label="Toggle language">
            {language === 'en' ? 'हि' : 'EN'}
          </button>
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
          </button>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero container">
          <div className="hero-top reveal">
            <div className="avatar" role="img" aria-label={t.name} />
            <span className="status-pill">
              <span className="status-dot" />
              {t.hero.status}
            </span>
          </div>

          <h1 className="hero-title reveal">{t.name}</h1>

          <div className="hero-roles reveal">
            {t.roles.map((r) => <span key={r} className="role">{r}</span>)}
          </div>

          <p className="hero-tagline reveal">{t.tagline}</p>

          <div className="hero-cta reveal">
            <a href="#work" className="btn btn-primary">
              {t.hero.primary}
              <FontAwesomeIcon icon={faArrowRight} className="arrow" />
            </a>
            <a href="#contact" className="btn btn-ghost">{t.hero.secondary}</a>
            <div className="socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <FontAwesomeIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="container reveal">
          <div className="stats">
            {t.stats.map((s) => (
              <div key={s.label} className="stat">
                <div className="stat-value">{s.value}<span>{s.suffix}</span></div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* About + skills */}
        <section id="about" className="section container">
          <div className="split">
            <div className="reveal">
              <div className="eyebrow">{t.about.eyebrow}</div>
              <h2 className="section-title">{t.about.title}</h2>
            </div>
            <div className="reveal">
              <p className="lead">{t.about.text}</p>
              <div className="meta">
                <span><FontAwesomeIcon icon={faLocationDot} /> {t.location}</span>
                <span><FontAwesomeIcon icon={faEnvelope} /> {t.email}</span>
              </div>
              <div className="chips">
                {skills.map((s) => (
                  <span key={s.name} className="chip">
                    {s.icon
                      ? <FontAwesomeIcon icon={s.icon} className="chip-icon" style={{ color: s.color }} />
                      : <span className="chip-dot" style={{ background: s.color }} />}
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section container">
          <div className="section-head reveal">
            <div className="eyebrow">{t.experience.eyebrow}</div>
            <h2 className="section-title">{t.experience.title}</h2>
          </div>
          <div className="timeline">
            {t.experience.jobs.map((job, i) => (
              <article key={i} className="job reveal">
                <div className="job-period">{job.period}</div>
                <div>
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-desc">{job.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="work" className="section container">
          <div className="projects-head reveal">
            <div>
              <div className="eyebrow">{t.projects.eyebrow}</div>
              <h2 className="section-title">{t.projects.title}</h2>
            </div>
            <div className="tabs" role="tablist">
              {[t.projects.all, ...t.projects.categories].map((label, i) => (
                <button
                  key={label}
                  role="tab"
                  aria-selected={activeTab === i - 1}
                  className={`tab ${activeTab === i - 1 ? 'active' : ''}`}
                  onClick={() => setActiveTab(i - 1)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="grid" key={activeTab}>
            {visibleProjects.map((p) => (
              <ProjectCard key={p.title} project={p} category={p.category} comingSoon={t.comingSoon} />
            ))}
          </div>
        </section>

        {/* Highlights + Education */}
        <section className="section container">
          <div className="duo">
            <div className="card reveal" onMouseMove={spotlight}>
              <h3 className="panel-title"><FontAwesomeIcon icon={faBolt} /> {t.highlights.title}</h3>
              <ul className="highlights">
                {t.highlights.items.map((item, i) => (
                  <li key={item}>
                    <span className="hl-num">{String(i + 1).padStart(2, '0')}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card reveal" onMouseMove={spotlight}>
              <h3 className="panel-title"><FontAwesomeIcon icon={faGraduationCap} /> {t.education.title}</h3>
              <p className="edu-degree">{t.education.degree}</p>
              <p className="edu-school">{t.education.institution}</p>
              <div><span className="edu-year">{t.education.year}</span></div>
              <p className="edu-note">{t.education.description}</p>
            </div>
          </div>
        </section>

        {/* Rotating quote */}
        <section className="quote container reveal" aria-live="polite">
          <p key={quoteIndex}>“{quotes[quoteIndex]}”</p>
          <div className="quote-label">{t.quoteLabel}</div>
        </section>

        {/* Contact */}
        <section id="contact" className="section container">
          <div className="contact reveal">
            <div className="eyebrow">{t.contact.eyebrow}</div>
            <h2 className="section-title">{t.contact.title}</h2>
            <p className="contact-sub">{t.contact.subtitle}</p>
            <div className="hero-cta">
              <a href={`mailto:${t.email}`} className="btn btn-primary">
                {t.contact.button}
                <FontAwesomeIcon icon={faArrowRight} className="arrow" />
              </a>
              <button className="btn btn-ghost" onClick={copyEmail}>
                <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
                {copied ? t.contact.copied : t.contact.copy}
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          {/* Secret: a single click on the © opens the WhiteHawk profile */}
          <span><span onClick={() => { window.location.hash = WH_ROUTE }}>©</span> {new Date().getFullYear()} {t.name}. {t.footer}</span>
          <div className="socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                <FontAwesomeIcon icon={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {shellOpen && <Shell onClose={closeShell} />}
    </div>
  )
}

// Tiny hash router: "#/whitehawk" shows the hidden WhiteHawk profile,
// everything else (including #about, #work…) is the main portfolio.
function Root() {
  const [hidden, setHidden] = useState(() => window.location.hash === WH_ROUTE)

  useEffect(() => {
    const onHash = () => setHidden(window.location.hash === WH_ROUTE)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const exit = useCallback(() => {
    history.pushState('', document.title, window.location.pathname + window.location.search)
    setHidden(false)
    window.scrollTo(0, 0)
  }, [])

  return hidden ? <WhiteHawk onExit={exit} /> : <App />
}

export default Root
