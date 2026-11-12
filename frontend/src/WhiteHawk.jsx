import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faLock, faChartLine, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faAndroid, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import './WhiteHawk.css'

// Hidden "WhiteHawk" profile page, opened from a secret click on the main site.
// Projects are fetched from the passcode-protected Flask API, so they never
// appear in the public bundle. The passcode is remembered on this device.

const KEY_STORAGE = 'wh-key'

const TYPES = [
  { id: 'android', label: 'Android Apps', icon: faAndroid },
  { id: 'web', label: 'Web Platforms', icon: faGlobe },
  { id: 'analytics', label: 'Analytics', icon: faChartLine },
]

const typeOf = (p) => (TYPES.some((t) => t.id === p.type) ? p.type : 'web')

function readKey() {
  try { return localStorage.getItem(KEY_STORAGE) || '' } catch { return '' }
}

function writeKey(value) {
  try {
    if (value) localStorage.setItem(KEY_STORAGE, value)
    else localStorage.removeItem(KEY_STORAGE)
  } catch { /* storage unavailable */ }
}

async function fetchProjects(passcode) {
  const res = await fetch('/api/shell/projects', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ passcode }),
  })
  if (res.ok) return (await res.json()).projects
  throw new Error(res.status === 401 ? 'Wrong passcode.' : 'Server is offline right now.')
}

function HawkMark() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="wh-mark">
      <path
        d="M4 30c10-2 18-8 24-18 1 8-1 14-5 19 6-3 12-4 19-2-5 1-9 3-12 6 7 0 14 3 20 9-8-2-15-2-21 0l-4 14-4-13C14 41 8 36 4 30Z"
        fill="currentColor"
      />
    </svg>
  )
}

function ProjectCard({ project }) {
  const type = TYPES.find((t) => t.id === typeOf(project))
  const isPlay = project.link?.includes('play.google.com')
  const host = project.link ? project.link.replace(/^https?:\/\/(www\.)?/, '').split('/')[0] : ''

  const body = (
    <>
      <div className="wh-card-top">
        <span className="wh-type"><FontAwesomeIcon icon={type.icon} /> {type.label}</span>
        {project.link && <span className="wh-live"><span className="wh-live-dot" /> Live</span>}
      </div>
      <h3 className="wh-card-title">{project.title}</h3>
      {project.description && <p className="wh-card-desc">{project.description}</p>}
      {project.technologies?.length > 0 && (
        <div className="tech">{project.technologies.map((t) => <span key={t}>{t}</span>)}</div>
      )}
      <div className="wh-card-foot">
        {project.link ? (
          <>
            <span className="wh-host">{isPlay ? 'Google Play' : host}</span>
            <span className="wh-open">
              {isPlay ? <><FontAwesomeIcon icon={faGooglePlay} /> Install</> : <>Open <FontAwesomeIcon icon={faArrowRight} /></>}
            </span>
          </>
        ) : (
          <span className="wh-host">Link coming soon</span>
        )}
      </div>
    </>
  )

  return project.link ? (
    <a className="wh-card" href={project.link} target="_blank" rel="noopener noreferrer">{body}</a>
  ) : (
    <div className="wh-card">{body}</div>
  )
}

export default function WhiteHawk({ onExit }) {
  const [projects, setProjects] = useState(null)
  const [status, setStatus] = useState(readKey() ? 'loading' : 'locked') // locked | loading | ready
  const [error, setError] = useState('')
  const [passcode, setPasscode] = useState('')
  const [filter, setFilter] = useState('all')

  const load = (code) =>
    fetchProjects(code).then(
      (list) => {
        setProjects(list)
        writeKey(code)
        setStatus('ready')
      },
      (err) => {
        if (err.message === 'Wrong passcode.') writeKey('')
        setError(err instanceof TypeError ? 'Could not reach the server.' : err.message)
        setStatus('locked')
      },
    )

  const unlock = (code) => {
    setStatus('loading')
    setError('')
    load(code)
  }

  useEffect(() => {
    document.title = 'WhiteHawk'
    window.scrollTo(0, 0)
    if (!document.documentElement.dataset.theme) {
      try { document.documentElement.dataset.theme = localStorage.getItem('theme') || 'dark' } catch { /* ignore */ }
    }
    const saved = readKey()
    if (saved) load(saved) // status already starts as 'loading'
    return () => { document.title = 'Himmat Singh Rathore' }
  }, []) // run once on open

  const lock = () => {
    writeKey('')
    setProjects(null)
    setPasscode('')
    setStatus('locked')
  }

  const counts = Object.fromEntries(TYPES.map((t) => [t.id, (projects || []).filter((p) => typeOf(p) === t.id).length]))
  const liveCount = (projects || []).filter((p) => p.link).length
  const shown = (projects || []).filter((p) => filter === 'all' || typeOf(p) === filter)
  const tabs = [{ id: 'all', label: 'All' }, ...TYPES.filter((t) => counts[t.id] > 0)]

  return (
    <div className="page wh">
      <div className="backdrop" aria-hidden="true" />

      <header className="nav scrolled">
        <button className="brand" onClick={onExit}>
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>
        <span className="wh-nav-brand"><HawkMark /> WhiteHawk</span>
        <div className="nav-actions">
          {status === 'ready' && (
            <button className="icon-btn" onClick={lock} aria-label="Lock this page on this device" title="Lock">
              <FontAwesomeIcon icon={faLock} />
            </button>
          )}
        </div>
      </header>

      <main>
        <section className="container wh-hero">
          <div className="wh-hero-mark"><HawkMark /></div>
          <div className="eyebrow">Independent builder</div>
          <h1 className="wh-title">WhiteHawk</h1>
          <p className="wh-tagline">
            Live Android apps, web platforms and analytics — designed, built and run end to end.
          </p>

          {status === 'ready' && (
            <div className="wh-stats">
              <div><strong>{liveCount}</strong><span>Live products</span></div>
              {TYPES.map((t) => (
                <div key={t.id}><strong>{counts[t.id]}</strong><span>{t.label}</span></div>
              ))}
            </div>
          )}
        </section>

        <section className="container wh-work">
          {status === 'ready' && (
            <>
              <div className="projects-head">
                <div>
                  <div className="eyebrow">Work</div>
                  <h2 className="section-title">What’s live.</h2>
                </div>
                <div className="tabs" role="tablist">
                  {tabs.map((t) => (
                    <button
                      key={t.id}
                      role="tab"
                      aria-selected={filter === t.id}
                      className={`tab ${filter === t.id ? 'active' : ''}`}
                      onClick={() => setFilter(t.id)}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
              {shown.length ? (
                <div className="wh-grid" key={filter}>
                  {shown.map((p) => <ProjectCard key={p.title} project={p} />)}
                </div>
              ) : (
                <p className="wh-empty">No projects configured yet.</p>
              )}
            </>
          )}

          {status === 'loading' && <p className="wh-empty">Loading…</p>}

          {status === 'locked' && (
            <form
              className="wh-gate"
              onSubmit={(e) => { e.preventDefault(); if (passcode) unlock(passcode) }}
            >
              <FontAwesomeIcon icon={faLock} className="wh-gate-icon" />
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Passcode"
                aria-label="Passcode"
                autoFocus
              />
              <button className="btn btn-primary" type="submit">Enter</button>
              {error && <p className="wh-error" role="alert">{error}</p>}
            </form>
          )}
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} WhiteHawk</span>
        </div>
      </footer>
    </div>
  )
}
