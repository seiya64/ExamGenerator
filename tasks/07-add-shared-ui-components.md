# Task 07: Add Shared UI Components

## Goal

Create reusable UI building blocks that can be shared by the route screens.

## Implementation

- Add a `LanguageSwitcherComponent` for switching between Spanish and English.
- Add an `EmptyStateComponent` for friendly empty, missing, or unavailable states.
- Wire the language switcher into the app shell.
- Keep both components standalone and presentation-focused.
- Use translated labels and messages through the runtime i18n service.
- Keep the app shell mobile-first and Bootstrap-compatible.

## Acceptance Checks

- The language switcher is visible from every route.
- Switching language still updates translated shell text.
- The empty state component can render a title, optional body text, and optional action.
- App still starts and shows a useful screen.
- `npm run build` passes.

## Suggested Commit

`feat: add shared ui components`
