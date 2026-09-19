# ZA Law Associates — Frontend (Next.js)

## Getting started

```bash
npm install
cp .env.local.example .env.local   # point NEXT_PUBLIC_API_URL at your ASP.NET API
npm run dev
```

Runs at http://localhost:3000.

## Structure

- `app/(public)` — marketing site (home, services, about, contact, how it works, resources)
- `app/(auth)` — client login, register, forgot password
- `app/admin/login` + `app/admin/(portal)` — consultant/admin portal
- `app/dashboard` — client portal (overview, applications, checklist, documents, messages, appointments, notifications, profile)
- `components/ui` — design system primitives
- `lib/api.ts` — fetch wrapper for the ASP.NET Core backend
- `lib/mock-data.ts` — demo data used while the API isn't wired up yet

Swap the mock data for real `api.get(...)` calls once the backend endpoints from `backend/README.md` are running.
