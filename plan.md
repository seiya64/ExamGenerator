# Angular Exam Generator Plan

## Summary

Build a new Angular v21 stable application in this empty repo, using TypeScript, Bootstrap/ng-bootstrap styling, mobile-first responsive layouts, and runtime i18n with Spanish as the default language and English available from an in-app language switcher.

The app will manage generated exams entirely in `localStorage`. Users can list exams, create a new exam from selected question types, view generated exams as read-only, and delete exams after confirmation.

## Key Changes

- Scaffold a standalone Angular app with routing, SCSS, Bootstrap styles, and Bootstrap-compatible Angular components.
- Add routes:
  - `/exams`: saved exams list, default route.
  - `/exams/new`: create exam screen.
  - `/exams/:id`: read-only generated exam detail.
- Add runtime translations:
  - Spanish default.
  - English alternative.
  - UI labels, placeholders, validation messages, modal text, empty states, and exercise text are bilingual.
- Use a playful academic visual direction:
  - Mobile-first layout.
  - Clean cards/list rows for exams and questions.
  - Comfortable desktop width so it still looks polished on PC.
  - Friendly color accents without making the app childish.

## Data And Behavior

- Store exercise types in a constant JSON-style file:
  - `matrix`
  - `ecuations`
  - `basic trigonometry`
  - `polinomial function representation`
  - `basic arithmetic`
- Store a dummy exercise pool in a constant JSON-style file with 20 math exercises.
  - Each exercise has `id`, `type`, and bilingual text: `{ es, en }`.
  - Exercise types are distributed/randomized across the five configured types.
- Exam creation:
  - Requires an exam name.
  - Requires at least two questions before generation.
  - Each new question has an optional name input with placeholder `Exercise 1`, `Exercise 2`, etc. translated by language.
  - Each question has a type selector.
  - If a question name is blank, the generated exam uses the default exercise label for its position.
- Generation:
  - For each configured question, choose one random exercise matching the selected type.
  - Avoid duplicate exercise IDs within the same generated exam when possible.
  - Save generated exams to `localStorage`.
  - Navigate to the read-only exam detail screen after saving.
- Exam list:
  - Load exams from `localStorage`.
  - Show a friendly empty state plus create button when no exams exist.
  - Each exam row/card shows the exam name and, below it in smaller text, the generation date and time.
  - Format generated dates like `1st May 2026 10:26` in English, with an equivalent localized Spanish format when the app language is Spanish.
  - Each exam row/card opens the read-only exam detail.
  - Each exam has a delete button.
  - Delete opens a Bootstrap confirmation modal before removing the exam.
- Generated exams:
  - Cannot be edited.
  - Show exam name.
  - For each question, show question name, selected type, and generated exercise text.

## Interfaces

- `ExerciseType`: string/id plus translated display label.
- `Exercise`: `id`, `type`, `text.es`, `text.en`.
- `ExamDraftQuestion`: temporary create-screen question name and selected type.
- `GeneratedExam`: `id`, `name`, `createdAt`, and generated questions.
- `GeneratedQuestion`: `name`, `type`, `exerciseId`, and stored bilingual exercise text snapshot so old exams still render even if the dummy pool changes later.

## Test Plan

- Unit tests:
  - Exam storage service saves, loads, deletes, and handles empty/corrupt storage safely.
  - Exam generation selects exercises matching the requested type.
  - Duplicate exercise selection is avoided when enough exercises exist.
  - Blank question names fall back to numbered default labels.
- Component tests:
  - Exam list empty state and populated state.
  - Create exam validation for missing name and fewer than two questions.
  - Delete confirmation modal behavior.
  - Read-only exam detail renders saved questions.
- Manual checks:
  - Spanish is default on first load.
  - English switch updates UI and exercise text.
  - Mobile viewport layout is comfortable.
  - Desktop viewport does not look stretched or sparse.

## Assumptions

- Use runtime JSON-based i18n rather than Angular compile-time localized builds.
- Use Angular v21 stable, not Angular v22 pre-release.
- Use `localStorage` only; no backend, login, or sync in v1.
- No sample exams are preloaded; only the dummy exercise pool is bundled.
- Generated exams are immutable except deletion.
