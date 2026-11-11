# AI गुरुकुल.SY

A Next.js starter project for an AI-powered learning platform.

## Included in this starter

- **Learn in any language**: Hindi, Hinglish, English, 13 more Indian languages, or type any other language. Switch anytime from the top bar or the classroom; the choice is saved to the student's profile. The AI teacher replies in the chosen language, and voice input/speech playback use the matching language code where the browser supports it
- Login session and saved profile are restored on reload
- AI route hardened: input sanitising, mode whitelist, per-IP rate limit and request timeout

- Responsive student dashboard
- Supabase email/password authentication integration
- First-time student onboarding (class, board, school, optional roll number, subjects, language)
- Smart-search interface with profile context
- AI tutor API route using an OpenAI-compatible chat-completions endpoint
- Browser speech recognition and speech synthesis where supported
- Group study room demo interface and invitation-link prototype
- NCERT library, skills academy, notes, recorded lecture and progress sections
- Initial Supabase SQL schema with Row Level Security policies

## Important scope note

This is a working starter/MVP foundation, not a fully deployed production platform. Real-time multi-user classrooms, synchronized whiteboards, avatar video/lip-sync, generated lecture videos, persistent group invitations, course catalogs, quizzes and admin operations need their service integrations and additional implementation. The interface labels those areas honestly rather than pretending they are already live.

## Requirements

- Node.js 20+
- A Supabase project
- An AI provider with an OpenAI-compatible chat completions API for AI answers

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Configure Supabase

1. Create a Supabase project.
2. Open Project Settings > API.
3. Copy the project URL and anon key into `.env.local`.
4. Run `supabase/schema.sql` in the Supabase SQL Editor.
5. Enable Email authentication in Supabase Auth settings.
6. For local testing, configure the email confirmation behavior appropriate to your test environment.

## Configure AI

Set these server-side variables in `.env.local`:

```env
AI_API_KEY=your_secret_key
AI_API_BASE_URL=https://your-provider.example/v1
AI_MODEL=your-model-name
```

The API key must remain server-side. Never add it to a `NEXT_PUBLIC_` variable or commit `.env.local`.

## Language notes

- The AI answers in whatever language is selected (it depends on your AI model's language ability).
- Interface labels are translated for Hindi, Hinglish and English (`lib/i18n.ts`). Other languages show English labels; add a dictionary there to translate more.
- Browser voice recognition/playback support varies by language and browser; unsupported languages fall back to typing.

## Next integrations

- LiveKit/WebRTC for real group audio/video
- Realtime avatar provider for face animation and lip sync
- Collaborative canvas/whiteboard service
- Video generation and storage pipeline
- Verified textbook/source ingestion and search
- Persistent room creation/join API with invite validation
- Quiz engine, notes export, admin tools and monitoring
- Child privacy, consent, moderation and abuse-report workflows

## Before public launch

Review RLS policies with a security professional, add server-side authorization checks for every room action, implement invitation expiry and abuse controls, add rate limits and cost controls, test accessibility, and obtain appropriate parental consent where required for younger students.
