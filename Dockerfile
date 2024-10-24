# Start with a Python base image
FROM squidfunk/mkdocs-material

# set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PYTHONPYCACHEPREFIX=/root/.cache/pycache/

RUN \
    --mount=type=cache,target=/var/cache/apk \
    --mount=type=cache,target=/etc/apk/cache \
    apk add nodejs npm

WORKDIR /docs

COPY package.json .
RUN --mount=type=cache,target=/docs/node_modules \
    --mount=type=cache,target=/root/.cache \
    --mount=type=cache,target=/root/.npm \
    npm install --save-dev

COPY requirements.txt .
RUN \
    --mount=type=cache,target=/root/.cache \
    pip install -r requirements.txt

COPY . .

# Expose the port MkDocs will run on
EXPOSE 8000 35729

# Create a startup script
RUN echo '#!/bin/sh' > /start.sh && \
    echo 'npm run watch-sass &' >> /start.sh && \
    echo 'mkdocs serve --dev-addr 0.0.0.0:8000' >> /start.sh && \
    chmod +x /start.sh

# Set the startup script as the entry point
ENTRYPOINT ["/start.sh"]

# Run MkDocs serve command
# CMD ["mkdocs", "serve", "--dev-addr=0.0.0.0:8000"]

# Command to run both SCSS watcher and MkDocs serve concurrently
#CMD ["concurrently", 
#    "\"sass --watch components/sass/main.scss:components/sass/main.css\"",
#   "\"mkdocs serve --dev-addr=0.0.0.0:8000\""]

#CMD ["concurrently", 
#     "\"/usr/local/bin/sass --watch docs/components/sass/main.scss:docs/components/sass/main.css\"",
#     "\"mkdocs serve --dev-addr=0.0.0.0:8000\"",
#    "\"python -m livereload docs -p 35729 -w docs\""]