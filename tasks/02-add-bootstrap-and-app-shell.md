# Task 02: Add Bootstrap And App Shell

## Goal

Add Bootstrap styling support and replace the default Angular screen with the first stable app shell.

## Implementation

- Install and configure Bootstrap and ng-bootstrap if used for Angular-friendly Bootstrap components.
- Import Bootstrap styles globally.
- Add a simple app layout:
  - Header with app name.
  - Main content area with router outlet.
  - Mobile-first max-width container.
- Keep a temporary home/status message visible until real routes are added.

## Acceptance Checks

- App starts without style or dependency errors.
- The shell is visible on mobile and desktop widths.
- `npm run build` passes.

## Suggested Commit

`chore: add bootstrap app shell`
