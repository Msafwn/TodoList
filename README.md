# TodoList

A simple React + Vite todo application with Redux Toolkit state management and localStorage persistence.

## Features

- Add new todos with a clean UI
- Edit existing todos inline
- Mark todos complete and reopen them
- Delete todos instantly
- Persist todo state across browser refreshes using `localStorage`
- Responsive layout with Tailwind CSS-style classes

## Project structure

- `src/App.jsx` — application shell and page layout
- `src/components/AddTodo.jsx` — add todo form
- `src/components/Todo.jsx` — todo list, edit, and delete UI
- `src/features/TodoSlice.js` — Redux Toolkit slice with add/update/remove actions
- `src/store/Store.js` — Redux store configuration and localStorage persistence

## Requirements

- Node.js 18+ recommended
- npm or yarn installed

## Setup

```bash
cd TodoList
npm install
```

## Run locally

```bash
npm run dev
```

Then open the local URL printed by Vite in your browser.

## Build for production

```bash
npm run build
```

## GitHub push

Make sure your repository is connected to a remote before pushing:

```bash
git remote add origin <GIT_URL>
git branch -M main
git push -u origin main
```

## Notes

- The app stores todos in browser `localStorage`, so they persist between page loads.
- Empty todo items are prevented by trimming the input before saving.
