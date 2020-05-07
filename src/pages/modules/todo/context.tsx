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
export type TodoState = Todo[]
//---------------------------------------------------------------------
type Action = {type: 'CREATE'; text: string} | {type: 'TOGGLE'; id: number} | {type: 'REMOVE'; id: number}
type TodoDispatch = Dispatch<Action>
const TodoStateContext = createContext<TodoState | undefined>(undefined)
const TodoDispatchContext = createContext<TodoDispatch | undefined>(undefined)
//---------------------------------------------------------------------
/**
 * reducer
 * @param state
 * @param action
 */

function todosReducer(state: TodoState, action: Action): TodoState {
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
export function TodoContextProvider({children}: {children: React.ReactNode}) {
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
    <TodoDispatchContext.Provider value={dispatch}>
      <TodoStateContext.Provider value={todos}>{children}</TodoStateContext.Provider>
    </TodoDispatchContext.Provider>
  )
}
/**
 * useState
 */
export function useTodoState() {
  const state = useContext(TodoStateContext)
  if (!state) throw new Error('TodosProvider not found')
  return state
}
/**
 * useDispatch
 */
export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext)
  if (!dispatch) throw new Error('TodosProvider not found')
  return dispatch
}
