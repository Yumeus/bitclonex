# Bitclonex Web3 Solutions

Enterprise-grade cryptocurrency exchange platform landing experience built with **Next.js App Router**, **React 19**, and **Tailwind CSS**.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19, Tailwind CSS 3
- **Tooling**: ESLint 9 (`eslint-config-next`), Prettier, EditorConfig
- **CI**: GitHub Actions (`.github/workflows/ci.yml`)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables (optional)
cp .env.example .env.local

# 3. Start local development server
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Serves the production build |
| `npm run lint` | Runs ESLint across the project |

## Architecture

See [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) for the full folder structure, module boundaries, and engineering conventions.
