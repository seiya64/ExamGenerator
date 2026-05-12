# Task 10: Implement Exams List Screen

## Goal

Replace the `/exams` placeholder with the saved exam list screen.

## Implementation

- Load exams from the exam storage service.
- Show a friendly empty state plus create button when there are no exams.
- Show each exam as a mobile-friendly card/list item.
- Each card must show:
  - Exam name.
  - Smaller generated date and time below the name.
- Date format:
  - English example: `1st May 2026 10:26`.
  - Spanish uses an equivalent localized format.
- Card click navigates to the detail route only if that route exists; otherwise keep detail navigation disabled until Task 13.
- The create button navigates only if the create route exists; otherwise keep it disabled until Task 11.

## Acceptance Checks

- Empty state renders when localStorage has no exams.
- Existing localStorage exams render as cards.
- Exam date and time are visible below the exam name.
- App still builds and can be deployed.
- `npm run build` passes.

## Suggested Commit

`feat: implement exams list screen`
