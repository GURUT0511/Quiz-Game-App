# Quiz Game

A small browser-based quiz app that displays five questions with multiple-choice answers. Options are shuffled for each question, and the app tracks your score as you progress.

This project is a simple demo focused on practicing:
- DOM manipulation with vanilla JavaScript
- Handling JSON-like data structures
- Event listeners and basic UI flow

## Features
- 5-question quiz with shuffled options
- Score updates on each answer (correct answers add +1; incorrect subtract 0.25)
- "Next" button to advance or finish the quiz
- No build step — runs in the browser

## Files
- `index.html` — single-page entry that loads the app
- `quiz.js` — quiz data and front-end logic (questions, shuffling, event handling)
- `style.css` — styles for the quiz UI
- `README.md` — this file

## How to run
1. Clone the repository:
   ```bash
   git clone https://github.com/GURUT0511/Quiz-Game-App.git
   cd Quiz-Game-App
   ```

2. Open `index.html` in your browser, or serve the folder with a static server:
   ```bash
   # Option A: open directly (double click index.html)
   # Option B: serve via Python HTTP server
   python -m http.server 8000
   # then open http://localhost:8000
   ```

## Implementation notes
- Questions are stored in `quiz.js` as the `questJson` array.
- `quiz.js` shuffles options using a Fisher–Yates shuffle before rendering.
- Score increments by 1 for a correct answer and decreases by 0.25 for a wrong one.
- When all questions are answered, the app shows "Quiz Completed!!" and removes the Next button.

## Possible improvements
- Move questions to an external JSON file and fetch them.
- Add persistent high scores (localStorage).
- Add accessibility improvements (keyboard navigation, ARIA attributes).
- Add visual feedback for correct/incorrect selections and a summary screen.

## Contributing
Feel free to open issues or create PRs to add features, improve styling, or restructure the quiz data.

## License
Add a license file if you want to make the project open source (e.g., MIT).
