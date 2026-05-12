# Task 17: Add Focused Tests

## Goal

Add focused automated tests for the app behavior with the highest regression risk.

## Implementation

- Add unit tests for:
  - Exam storage service load/save/delete.
  - Invalid localStorage content fallback.
  - Exam generator matching selected type.
  - Duplicate exercise avoidance when possible.
  - Blank question name fallback.
- Add component tests for:
  - Exams list empty and populated states.
  - Create exam validation.
  - Delete confirmation behavior.
  - Read-only detail rendering.
- Keep tests scoped and stable.

## Acceptance Checks

- `npm test` or the configured test command passes.
- `npm run build` passes.
- Tests cover the main localStorage and generation behavior.

## Suggested Commit

`test: add focused exam generator coverage`
