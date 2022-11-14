import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import todoReducer from '../todos/todoSlice'
import { TodoModel } from './model.redux'
export const store = configureStore({
  reducer: { todos: todoReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
