#!/bin/sh

# Ensure Sass is compiled initially
echo "Building Sass files..."
npm run build-sass

# Start Sass watcher in background
echo "Starting Sass watcher..."
npm run dev &

# Start MkDocs with live reload
echo "Starting MkDocs server with live reload..."
mkdocs serve --dev-addr=0.0.0.0:8000 --livereload