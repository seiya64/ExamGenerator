# Task 11: Add Exams List UI Components

## Goal

Create the reusable presentation components needed by the saved exams list.

## Implementation

- Add an `ExamCardComponent`.
- The component accepts a generated exam input.
- Render:
  - Exam name.
  - Smaller generated date and time below the name.
  - A delete action area that can be wired later.
- Expose outputs for opening the exam and requesting deletion.
- Format dates using the app's active language.
- Keep the card mobile-friendly and usable as a list row on desktop.

## Acceptance Checks

- `ExamCardComponent` renders a provided exam name.
- Generated date and time are visible below the name.
- Open and delete outputs can be triggered independently.
- Component labels and date formatting respond to language changes.
- `npm run build` passes.

## Suggested Commit

`feat: add exams list ui components`
