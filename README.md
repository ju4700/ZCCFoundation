# ZCCFoundation

A monorepo containing the ZCCFoundation web application and API backend.

## Structure

```
.
├── apps/
│   ├── web/    # Next.js frontend (TypeScript, Tailwind CSS)
│   └── api/    # NestJS backend (TypeScript, Drizzle ORM, PostgreSQL)
└── package.json
```

## Prerequisites

- Node.js 18+
- npm 9+
- PostgreSQL database

## Getting Started

1. Install dependencies from the root:
   ```bash
   npm install
   ```

2. Copy environment files and fill in your values:
   ```bash
   cp apps/api/.env.example apps/api/.env
   cp apps/web/.env.example apps/web/.env.local
   ```

3. Run database migrations:
   ```bash
   npm run db:push --workspace=apps/api
   ```

4. Start both apps in development mode:
   ```bash
   npm run dev
   ```

   - Web app: http://localhost:3000
   - API: http://localhost:3001

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start both apps in development mode |
| `npm run build` | Build both apps for production |
| `npm run lint` | Lint both apps |

## API Database Scripts

Run from the repo root with `--workspace=apps/api`:

| Command | Description |
|---------|-------------|
| `npm run db:generate --workspace=apps/api` | Generate Drizzle migrations |
| `npm run db:migrate --workspace=apps/api` | Run migrations |
| `npm run db:push --workspace=apps/api` | Push schema directly to DB |
| `npm run db:studio --workspace=apps/api` | Open Drizzle Studio |
