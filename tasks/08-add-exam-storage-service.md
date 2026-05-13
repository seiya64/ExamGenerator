# Task 08: Add Exam Storage Service

## Goal

Add a localStorage-backed service for generated exams.

## Implementation

- Add methods to:
  - Load all exams.
  - Load one exam by ID.
  - Save a generated exam.
  - Delete an exam by ID.
- Use a single versioned localStorage key.
- Safely handle missing, empty, or invalid localStorage content by returning an empty list.
- Keep methods synchronous unless the implementation benefits clearly from observables/signals.

## Acceptance Checks

- The app still builds.
- Unit-testable service API exists.
- Invalid localStorage data does not crash the app.
- `npm run build` passes.

## Suggested Commit

`feat: add local exam storage service`
