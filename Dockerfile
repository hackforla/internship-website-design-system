# Start with a Python base image
FROM squidfunk/mkdocs-material

# set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PYTHONPYCACHEPREFIX=/root/.cache/pycache/

# Install Node.js and npm with caching
RUN \
    --mount=type=cache,target=/var/cache/apk \
    --mount=type=cache,target=/etc/apk/cache \
    apk add nodejs npm build-base python3

WORKDIR /docs

# Copy package files and install dependencies with caching
COPY package.json .
RUN --mount=type=cache,target=/docs/node_modules \
    --mount=type=cache,target=/root/.cache \
    --mount=type=cache,target=/root/.npm \
    npm install --save-dev

# Copy Python requirements and install
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy the entire application
COPY . .

# Expose the ports MkDocs will run on
EXPOSE 8000 35729

# Set the startup script as the entry point
ENTRYPOINT ["./entrypoint.sh"]
