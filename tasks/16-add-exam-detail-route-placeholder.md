# Task 16: Add Exam Detail Route Placeholder

## Goal

Create the `/exams/:id` route with a simple status screen before implementing the full read-only detail.

## Implementation

- Add `/exams/:id` route.
- Add a placeholder component with translated status text, for example `Exam detail route`.
- Update exam list card navigation so clicking a saved exam opens `/exams/:id`.
- Update create flow so successful generation navigates to `/exams/:id`.

## Acceptance Checks

- `/exams/:id` shows a placeholder instead of a blank page.
- Saved exam cards navigate to the detail placeholder.
- Newly generated exams navigate to the detail placeholder.
- `npm run build` passes.

## Suggested Commit

`feat: add exam detail route placeholder`
