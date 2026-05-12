# Task 03: Add Domain Models

## Goal

Add the TypeScript interfaces used by the rest of the application without changing behavior.

## Implementation

- Add models for:
  - `ExerciseType`
  - `Exercise`
  - `ExamDraftQuestion`
  - `GeneratedExam`
  - `GeneratedQuestion`
- Use clear IDs for exercise types and generated exams.
- Keep bilingual text as `{ es: string; en: string }`.
- Keep generated exam questions immutable by model intent.

## Acceptance Checks

- The app still builds.
- No screen behavior changes are required.
- `npm run build` passes.

## Suggested Commit

`feat: add exam domain models`
