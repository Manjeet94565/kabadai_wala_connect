# Backend requirements

## Required tools

- Node.js 18 or later (Node.js 20 LTS recommended)
- npm
- PostgreSQL, or a cloud PostgreSQL connection string

## Install and run

```powershell
cd backend
Copy-Item .env.example .env
npm install
npm run dev
```

The local health endpoint is `http://localhost:5000/api/health`.

## Packages

Run `npm install`; do not install packages one by one. The backend uses Express, `pg`, JWT, bcrypt, CORS, dotenv, Helmet, express-rate-limit, express-validator, QR code generation, Razorpay, and Nodemon for development. Exact package versions are in `package-lock.json`.

## Required configuration

Copy `.env.example` to `.env` and fill in values as services are enabled. At minimum, backend/database developers need `DATABASE_URL`; frontend integration needs `CORS_ORIGIN`; authentication later needs `JWT_SECRET`.

Never commit `.env`.
