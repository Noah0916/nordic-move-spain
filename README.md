# Nordic Move Spain

A production multilingual real-estate platform built with **Next.js, React and TypeScript**.

Nordic Move Spain helps international buyers explore regions, services and property-buying options in Spain. The platform combines multilingual content, interactive lead-generation flows, analytics, database persistence and server-side integrations.

## Live Website

[Visit Nordic Move Spain](https://www.nordicmovespain.com)

---

## Tech Stack

### Frontend
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

### Backend & Data
- Next.js Route Handlers
- Supabase / PostgreSQL
- Resend Email API

### Analytics & SEO
- Google Tag Manager / dataLayer events
- Dynamic sitemap
- robots.txt configuration
- Open Graph metadata
- Twitter metadata
- Multilingual SEO-focused content

### Deployment
- Vercel

---

## Key Features

### Multilingual Platform

Dedicated website content and user flows in:

- English
- Dutch
- German
- Swedish

### Area Match Assessment

A multi-step property and relocation assessment built with React and TypeScript.

Features include:

- Single and multiple-choice questions
- Free-text questions
- Conditional questions
- Dynamic question visibility
- Maximum selection rules
- Mutually exclusive options
- Progress tracking
- Back / next navigation
- Client-side validation
- Email validation
- Consent handling

### Lead Processing

Assessment submissions follow a complete lead-generation workflow:

```text
React / Next.js questionnaire
        ↓
Client-side validation
        ↓
Supabase / PostgreSQL
        ↓
Google Tag Manager conversion event
        ↓
Next.js API route
        ↓
Resend Email API
        ↓
Structured lead notification
```

The assessment is first stored in Supabase. After successful persistence, a conversion event is pushed to the dataLayer and a server-side API route sends a structured email notification.

No name, email address or phone number is included in the analytics conversion event.
