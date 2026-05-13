# Task 14: Add Create Exam UI Components

## Goal

Create the reusable presentation component for editing draft questions before generation.

## Implementation

- Add a `QuestionDraftComponent`.
- The component accepts:
  - Draft question value.
  - Question index.
  - Available exercise types.
  - Validation state.
- Render:
  - Optional question name input.
  - Translated placeholder like `Exercise 1`, `Exercise 2`, etc.
  - Exercise type select populated from type constants.
  - Validation feedback for missing type.
- Expose outputs for draft changes and optional removal.
- Keep form controls accessible and mobile-friendly.

## Acceptance Checks

- The question name placeholder includes the translated numbered default.
- Exercise type options render from the configured type constants.
- Missing-type validation feedback can be displayed.
- Draft changes are emitted to the parent component.
- `npm run build` passes.

## Suggested Commit

`feat: add create exam ui components`
