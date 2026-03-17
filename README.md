# ZCCFoundation

A Turborepo monorepo containing the ZCCFoundation platform — an olympiad/competition management system with a marketplace and real-time notifications.

## Architecture

```
.
├── apps/
│   ├── web/          # Next.js 15 frontend (App Router, TypeScript, Tailwind CSS)
│   └── api/          # NestJS 11 backend (modular monolith, TypeScript, Drizzle ORM)
├── packages/
│   ├── db/           # Shared Drizzle schema + migrations (PostgreSQL)
│   ├── types/        # Shared TypeScript types and DTOs
│   └── ui/           # Shared React component library
├── docker-compose.yml
└── turbo.json
```

### API Modules (`apps/api`)

| Module | Description |
|--------|-------------|
| `auth` | Registration and login (JWT planned) |
| `users` | User management |
| `olympiad` | Contests, problems, leaderboards |
| `submission` | Code submissions with async judging queue |
| `content` | CMS-backed content pages |
| `marketplace` | Vendor services and orders |
| `notification` | Real-time WebSocket notifications via Socket.IO |

## Prerequisites

- Node.js 20+
- npm 10+
- Docker (for local PostgreSQL and Redis)

## Getting Started

1. Start infrastructure services:
   ```bash
   docker compose up -d
   ```

2. Install dependencies from the root:
   ```bash
   npm install
   ```

3. Copy environment files and fill in your values:
   ```bash
   cp apps/api/.env.example apps/api/.env
   ```

4. Push the database schema:
   ```bash
   npm run db:push
   ```

5. Start all apps in development mode:
   ```bash
   npm run dev
   ```

   - Web app: http://localhost:3000
   - API: http://localhost:3001

## Root Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start all apps and packages in development mode (via Turbo) |
| `npm run build` | Build all packages and apps for production |
| `npm run lint` | Lint all packages and apps |
| `npm run test` | Run tests across all packages |
| `npm run db:generate` | Generate Drizzle migrations from `packages/db` schema |
| `npm run db:migrate` | Run pending migrations |
| `npm run db:push` | Push schema directly to the database |
| `npm run db:studio` | Open Drizzle Studio |
