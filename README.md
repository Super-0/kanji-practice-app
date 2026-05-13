# Kanji Practice App

A polished browser-based kanji study app built for focused self-study sessions. It combines flashcards, quizzes, writing prompts, reading practice, and lightweight spaced review in a single responsive interface.

## Why this project exists

I wanted a study tool that felt closer to a real app than a barebones flashcard page. The result is a local-first interface designed to make switching between quick recall, writing-heavy practice, and reading review feel fast and natural.

## Features

- Single-page app interface with a desktop-style layout
- Multiple study modes: flashcards, four-choice quiz, writing, and self-rated review
- Deck grouping by source and chapter
- Reading practice mode with passage support
- Lightweight spaced-review behavior
- Progress tracking with streaks, accuracy, due counts, and study-day stats
- Local-first persistence using browser storage
- No framework dependency — built with plain HTML, CSS, and JavaScript

## Tech stack

- HTML
- CSS
- JavaScript
- Browser `localStorage` for persistent progress

## Project structure

```text
kanji-practice-app/
├── index.html
├── styles.css
├── app.js
└── README.md
```

## Run locally

Because the app uses browser modules/assets locally, the easiest way to test it is with a simple static server:

```bash
cd kanji-practice-app
python3 -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000
```

## What this demonstrates

- Product-minded frontend design
- State management without a framework
- Interactive study workflows and mode switching
- UX polish for a real repeated-use tool
- Local persistence and progress tracking

## Future improvements

- Import/export for custom decks
- Better writing evaluation
- More advanced spaced repetition rules
- Expanded content packs

## Notes

This repo is the cleaned public version of the project, prepared for portfolio use.
