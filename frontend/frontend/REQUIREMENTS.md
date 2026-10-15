# Frontend app setup

## Prerequisites

- Node.js 18 or later (Node.js 20 LTS recommended)
- npm

## Commands

```powershell
npm install
npm run dev
```

Other commands:

```powershell
npm run build
npm start
npm run lint
```

## Installed packages

Runtime: `next`, `react`, and `react-dom`.

Development: TypeScript, Tailwind CSS, ESLint, Next.js ESLint configuration, and React/Node type definitions. Exact versions are locked in `package-lock.json`; use `npm install` instead of installing them one by one.

For backend API calls, use `NEXT_PUBLIC_API_URL` from `.env.local`. Never commit that file.
