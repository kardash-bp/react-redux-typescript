import React from 'react'
import { useAppDispatch } from '../store/hooks.redux'
import { TodoModel } from '../store/model.redux'
import { delTodo } from './todoSlice'

const Todo = ({ todo }: { todo: TodoModel }) => {
  const dispatch = useAppDispatch()
  return (
    <li>
      {todo.title}{' '}
      <button onClick={() => dispatch(delTodo(todo.id))}>
        <span style={{ color: ' red' }}> del</span>{' '}
      </button>
    </li>
  )
}

export default Todo
