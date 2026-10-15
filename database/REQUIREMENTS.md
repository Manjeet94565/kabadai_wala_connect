# Database requirements

## Required tools

- PostgreSQL 16 or later, or access to a managed PostgreSQL database
- PostgreSQL command-line tools (`psql`, `pg_dump`) for database developers
- Optional: MySQL only when maintaining the copy in `mysql/`

## Folder responsibilities

| Folder | Use |
| --- | --- |
| `migrations/` | Versioned PostgreSQL schema changes |
| `queries/` | Reusable SQL queries and development scripts |
| `mysql/` | MySQL-compatible copy, if required by the team |
| `backup/` | Local database dumps only; `.dump` files must not enter Git |

## Connection

Backend developers configure the PostgreSQL connection through `backend/.env`:

```text
DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/DATABASE
DB_SSL=false
```

Use `DB_SSL=true` for providers that require SSL. Do not put credentials or dump files in this repository.
