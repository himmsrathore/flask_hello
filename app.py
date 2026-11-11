import hmac
import json
import os
import time
from pathlib import Path

from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

PRIVATE_PROJECTS_FILE = Path(__file__).with_name('private_projects.json')


def load_dotenv(path=Path(__file__).with_name('.env')):
    """Minimal .env loader for local development (Vercel uses real env vars)."""
    if not path.exists():
        return
    for line in path.read_text(encoding='utf-8-sig').splitlines():
        line = line.strip()
        if line and not line.startswith('#') and '=' in line:
            key, value = line.split('=', 1)
            os.environ.setdefault(key.strip(), value.strip().strip('"\''))


load_dotenv()


def load_private_projects():
    """Private projects come from the PRIVATE_PROJECTS env var (JSON) or a
    gitignored private_projects.json file. They are never shipped in the
    frontend bundle or committed to the repo."""
    raw = os.environ.get('PRIVATE_PROJECTS')
    if raw:
        return json.loads(raw)
    if PRIVATE_PROJECTS_FILE.exists():
        return json.loads(PRIVATE_PROJECTS_FILE.read_text(encoding='utf-8-sig'))
    return []


@app.route('/api/health', methods=['GET'])
def health():
    return {"status": "ok"}


@app.route('/api/shell/projects', methods=['POST'])
def shell_projects():
    expected = os.environ.get('SHELL_PASSCODE', '')
    if not expected:
        return jsonify(error='shell disabled'), 503

    passcode = str((request.get_json(silent=True) or {}).get('passcode', ''))
    if not hmac.compare_digest(passcode.encode(), expected.encode()):
        time.sleep(0.6)  # slow down guessing
        return jsonify(error='access denied'), 401

    return jsonify(projects=load_private_projects())


if __name__ == '__main__':
    app.run(debug=True)
