# Start with a Python base image
FROM python:3.8-slim

# Set a working directory
WORKDIR /app

# Copy the requirements.txt file into the image
COPY requirements.txt /app/

# Install the Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of your MkDocs site source code into the image
COPY . /app/

# Expose the port MkDocs will run on
EXPOSE 8000

# Run MkDocs serve command
CMD ["mkdocs", "serve", "--dev-addr=0.0.0.0:8000"]
