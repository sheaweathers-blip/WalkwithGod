# Production Deploy Checklist

This app now supports two storage modes:

- Local development: `data/db.json`
- Production: PostgreSQL when `DATABASE_URL` is set

## Recommended Host

Use Railway or Render with:

- Node.js web service
- PostgreSQL database
- HTTPS domain

## Required Environment Variables

```text
DATABASE_URL=postgresql://...
DATABASE_SSL=true
VAPID_SUBJECT=mailto:your-email@example.com
```

## Optional Reminder Providers

Email reminders through SendGrid:

```text
SENDGRID_API_KEY=...
EMAIL_FROM=verified-sender@example.com
```

Text reminders through Twilio:

```text
TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...
TWILIO_FROM=+15551234567
```

## Build And Start

```text
npm install
npm start
```

The first account created after deployment becomes the admin account.

## Important

Do not use the local `data/` folder for production. On a real host, add a PostgreSQL database and set `DATABASE_URL`.
