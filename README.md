<<<<<<< HEAD
# AURAL project layout

- `FRONTEND/` — the responsive Vite + React + TypeScript user experience. It holds the app shell, discovery views, and the two supplied reusable UI components in `src/components/ui/`.
- `BACKEND/` — a compact Express API. `src/server.ts` contains the demo endpoints and the `MusicIntelligenceProvider` boundary so an OpenAI/Spotify provider can be swapped in without frontend changes.
- `DATABASE/` — one Prisma schema and one small SQL seed script for PostgreSQL.

## Run locally

1. In `FRONTEND`, run `npm install` then `npm run dev`.
2. In `BACKEND`, copy `.env.example` to `.env`, set `DATABASE_URL` if using Postgres, then run `npm install` and `npm run dev`.
3. From `BACKEND`, run `npm run db:push` to provision the schema. Then execute `DATABASE/seed.sql` with your Postgres client.

The frontend currently uses polished local demo data so it opens immediately. The API endpoints mirror those interactions and are ready to connect in `src/App.tsx` when production credentials are available.
=======
# Aural
An AI-powered music platform where moods become playlists, colors become melodies, conversations become discoveries, and every listen becomes an experience.
>>>>>>> 746093d02d2f01f466fc0262b959c02a1f60bd19
