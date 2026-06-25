import './App.css'
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import { Provider } from 'react-redux';
import store from './store/Store';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-slate-950 text-slate-100 px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <header className="space-y-3 text-center">
            <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm font-semibold">
              Todo List
            </p>
            
            <p className="mx-auto max-w-2xl text-slate-400">
              Add, edit, and remove tasks in a responsive layout with subtle depth and vibrant action controls.
            </p>
          </header>

          <main className="rounded-[2rem] border border-slate-800 bg-slate-900/95 shadow-2xl shadow-slate-950/40 p-6">
            <AddTodo />
            <Todo />
          </main>
        </div>
      </div>
    </Provider>
  )
}

export default App
