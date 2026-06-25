import {configureStore} from "@reduxjs/toolkit";
import  todoReducer from "../features/TodoSlice";

const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
});


if (typeof window !== 'undefined' && window.localStorage) {
    store.subscribe(() => {
        try {
            const state = store.getState();
            const todos = state.todo && state.todo.todos ? state.todo.todos : [];
            localStorage.setItem('todos', JSON.stringify(todos));
        } catch (e) {
            // ignore localStorage write errors
        }
    });
}

export default store;