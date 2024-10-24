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

COPY . .

# Expose the port MkDocs will run on
EXPOSE 8000 35729

# Set the startup script as the entry point
ENTRYPOINT ["./entrypoint.sh"]
