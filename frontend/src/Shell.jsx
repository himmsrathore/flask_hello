import { useEffect, useRef, useState } from 'react'
import './Shell.css'

const PROMPT = 'guest@whitehawk:~$'

const HELP = [
  'available commands:',
  '  projects   list private projects (passcode required)',
  '  whoami     who is this?',
  '  clear      clear the screen',
  '  exit       close the shell  (or press Esc)',
]

// A hidden terminal. Private projects are fetched from the Flask API only
// after a correct passcode, so they never appear in the public bundle.
export default function Shell({ onClose }) {
  const [lines, setLines] = useState([
    { type: 'dim', text: 'whitehawk shell v1.0 — type "help" to begin.' },
  ])
  const [input, setInput] = useState('')
  const [mode, setMode] = useState('cmd') // 'cmd' | 'pass' | 'busy'
  const [projects, setProjects] = useState(null)
  const [history, setHistory] = useState([])
  const [histIdx, setHistIdx] = useState(-1)
  const inputRef = useRef(null)
  const bodyRef = useRef(null)

  const print = (...newLines) => setLines((l) => [...l, ...newLines])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight })
    if (mode !== 'busy') inputRef.current?.focus()
  }, [lines, mode])

  const listProjects = (list) => {
    if (!list.length) {
      print({ type: 'dim', text: 'no private projects configured.' })
      return
    }
    print({ type: 'dim', text: `${list.length} private project(s):` })
    list.forEach((p, i) => print({ type: 'project', project: p, index: i + 1 }))
  }

  const unlock = async (passcode) => {
    setMode('busy')
    print({ type: 'in', prompt: 'passcode:', text: '•'.repeat(Math.min(passcode.length, 12)) })
    try {
      const res = await fetch('/api/shell/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode }),
      })
      if (res.ok) {
        const data = await res.json()
        setProjects(data.projects)
        print({ type: 'ok', text: 'access granted.' })
        listProjects(data.projects)
      } else if (res.status === 401) {
        print({ type: 'err', text: 'access denied.' })
      } else {
        print({ type: 'err', text: 'shell is offline right now.' })
      }
    } catch {
      print({ type: 'err', text: 'could not reach the server.' })
    }
    setMode('cmd')
  }

  const run = (raw) => {
    const cmd = raw.trim().toLowerCase()
    print({ type: 'in', prompt: PROMPT, text: raw })
    if (!cmd) return
    setHistory((h) => [raw, ...h].slice(0, 30))

    switch (cmd) {
      case 'help':
        print(...HELP.map((text) => ({ type: 'out', text })))
        break
      case 'projects':
      case 'ls':
        if (projects) listProjects(projects)
        else setMode('pass')
        break
      case 'whoami':
        print({ type: 'out', text: 'Himmat Singh Rathore — @WhiteHawk' })
        break
      case 'clear':
        setLines([])
        break
      case 'exit':
      case 'quit':
        onClose()
        break
      case 'sudo':
      case 'sudo su':
        print({ type: 'err', text: 'nice try. this incident will be reported. 🙂' })
        break
      default:
        print({ type: 'err', text: `command not found: ${cmd}` })
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const value = input
    setInput('')
    setHistIdx(-1)
    if (mode === 'pass') {
      if (value) unlock(value)
      else { print({ type: 'dim', text: 'cancelled.' }); setMode('cmd') }
    } else if (mode === 'cmd') {
      run(value)
    }
  }

  const onKeyDown = (e) => {
    if (mode !== 'cmd' || !history.length) return
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const i = Math.min(histIdx + 1, history.length - 1)
      setHistIdx(i)
      setInput(history[i])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const i = histIdx - 1
      setHistIdx(i)
      setInput(i < 0 ? '' : history[i])
    }
  }

  return (
    <div className="shell-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="shell" role="dialog" aria-label="Terminal" onClick={() => inputRef.current?.focus()}>
        <div className="shell-bar">
          <button className="dot red" onClick={onClose} aria-label="Close" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="shell-title">whitehawk — zsh</span>
        </div>

        <div className="shell-body" ref={bodyRef}>
          {lines.map((l, i) => {
            if (l.type === 'project') {
              const p = l.project
              return (
                <div key={i} className="sh-project">
                  <span className="sh-idx">{String(l.index).padStart(2, '0')}</span>
                  <div>
                    {p.link
                      ? <a href={p.link} target="_blank" rel="noopener noreferrer">{p.title} ↗</a>
                      : <span className="sh-name">{p.title} <em>(no link)</em></span>}
                    {p.description && <div className="sh-dim">{p.description}</div>}
                    {p.technologies?.length > 0 && <div className="sh-tech">[{p.technologies.join(', ')}]</div>}
                  </div>
                </div>
              )
            }
            return (
              <div key={i} className={`sh-line sh-${l.type}`}>
                {l.prompt && <span className="sh-prompt">{l.prompt} </span>}
                {l.text}
              </div>
            )
          })}

          {mode !== 'busy' ? (
            <form onSubmit={onSubmit} className="sh-line sh-input">
              <span className="sh-prompt">{mode === 'pass' ? 'passcode:' : PROMPT} </span>
              <input
                ref={inputRef}
                type={mode === 'pass' ? 'password' : 'text'}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                autoComplete="off"
                autoCapitalize="off"
                spellCheck="false"
                aria-label={mode === 'pass' ? 'Passcode' : 'Command'}
              />
            </form>
          ) : (
            <div className="sh-line sh-dim">verifying…</div>
          )}
        </div>
      </div>
    </div>
  )
}
