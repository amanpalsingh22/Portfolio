# Amanpal Singh Portfolio

Futuristic personal portfolio built with Next.js, React, Tailwind CSS, Framer Motion, and lucide-react.

## Project Structure

```text
app/
  api/contact/route.js   Contact form email endpoint
  globals.css            Global Tailwind and theme styles
  layout.jsx             SEO metadata and root layout
  page.jsx               Homepage composition
components/
  sections/              Page sections such as Hero, Projects, Contact
  ui/                    Reusable UI primitives
public/
  Amanpal-Singh-CV.pdf   Downloadable CV
```

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Environment Variables

Create `.env.local` from `.env.example`.

```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_RECEIVER_EMAIL=amanpalsingh878@gmail.com
CONTACT_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL=https://plausible.io/js/pa-XXXXX.js
```

For production email delivery, use a sender address from a verified Resend domain.

The Plausible script URL is optional. When configured, the portfolio records anonymous
`Project Demo Click`, `CV Download`, and successful `Contact Form Submitted` events.
No contact-form values are included in analytics events.
