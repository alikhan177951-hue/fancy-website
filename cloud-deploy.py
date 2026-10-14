#!/usr/bin/env python3
"""Deploy 10 lawn dists via SFTP then optionally send .eml pitches via SMTP SSL.
Auth: cloud-auth.json next to this script (or AUTH_JSON env). Never print secrets.
"""
import json, os, ssl, smtplib, subprocess, sys, time
from email import policy
from email import message_from_bytes
from pathlib import Path

SLUGS = [
  'danzers-plumbing','housecare-plumbing','bels-plumbing','all-affordable-plumbing','nexgen-plumbing',
  'electricians-melton','five-a-electrics','iprof-electricall','johnstone-electrics','western-air-electrical'
]

def auth():
  p = Path(os.environ.get('AUTH_JSON', 'cloud-auth.json'))
  return json.loads(p.read_text())

def run(cmd):
  # Never print secrets (lftp -u user,pass)
  safe = []
  skip_next = False
  for i, c in enumerate(cmd):
    if skip_next:
      safe.append('<redacted>')
      skip_next = False
      continue
    if c == '-u' and i + 1 < len(cmd):
      safe.append(c)
      skip_next = True
      continue
    safe.append(c)
  print('+', ' '.join(safe))
  subprocess.check_call(cmd)

def find_dist_root():
  # Prefer uploads/sites/<slug>/ or repo <slug>/dist
  for base in [Path('uploads/sites'), Path('sites'), Path('.')]:
    if all((base/s).exists() for s in SLUGS[:1]) or all((base/s/'dist').exists() for s in SLUGS[:1]):
      return base
  return Path('.')

def deploy(a):
  # Expect either sites/<slug>/ (already dist contents) or <slug>/dist
  base = find_dist_root()
  print('dist base', base.resolve())
  # Build lftp script
  cmds = ['set sftp:auto-confirm yes', 'set net:max-retries 3', 'set net:timeout 60']
  for s in SLUGS:
    src = base/s/'dist' if (base/s/'dist').is_dir() else base/s
    if not (src/'index.html').exists():
      raise SystemExit(f'missing index.html in {src}')
    cmds.append(f'mirror -R --no-perms --verbose=1 {src} public_html/kaamtasker.com/{s}')
  cmds.append('bye')
  script = '; '.join(cmds)
  env = os.environ.copy()
  # lftp -u user,pass
  run(['lftp', '-u', f"{a['FTP_USER']},{a['FTP_PASS']}", '-p', str(a['SFTP_PORT']),
       f"sftp://{a['FTP_HOST']}", '-e', script])

def verify():
  import urllib.request
  ok = True
  for s in SLUGS:
    url = f'https://kaamtasker.com/{s}/'
    try:
      with urllib.request.urlopen(url, timeout=30) as r:
        html = r.read(800).decode('utf-8','replace')
        title = 'KaamTasker — Pakistan' in html
        print(s, 'status', r.status, 'SPA_FALLBACK' if title else 'OK_CUSTOM')
        if title: ok = False
    except Exception as e:
      print(s, 'VERIFY_FAIL', e); ok = False
  return ok

def send_emls(a, eml_dir: Path):
  ctx = ssl.create_default_context()
  for s in SLUGS:
    log = eml_dir/f'{s}-sent.log'
    if log.exists() and 'DATA 250' in log.read_text(errors='replace'):
      print('skip', s); continue
    eml = eml_dir/f'{s}.eml'
    if not eml.exists():
      print('missing eml', eml); continue
    raw = eml.read_bytes()
    msg = message_from_bytes(raw, policy=policy.default)
    rcpt = msg['To'].strip()
    with smtplib.SMTP_SSL(a['MAIL_HOST'], a['MAIL_PORT'], context=ctx, timeout=180) as smtp:
      smtp.ehlo('kaamtasker.com')
      smtp.login(a['MAIL_USER'], a['MAIL_PASS'])
      code,_ = smtp.mail(a['MAIL_FROM'], [f'SIZE={len(raw)}'])
      print(s, 'MAIL', code)
      code, resp = smtp.rcpt(rcpt)
      print(s, 'RCPT', code, resp)
      if code not in (250,251):
        log.write_text(f'RCPT FAIL {code} {resp}\n'); continue
      code, resp = smtp.data(raw)
      print(s, 'DATA', code, resp)
      log.write_text(f'DATA {code} {resp}\nMessage-ID {msg["Message-ID"]}\nTo {rcpt}\n')
    time.sleep(2)

if __name__ == '__main__':
  a = auth()
  mode = sys.argv[1] if len(sys.argv)>1 else 'deploy'
  if mode in ('deploy','all'):
    deploy(a)
    if not verify():
      raise SystemExit('verify failed')
  if mode in ('send','all'):
    send_emls(a, Path(sys.argv[2] if len(sys.argv)>2 else 'emls'))
  print('DONE', mode)
