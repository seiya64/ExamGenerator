# Task 05: Add Dummy Exercises Data

## Goal

Add the dummy exercise pool used by the generator.

## Implementation

- Add a constant JSON-style file with 20 math exercises.
- Each exercise must include:
  - `id`
  - `type`
  - `text.es`
  - `text.en`
- Use only the configured type IDs.
- Distribute exercises across the five types so every type has available questions.
- Keep exercise text realistic and long enough to look like an actual exam prompt.

## Acceptance Checks

- The app still builds.
- All exercises reference valid exercise type IDs.
- `npm run build` passes.

## Suggested Commit

`feat: add dummy exercise pool`
