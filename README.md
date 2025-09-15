# Internship Design System

This design system is a project of _Hack for LA_. It helps teams customize and develop their websites and applications. This design system is meant to provide necessary web components and make them easy to customize.

## 🚀 Quick Start

### Start Development (Docker)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hackforla/internship-website-design-system.git
   cd internship-website-design-system
   ```

2. **Start the development environment:**
   ```bash
   docker-compose up
   ```
   This automatically:
   - Installs all dependencies
   - Compiles Sass files
   - Starts Sass watcher for live CSS compilation
   - Starts MkDocs server with live reload
   - Sets up file watching for changes

3. **Open your browser:**
   - Visit: http://localhost:8000
   - Both Sass changes and documentation changes will auto-reload

4. **Stop development:**
   ```bash
   # Press Ctrl+C in the terminal, or:
   docker-compose down
   ```

### Alternative Docker Commands

```bash
# Build and start fresh
docker-compose up --build

# Run in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop background process
docker-compose down
```

## 🛠️ Development Workflow

1. **Edit Sass files** in `docs/components/sass/`
2. **Changes auto-compile** and browser auto-refreshes
3. **Edit documentation** in `docs/*.md` files  
4. **Changes auto-reload** in browser

### Internal Commands (Run Inside Container)

If you need to run commands inside the container:

```bash
# Access container shell
docker-compose exec mkdocs sh

# Inside container, you can run:
npm run dev          # Start only Sass watcher
npm run build-sass   # Build Sass once
npm run clean        # Clean compiled CSS
npm run build        # Build for production
```

## 📁 Project Structure

```
docs/
├── components/sass/          # Source Sass files
│   ├── main.scss            # Main entry point
│   ├── abstracts/           # Variables, mixins
│   ├── components/          # Button, form components
│   └── layout/              # Grid, tabs
├── dist/                    # Compiled CSS (auto-generated)
│   └── main.css            # Output CSS file
└── *.md                     # Documentation pages
```

## 🎨 Working with Styles

1. **Edit Sass files** in `docs/components/sass/`
2. **Changes auto-compile** when Docker is running
3. **Browser auto-refreshes** to show your changes
4. **Compiled CSS** appears in `docs/dist/main.css`

## 🐳 Docker Setup Details

The Docker setup includes:
- **Node.js & npm** for Sass compilation
- **Python & pip** for MkDocs
- **Live reload** for both CSS and documentation
- **Volume mounting** for instant file changes
- **Port forwarding** (8000 for site, 35729 for live reload)

### Technology used

- [MK Docs](https://www.mkdocs.org/) with [Material theme](https://squidfunk.github.io/mkdocs-material/)
- [SASS](https://sass-lang.com/)
- [Docker](https://docker.com) & Docker Compose
- [GitHub Pages](https://pages.github.com/) for deployment

## 🤝 Contributing

- [How to Contribute](CONTRIBUTING.md)
- This is a project of _Hack for LA_, please [join here](https://www.hackforla.org/join)
- Join the team on Slack: [#internship](https://hackforla.slack.com/archives/C01VAUPU788)

## 🔗 Links

### Wiki
[Software Engineer Wiki](https://github.com/hackforla/internship/wiki/Software-Engineer)

### Contact info
Message the team on Slack: [#internship](https://hackforla.slack.com/archives/C01VAUPU788)

### Licensing
[GPL-2.0 license](https://github.com/hackforla/internship-website-design-system#GPL-2.0-1-ov-file)

---
_this readme file sourced from [Jessica Sand](http://jessicasand.com/other-stuff/just-enough-docs/)_
