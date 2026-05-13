# Kanji Practice App

A browser-based kanji study app designed to feel more like a polished product than a simple flashcard page. It combines multiple study modes, chapter-based deck selection, reading practice, and persistent progress tracking in a single local-first interface.

## Overview

This project was built to make self-study sessions faster to start and easier to stick with. Instead of splitting practice across separate tools, the app brings recall drills, writing-focused prompts, and reading review into one responsive UI.

## Highlights

- Desktop-style single-page interface with a focused study layout
- Multiple study modes: flashcards, four-choice quiz, writing mode, and self-rated review
- Chapter-based deck organization by learning source
- Reading practice view for passage-based study
- Progress tracking with streaks, accuracy, due counts, and study-day stats
- Lightweight spaced-review behavior for repeated practice
- Local-first persistence with browser `localStorage`
- Built with plain HTML, CSS, and JavaScript — no framework or build step required

## Tech Stack

- HTML
- CSS
- JavaScript
- Browser `localStorage`

## What This Project Demonstrates

- Frontend product thinking and UI/UX iteration
- State management in vanilla JavaScript
- Designing multi-mode interactive learning flows
- Persisting user progress without a backend
- Structuring a self-contained web app with no framework dependency

## Project Structure

```text
kanji-practice-app/
├── index.html
├── styles.css
├── app.js
└── README.md
```

## Run Locally

Serve the directory with a simple static server:

```bash
cd kanji-practice-app
python3 -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000
```

## Key Design Choices

- **Single-file app logic:** keeps the project easy to run and review for a portfolio setting
- **Local-first persistence:** progress is stored in the browser, so the app works without account setup or external services
- **Mode-based study flow:** supports quick recall, multiple-choice practice, writing-focused review, and reading exposure in one interface
- **Structured content model:** decks are grouped by source and chapter to support targeted studying instead of one large undifferentiated list

## Possible Next Steps

- Import/export support for custom decks
- More advanced spaced repetition logic
- Better writing evaluation and feedback
- Additional study content packs

## Portfolio Note

This repository is the cleaned public version of the project, prepared for portfolio use.
