# AURAL frontend

The frontend is React + TypeScript + Vite, with Tailwind and shadcn-compatible aliases configured. The visual system intentionally lives in `src/index.css` so the aurora effects, responsive breakpoints, cards, and player are easy to trace while debugging.

Reusable supplied UI components live in `src/components/ui/`:

- `gradient-button.tsx`
- `spotlight-card.tsx`

To add another shadcn component later, run this from `FRONTEND`:

```bash
npx shadcn@latest add button
```

The project uses the standard `@/components/ui` path defined in `components.json`, which keeps reusable UI independent from page/feature code.

## Local configuration

Copy `.env.example` to `.env` and fill in the Supabase URL and publishable key. Start the backend at `http://localhost:4000` and set `VITE_API_URL=http://localhost:4000/api` so authenticated library, profile, and history requests reach the API.

The backend must use the same Supabase project values (`SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY`) and have a working `DATABASE_URL`.

## Google sign-in

The Google button invokes Supabase OAuth and returns the user to the current app origin. Before using it, enable Google in **Supabase Dashboard → Authentication → Providers**, add the Google OAuth client ID and secret, and add your development and production app URLs to **Authentication → URL Configuration → Redirect URLs**.
