import type { RootState } from '../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AllTodosModel, TodoModel } from '../store/model.redux'
import { fetchTodos } from './todo.actions'

const initTodos: AllTodosModel = {
  allTodos: [],
  status: 'idle',
  error: '',
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState: initTodos,
  reducers: {
    addTodo: (
      state: AllTodosModel,
      action: PayloadAction<string>
    ): AllTodosModel => {
      const todo = {
        id: new Date().getTime(),
        title: action.payload,
        completed: false,
        userId: 1,
      }
      return {
        allTodos: [...state.allTodos, todo],
        status: 'idle',
        error: '',
      }
    },
    delTodo: (state: AllTodosModel, action: PayloadAction<number>): void => {
      state.status = 'idle'
      state.allTodos = state.allTodos.filter((t) => t.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.status = 'loading'
      state.error = ''
    })
    builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
      state.status = 'idle'
      state.allTodos = payload
      state.error = ''
    })
    builder.addCase(fetchTodos.rejected, (state, action) => {
      console.log(action.error)
      state.status = 'idle'

      state.error = action.error.message || 'Failed to fetch todos'
    })
  },
})
export const { addTodo, delTodo } = todoSlice.actions
export const todoSelector = (state: RootState) => state.todos
export default todoSlice.reducer
