# Task 06: Add Runtime I18n

## Goal

Add runtime Spanish/English translation support with Spanish as the default language.

## Implementation

- Add a translation service or lightweight runtime i18n setup.
- Default language to Spanish.
- Add English as the second language.
- Persist the selected language if simple and low-risk, otherwise keep it in memory for this task.
- Add a visible language switcher in the app shell.
- Translate the app shell and temporary route/status text.

## Acceptance Checks

- App opens in Spanish by default.
- User can switch to English without rebuilding.
- Existing visible text changes language.
- `npm run build` passes.

## Suggested Commit

`feat: add runtime translations`
