import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, selectTodoSummary, toggleTodo, updateTodo } from '../features/TodoSlice'

function Todo() {
  const dispatch = useDispatch()
  const { todos, completedCount } = useSelector(selectTodoSummary)
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState("")

  const startEdit = (todo) => {
    setEditingId(todo.id)
    setEditText(todo.text)
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditText("")
  }

  const saveEdit = (id) => {
    const trimmed = editText.trim()
    if (!trimmed) return
    dispatch(updateTodo({ id, text: trimmed }))
    cancelEdit()
  }

  return (
    <>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-400">Task board</p>
          <h2 className="text-2xl font-semibold text-white">Your todos</h2>
        </div>
        <div className="rounded-full bg-slate-950 px-4 py-2 text-sm text-slate-300 shadow-inner shadow-slate-950/20">
          {todos.length} item{todos.length === 1 ? '' : 's'} · {completedCount} completed
        </div>
      </div>

      <ul className="mt-6 space-y-4">
        {todos.length === 0 ? (
          <li className="rounded-3xl border border-dashed border-slate-700 bg-slate-900/80 px-6 py-10 text-center text-slate-400">
            No todos yet. Add a task to get started.
          </li>
        ) : (
          todos.map((todo) => (
            <li
              className="rounded-3xl border border-slate-800 bg-slate-950/90 p-4 shadow-sm shadow-slate-950/20"
              key={todo.id}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                {editingId === todo.id ? (
                  <input
                    type="text"
                    className="w-full bg-slate-900 rounded-3xl border border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-slate-100 py-3 px-4 transition duration-200 ease-in-out"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                ) : (
                  <div
                    className={`text-base sm:text-lg ${todo.completed ? 'text-slate-500 line-through' : 'text-slate-100'}`}
                  >
                    {todo.text}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 justify-start sm:justify-end">
                  {editingId === todo.id ? (
                    <>
                      <button
                        type="button"
                        onClick={() => saveEdit(todo.id)}
                        className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={cancelEdit}
                        className="rounded-full bg-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => dispatch(toggleTodo(todo.id))}
                        aria-pressed={Boolean(todo.completed)}
                        className={`rounded-full px-4 py-2 text-sm font-medium text-white transition focus:outline-none focus:ring-2 ${
                          todo.completed
                            ? 'bg-slate-700 hover:bg-slate-600 focus:ring-slate-500'
                            : 'bg-emerald-500 hover:bg-emerald-600 focus:ring-emerald-400'
                        }`}
                      >
                        {todo.completed ? 'Reopen' : 'Complete'}
                      </button>
                      <button
                        type="button"
                        onClick={() => startEdit(todo)}
                        className="rounded-full bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => dispatch(removeTodo(todo.id))}
                        className="rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </>
  )
}

export default Todo