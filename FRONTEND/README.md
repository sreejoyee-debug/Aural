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
