# Task 09: Add Exam Generator Service

## Goal

Add the service that turns a draft exam into an immutable generated exam.

## Implementation

- Accept an exam name and a list of draft questions.
- Require the caller to provide valid data; UI validation will live in the create screen.
- For each draft question:
  - Use the entered name if present.
  - Otherwise generate the localized default label such as `Exercise 1`.
  - Select one random exercise matching the selected type.
  - Avoid duplicate exercise IDs when possible.
  - Store a bilingual text snapshot on the generated question.
- Add `id` and `createdAt` to the generated exam.

## Acceptance Checks

- The app still builds.
- Generated questions always match the selected type when exercises exist.
- Duplicate exercise IDs are avoided when enough matching exercises exist.
- `npm run build` passes.

## Suggested Commit

`feat: add exam generation service`
