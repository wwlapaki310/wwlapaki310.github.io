# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a personal portfolio website (wwlapaki310.github.io) built as a static GitHub Pages site. The site showcases projects, activities, and professional information for aki310 (秋田賢/Satoru Akita), an engineer focused on machine learning, IoT, and image processing systems.

## Technology Stack

- **Template**: HTML5 UP "Solid State" theme (CCA 3.0 license)
- **Frontend**: Static HTML, CSS, JavaScript (jQuery-based)
- **Styling**: SASS/SCSS for preprocessing, FontAwesome for icons
- **Hosting**: GitHub Pages (static site deployment)
- **Analytics**: Google Analytics (gtag.js)

## Site Structure

```
├── index.html              # Main portfolio page (single-page design)
├── assets/
│   ├── css/               # Compiled CSS and third-party styles
│   ├── js/                # jQuery plugins and main.js for interactions
│   ├── sass/              # SASS source files (components, layout, base)
│   └── webfonts/          # FontAwesome web fonts
├── css/                   # Additional custom styles
└── images/                # Project screenshots, logos, and images
```

## Architecture

### Single-Page Portfolio Design
- The entire site is contained in `index.html` with sections for banner, activities/projects, and footer
- All content is embedded directly in the HTML (no CMS or dynamic data loading)
- Responsive design with breakpoints: xlarge (1680px), large (1280px), medium (980px), small (736px), xsmall (480px)

### JavaScript Architecture
- jQuery-based with plugin dependencies: scrollex, browser.min.js, breakpoints.min.js
- `main.js` handles:
  - Header alt-state toggle on scroll
  - Menu show/hide with lock mechanism
  - Responsive behavior
- Menu uses a locking pattern to prevent rapid toggling (350ms debounce)

### Styling Architecture
- SASS organized into three layers:
  - `base/`: Reset, page layout, typography
  - `components/`: Reusable UI elements (buttons, forms, icons, etc.)
  - `layout/`: Major layout sections (header, banner, menu, wrapper, footer)
- Custom styles in `css/style.css` and `css/bootstrap-social.css`

## Content Management

### Adding New Projects/Activities
Projects are manually added to the `#four` section in index.html. Each project follows this structure:

```html
<article>
    <a href="[PROJECT_URL]" class="image">
        <img src="images/[IMAGE_FILE]" alt="" />
    </a>
    <h3 class="major">[PROJECT_TITLE]</h3>
    <p>[PROJECT_DESCRIPTION]</p>
    <p><a href="[LINK]">リンク</a></p>
</article>
```

For video embeds, use:
```html
<div class="video">
    <iframe src="https://www.youtube.com/embed/[VIDEO_ID]" frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
</div>
```

### Image Management
- All project images stored in `images/` directory
- Common formats: PNG, JPG
- Banner icon: `images/kitune2.png`

## Deployment

This is a GitHub Pages site deployed from the `master` branch. Changes to `index.html` or assets are automatically deployed when pushed to the repository.

## Key Customizations from Template

The "Solid State" template has been customized with:
- Japanese content for personal branding
- Google Analytics integration
- Custom project showcase layout with video embeds
- Social media links (Twitter, Facebook, GitHub, LinkedIn, Email)
- CV link to Google Drive
- Blog integration (Hatena blog)

## Development Workflow

Since this is a static site with no build process:
1. Edit `index.html` directly for content changes
2. Modify SASS files in `assets/sass/` if styling changes are needed (requires SASS compilation)
3. Test locally by opening `index.html` in a browser
4. Commit and push to deploy via GitHub Pages

## Notes

- No package.json or build tools configured
- SASS compilation must be done externally if modifying styles
- All JavaScript dependencies are minified and vendored
- Site is primarily content-focused with minimal interactivity
