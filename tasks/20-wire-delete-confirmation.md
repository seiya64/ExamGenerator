# Task 20: Wire Delete Confirmation

## Goal

Wire the reusable confirmation modal into safe exam deletion from the exam list.

## Implementation

- Add a delete button to each exam card.
- Prevent the delete button click from triggering card navigation.
- Open the `DeleteExamModalComponent` before deleting.
- Confirmation modal text must be translated.
- On confirm:
  - Delete the exam from localStorage through the storage service.
  - Refresh the list.
  - Return to the empty state if no exams remain.
- On cancel, keep the exam unchanged.

## Acceptance Checks

- Delete button is visible on each exam card.
- Canceling the modal does not delete the exam.
- Confirming the modal deletes only the selected exam.
- The list updates immediately after deletion.
- Delete behavior uses the reusable delete confirmation component.
- `npm run build` passes.

## Suggested Commit

`feat: wire exam delete confirmation`
