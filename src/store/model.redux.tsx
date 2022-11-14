export interface TodoModel {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface AllTodosModel {
  allTodos: TodoModel[]
  status: 'loading' | 'idle'
  error: string
}
