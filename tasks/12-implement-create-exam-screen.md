# Task 12: Implement Create Exam Screen

## Goal

Replace the `/exams/new` placeholder with the create exam workflow.

## Implementation

- Add a form for exam name.
- Add question draft list behavior:
  - Button to add a new question.
  - Each question has a name input.
  - Name input placeholder uses `Exercise 1`, `Exercise 2`, etc. in the active language.
  - Each question has an exercise type select populated from type constants.
- Show the generate button only when there are more than one question.
- Validate:
  - Exam name is required.
  - At least two questions are required.
  - Every question must have a selected type.
- On valid generation:
  - Use the exam generator service.
  - Save the generated exam with the storage service.
  - Navigate to the detail route if it exists; otherwise navigate back to `/exams` until Task 13 is done.

## Acceptance Checks

- User can add questions and select types.
- Generate is hidden until at least two questions exist.
- Invalid form states show translated feedback.
- Valid generation saves an exam.
- App remains buildable and deployable.
- `npm run build` passes.

## Suggested Commit

`feat: implement create exam screen`
