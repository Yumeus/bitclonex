# Architecture Guide

This repository follows a layered, domain-driven Next.js App Router architecture designed for clarity, scalability, and clean separation of concerns.

## Directory Structure

```text
bitclonex/
├── .github/                  # CI/CD workflows, PR templates, issue templates
├── docs/                     # Architecture & engineering documentation
├── public/                   # Static public assets served at /
├── src/
│   ├── app/                  # Next.js App Router entrypoints (layout, page, globals)
│   ├── components/
│   │   ├── forms/            # Client-side interactive forms
│   │   ├── layout/           # Global chrome (Header, Footer, FloatingActions)
│   │   ├── sections/         # Self-contained landing page domain sections
│   │   └── ui/               # Reusable design-system primitives (Icon, Section, Container)
│   ├── config/               # Site metadata, branding, and navigation configuration
│   ├── data/                 # Pure structured content decoupled from JSX presentation
│   └── lib/                  # Shared utilities and design-token style presets
├── .editorconfig             # Cross-IDE formatting rules
├── .env.example              # Environment variable contract
├── .prettierrc               # Code formatting configuration
├── eslint.config.mjs         # ESLint flat config (Next.js Core Web Vitals)
├── jsconfig.json             # Path alias configuration (@/* -> ./src/*)
├── next.config.mjs           # Next.js runtime configuration
├── postcss.config.js         # PostCSS pipeline
└── tailwind.config.js        # Design system tokens (colors, spacing, typography)
```

## Engineering Conventions

1. **Zero Business Content in Route Files**: `src/app/page.js` is strictly a composition layer. Domain copy lives in `src/data/` and site-wide configuration lives in `src/config/`.
2. **Barrel Exports**: Each module (`ui`, `layout`, `sections`, `forms`, `config`, `data`, `lib`) exposes an `index.js` entrypoint for clean `@/*` imports.
3. **Server-First Components**: All sections and layout components are React Server Components by default. Only interactive islands (e.g., `QuoteForm`) opt into `"use client"`.
4. **Design System Tokens**: All colors, spacing (`space-*`, `gutter`, `margin`), and typography (`headline-*`, `body-*`, `label-*`) are standardized in `tailwind.config.js` and `src/lib/styles.js`.
