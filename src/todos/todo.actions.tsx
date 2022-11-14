import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { AppThunk } from '../store'
import { AllTodosModel, TodoModel } from '../store/model.redux'

type FetchTodosError = {
  error: string
}

export const fetchTodos = createAsyncThunk<
  TodoModel[],
  void,
  { rejectValue: FetchTodosError }
>('todos/fetchTodos', async (_, thunkAPI) => {
  try {
    const res = await axios.get(
      'https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5'
    )
    return res.data
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message)
  }
})
