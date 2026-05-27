# Walk With God Local Setup

Use the server URL for the real app features:

```powershell
.\run-app.ps1
```

Then open:

```text
http://127.0.0.1:4173
```

The first account created becomes the admin account. Later accounts are regular member accounts.

Current local features:
- Accounts and sessions
- Admin dashboard
- Member accounts without admin rights
- Shared community posts
- Feedback and report moderation
- Progress, notes, and reminders saved to the backend
- Service worker and push subscription infrastructure

Push notification delivery requires a normal Node/npm environment:

```powershell
npm install
npm start
```

For a public launch, deploy behind HTTPS and replace the local JSON database in `data/` with a managed production database.
