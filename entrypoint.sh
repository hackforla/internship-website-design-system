#!/bin/sh
set -e

# Ensure Docker file watching works reliably
export CHOKIDAR_USEPOLLING=1
export CHOKIDAR_INTERVAL=250

# Ensure Node dependencies are installed (volume may start empty)
if [ ! -x "node_modules/.bin/sass" ]; then
  echo "Installing npm dependencies..."
  if [ -f package-lock.json ]; then
    npm ci
  else
    npm install
  fi
fi

# Ensure output directory exists
mkdir -p dist

# Start Sass watcher in background
npm run dev &

# Run MkDocs and forward signals to it
exec mkdocs serve --dev-addr=0.0.0.0:8000 --livereload

