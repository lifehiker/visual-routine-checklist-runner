# Human Input Needed

Provide these production environment variables before deployment:

- `AUTH_SECRET`
  Generate a long random secret for NextAuth session signing.
  Example: `openssl rand -base64 32`

- `NEXT_PUBLIC_APP_URL`
  Set this to the public HTTPS origin for the deployed app.
  Example: `https://routinechart.example.com`

Optional, only if you want billing and Stripe webhooks enabled:

- `STRIPE_SECRET_KEY`
  Your Stripe secret API key.

- `STRIPE_WEBHOOK_SECRET`
  The signing secret for the Stripe webhook endpoint wired to `/api/webhooks/stripe`.

Database:

- `DATABASE_URL`
  The Docker image defaults to `file:/data/prod.db` for SQLite.
  Override this only if you want to use a different database path or provider.
