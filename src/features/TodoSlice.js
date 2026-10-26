import { createSelector, createSlice, nanoid } from "@reduxjs/toolkit";

const loadTodos = () => {
  if (typeof window === 'undefined') return [{ id: nanoid(), text: "Hello, World!" }];
  try {
    const raw = localStorage.getItem('todos');
    if (!raw) return [{ id: nanoid(), text: "Hello, World!" }];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [{ id: nanoid(), text: "Hello, World!" }];
    return parsed;
  } catch (e) {
    return [{ id: nanoid(), text: "Hello, World!" }];
  }
};

const initialState = {
    todos: loadTodos(),
}
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
        const todo = { 
            id: nanoid(), 
            text: action.payload,
            completed: false,
        }
      state.todos.push(todo);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {

      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, updateTodo } = todoSlice.actions;

export const selectTodoSummary = createSelector(
  [(state) => state.todo.todos],
  (todos) => ({
    todos,
    completedCount: todos.filter((todo) => todo.completed).length,
  })
);

export default todoSlice.reducer;