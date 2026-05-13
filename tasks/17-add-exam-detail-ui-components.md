# Task 17: Add Exam Detail UI Components

## Goal

Create the reusable read-only component for rendering generated questions.

## Implementation

- Add a `GeneratedQuestionComponent`.
- The component accepts a generated question input and its display index.
- Render:
  - Question name.
  - Selected exercise type.
  - Generated exercise text in the active language.
- Do not include edit controls.
- Use the stored bilingual exercise text snapshot from the generated exam.
- Keep the layout readable on mobile and compact on desktop.

## Acceptance Checks

- Question name, exercise type, and exercise text render for a provided question.
- Exercise text switches when the app language changes.
- No editable inputs or edit buttons are present.
- `npm run build` passes.

## Suggested Commit

`feat: add exam detail ui components`
