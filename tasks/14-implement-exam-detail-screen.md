# Task 14: Implement Exam Detail Screen

## Goal

Replace the `/exams/:id` placeholder with the read-only generated exam detail screen.

## Implementation

- Load the generated exam by route ID.
- If the exam does not exist, show a translated not-found state with a link back to `/exams`.
- Render:
  - Exam name.
  - Generated date and time.
  - Each generated question name.
  - Selected exercise type.
  - Generated exercise text in the active language.
- Do not provide edit controls.
- Keep language switching active on the detail screen.

## Acceptance Checks

- Existing exam detail renders all generated questions.
- Missing exam ID shows a friendly not-found state.
- Exercise text switches between Spanish and English.
- No edit controls are present.
- `npm run build` passes.

## Suggested Commit

`feat: implement read-only exam detail`
