import { FormEvent, useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks.redux'
import Todo from './Todo'
import { fetchTodos } from './todo.actions'
import { addTodo } from './todoSlice'

const Todos = () => {
  const dispatch = useAppDispatch()
  const globalState = useAppSelector((state) => state.todos)
  const [text, setText] = useState('')
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!text) return
    console.log(text)
    dispatch(addTodo(text))
    setText('')
  }
  const { allTodos, status, error } = globalState
  useEffect(() => {
    dispatch(fetchTodos())
  }, [])
  if (status === 'loading') {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type='submit'>Add New</button>
      </form>
      <hr />
      <h3>All Todos</h3>
      <ul role='list'>
        {allTodos.length === 0
          ? 'No todos yet'
          : allTodos.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </ul>
    </div>
  )
}

export default Todos
