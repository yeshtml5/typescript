/**
 * Returns the sum of a and b
 * @param {}
 */
import React, {createContext, Dispatch, useReducer, useContext} from 'react'

//export type
export type Todo = {
  id: number
  text: string
  done: boolean
}
export type TodosState = Todo[]
//---------------------------------------------------------------------
type Action = {type: 'CREATE'; text: string} | {type: 'TOGGLE'; id: number} | {type: 'REMOVE'; id: number}
type TodosDispatch = Dispatch<Action>
const TodosStateContext = createContext<TodosState | undefined>(undefined)
const TodosDispatchContext = createContext<TodosDispatch | undefined>(undefined)
//---------------------------------------------------------------------
/**
 * reducer
 * @param state
 * @param action
 */
function todosReducer(state: TodosState, action: Action): TodosState {
  switch (action.type) {
    case 'CREATE':
      const nextId = Math.max(...state.map(todo => todo.id)) + 1
      return state.concat({
        id: nextId,
        text: action.text,
        done: false
      })
    case 'TOGGLE':
      return state.map(todo => (todo.id === action.id ? {...todo, done: !todo.done} : todo))
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id)
    default:
      throw new Error('Unhandled action')
  }
}
//---------------------------------------------------------------------
/**
 * @title Provider
 */
export function TodosContextProvider({children}: {children: React.ReactNode}) {
  const [todos, dispatch] = useReducer(todosReducer, [
    {
      id: 1,
      text: 'Learn Context API',
      done: true
    },
    {
      id: 2,
      text: 'Learn TypeScript',
      done: true
    },
    {
      id: 3,
      text: 'Use Context API with TypeScript',
      done: false
    }
  ])

  return (
    <TodosDispatchContext.Provider value={dispatch}>
      <TodosStateContext.Provider value={todos}>{children}</TodosStateContext.Provider>
    </TodosDispatchContext.Provider>
  )
}
/**
 * useState
 */
export function useTodosState() {
  const state = useContext(TodosStateContext)
  if (!state) throw new Error('TodosProvider not found')
  return state
}
/**
 * useDispatch
 */
export function useTodosDispatch() {
  const dispatch = useContext(TodosDispatchContext)
  if (!dispatch) throw new Error('TodosProvider not found')
  return dispatch
}
