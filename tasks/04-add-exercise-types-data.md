# Task 04: Add Exercise Types Data

## Goal

Add the constant JSON-style data source for exercise types.

## Implementation

- Add a constant file for the exercise type list.
- Include these five types:
  - `matrix`
  - `ecuations`
  - `basic_trigonometry`
  - `polinomial_function_representation`
  - `basic_arithmetic`
- Use lowercase machine IDs with `_` between words.
- Store Spanish and English display labels for each type.
- Do not wire the data into screens yet unless needed only to keep imports valid.

## Acceptance Checks

- The app still builds.
- Type data is exported and typed.
- `npm run build` passes.

## Suggested Commit

`feat: add exercise type constants`
