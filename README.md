## Tutoroll Frontend

The frontend application for Tutoroll built with `Next.js`. This repository contains UI flows for authentication, app screens, and current user interactions.

## Implemented Features

- login and registration pages;
- base app shell and route layout;
- current user fetch after authentication;
- backend integration via `axios` and cookie-based auth;
- client-side data fetching/state management with `React Query`;
- mock API support via `MSW` for local development without a running backend.

## Project Structure

- `app/` - App Router routes and layout files;
- `src/features/auth/` - login/register forms, API methods, and hooks;
- `src/features/user/` - current user query and UI widgets;
- `src/shared/` - shared API client, UI components, and models;
- `src/app/providers/` - `QueryProvider` and `MSWProvider`;
- `src/mocks/` - mock handlers for local development.

## Tech Stack

- `Next.js 16`
- `React 19`
- `TypeScript`
- `Axios`
- `@tanstack/react-query`
- `MSW`
- `Tailwind CSS 4`
- `ESLint`

## Frontend-to-Backend Integration

- API base URL is currently set to `http://localhost:8000`;
- requests are sent with `withCredentials: true`, so backend auth cookies are supported;
- successful login redirects to `/user/me`;
- successful registration redirects to `/login`.

## Environment Variables

See `.env.example` for the default template:

```env
NEXT_PUBLIC_MSW_ENABLED=false
NEXT_IMAGE_REMOTE_ORIGINS=https://test.com,http://localhost:1234
```

Description:

- `NEXT_PUBLIC_MSW_ENABLED` - enables browser MSW handlers for local mocks;
- `NEXT_IMAGE_REMOTE_ORIGINS` - allowed remote image origins for `next/image`.

## Local Run

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

App URL: `http://localhost:3000`.

## Development Modes

### With backend

- run backend at `http://localhost:8000`;
- keep `NEXT_PUBLIC_MSW_ENABLED=false`.

### Without backend

- set `NEXT_PUBLIC_MSW_ENABLED=true`;
- frontend will use handlers from `src/mocks/`.

## Important Notes

- this README reflects the actual project setup, not the default `create-next-app` template;
- values in `.env.example` are placeholders;
- some mock data is used only for local UI development and testing.
