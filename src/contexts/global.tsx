/**
 * Returns the sum of a and b
 * @param {}
 */
import React, {createContext, Dispatch, useReducer, useState, useContext} from 'react'

//export type
export type Global = {}
export type GlobalState = Global
//---------------------------------------------------------------------
type Action = {type: 'CREATE'; info: object} | {type: 'UPDATE'; info: object} | {type: 'REMOVE'; info: object}
type GlobalDispatch = Dispatch<Action>
const stateContext = createContext<GlobalState | undefined>(undefined)
const dispatchContext = createContext<GlobalDispatch | undefined>(undefined)

const [user, setUser] = useState({
  isAdmin: false,
  nickname: '',
  email: ''
})
//---------------------------------------------------------------------
/**
 * reducer
 * @param state
 * @param action
 */
function globalReducer(state: object, action: Action): object {
  switch (action.type) {
    case 'CREATE':
      console.log(state)

      return state
    case 'REMOVE':
      return state
    default:
      throw new Error('Unhandled action')
  }
}
//---------------------------------------------------------------------
/**
 * @title Provider
 */
export function GlobalContextProvider({children}: {children: React.ReactNode}) {
  const [state, dispatch] = useReducer(globalReducer, {})

  return (
    <dispatchContext.Provider value={dispatch}>
      <stateContext.Provider value={state}>{children}</stateContext.Provider>
    </dispatchContext.Provider>
  )
}
/**
 * useState
 */
export function useGlobalState() {
  const state = useContext(stateContext)
  if (!state) throw new Error('TodosProvider not found')
  return state
}
/**
 * useDispatch
 */
export function useGlobalDispatch() {
  const dispatch = useContext(dispatchContext)
  if (!dispatch) throw new Error('TodosProvider not found')
  return dispatch
}
