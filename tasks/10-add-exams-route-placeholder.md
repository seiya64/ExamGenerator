# Task 10: Add Exams Route Placeholder

## Goal

Create the `/exams` route with a simple status screen before implementing the full list.

## Implementation

- Add routing so:
  - `/exams` displays an exams placeholder component.
  - Empty path redirects to `/exams`.
  - Unknown paths redirect to `/exams` or show a simple not-found redirect.
- Placeholder text should be translated and identify the route, for example `Exams route`.
- Add a visible create button only if it links safely to an existing placeholder or is disabled until the route exists.

## Acceptance Checks

- Navigating to `/` lands on `/exams`.
- Navigating to `/exams` shows the placeholder.
- Language switching still works.
- `npm run build` passes.

## Suggested Commit

`feat: add exams route placeholder`
