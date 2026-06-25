import React ,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/TodoSlice';


function AddTodo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const addTodoHandler = (e) => {
        e.preventDefault();
        const trimmed = input.trim();
        if (!trimmed) return;
        dispatch(addTodo(trimmed));
        setInput("");
    }
  return (
     <form onSubmit={addTodoHandler} className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto] items-center">
      <input
        type="text"
        aria-label="Todo text"
        className="w-full bg-slate-950 rounded-3xl border border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-slate-100 py-3 px-4 transition duration-200 ease-in-out shadow-sm shadow-slate-950/20"
        placeholder="Enter a new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-lg font-medium text-white transition hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        Add Todo
      </button>

    </form>
  )
}

export default AddTodo