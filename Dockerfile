# Start with a Python base image
FROM squidfunk/mkdocs-material

# Install Node.js and npm
RUN apk add --no-cache nodejs npm

WORKDIR /docs

# Install global packages needed for development
RUN npm install -g sass concurrently

# Copy Python requirements and install
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy the entire application
COPY . .

# Expose the ports MkDocs will run on
EXPOSE 8000 35729

# Create a startup script
RUN echo '#!/bin/sh' > /start.sh && \
    echo 'sass --watch /docs/docs/components/sass:/docs/docs/dist &' >> /start.sh && \
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