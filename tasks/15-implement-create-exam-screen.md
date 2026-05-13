# Task 15: Implement Create Exam Screen

## Goal

Replace the `/exams/new` placeholder with the create exam workflow.

## Implementation

- Add a form for exam name.
- Add question draft list behavior:
  - Button to add a new question.
  - Each question is rendered with the `QuestionDraftComponent`.
  - Name input placeholder uses `Exercise 1`, `Exercise 2`, etc. in the active language.
  - Exercise type select is populated from type constants.
- Show the generate button only when there are more than one question.
- Validate:
  - Exam name is required.
  - At least two questions are required.
  - Every question must have a selected type.
- On valid generation:
  - Use the exam generator service.
  - Save the generated exam with the storage service.
  - Navigate to the detail route if it exists; otherwise navigate back to `/exams` until Task 16 is done.

## Acceptance Checks

- User can add questions and select types.
- Generate is hidden until at least two questions exist.
- Invalid form states show translated feedback.
- Draft questions are rendered through the shared question draft component.
- Valid generation saves an exam.
- App remains buildable and deployable.
- `npm run build` passes.

## Suggested Commit

`feat: implement create exam screen`
