# Task 19: Add Delete Confirmation Component

## Goal

Create the reusable confirmation modal used before deleting saved exams.

## Implementation

- Add a `DeleteExamModalComponent` using Bootstrap/ng-bootstrap modal patterns.
- The component accepts the selected exam name.
- Render translated title, body text, cancel action, and destructive confirm action.
- Emit or return a clear confirm/cancel result.
- Keep the component presentation-focused; do not delete from storage in this task.

## Acceptance Checks

- Modal renders the selected exam name.
- Cancel and confirm actions are clearly distinguishable.
- Modal text is translated.
- The component can be opened from a parent component.
- `npm run build` passes.

## Suggested Commit

`feat: add delete confirmation component`
