# CodeStash

CodeStash is a minimal single-page web app built for developers who want to quickly write, save, and view code snippets. It features a powerful editor, a clean UI, and no login friction. Just write, save, and stash your code.

## Features

- Monaco-powered code editor
- Language selector with starter templates
- Save snippets with name and description
- Sidebar to browse saved snippets
- Auto-refresh sidebar after each submission
- Firebase as backend (Firestore)
- Deployed on Vercel

## Tech Stack

- Next.js (App Router)
- Tailwind CSS
- Firebase Firestore
- Monaco Editor
- Vercel for deployment

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/codeStash.git
cd codeStash
```

2. Install dependencies:

```bash
npm install
```

2. Add environment variables in a .env.local file:
```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASURMENT_ID=your_measurement_id
```

4. Start the development server:
```bash
npm run dev
```
## Deployment
This project is ready to be deployed on Vercel. Connect your repo, add the environment variables under project settings, and you're good to go.

## License
MIT — use it freely, remix it, ship it.