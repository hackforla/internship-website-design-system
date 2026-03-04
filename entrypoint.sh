#!/bin/sh
set -e

# Force polling-based file watchers when running under Docker on Windows/WSL
export WATCHDOG_FORCE_POLLING="${WATCHDOG_FORCE_POLLING:-true}"

# Ensure Node dependencies are installed (volume may start empty)
if [ ! -x "node_modules/.bin/sass" ]; then
  echo "Installing npm dependencies..."
  if [ -f package-lock.json ]; then
    npm ci
  else
    npm install
  fi
fi

# Start Sass watcher in background
npm run dev &

# Run MkDocs and forward signals to it (bind livereload to all interfaces)
exec mkdocs serve --dev-addr=0.0.0.0:8000 --livereload

