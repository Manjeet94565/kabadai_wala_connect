# Frontend requirements

The actual Next.js application is inside `frontend/frontend`. Frontend developers should open a terminal in that directory before installing packages or running commands.

## Required tools

- Node.js 18 or later (Node.js 20 LTS recommended)
- npm

## Install and run

```powershell
cd frontend/frontend
npm install
npm run dev
```

Open `http://localhost:3000` in the browser.

## Packages

`package.json` is the source of truth. It currently includes Next.js, React, React DOM, TypeScript, Tailwind CSS, ESLint, and their type/configuration packages. Do not install a new package without team approval.

## Environment variables

When frontend API integration begins, create a local `.env.local` file and add the backend API URL:

```text
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Do not commit `.env.local`.
