/**
 * Returns the sum of a and b
 * @param {}
 */
import React, {createContext, Dispatch, useReducer, useContext} from 'react'

//export type

//---------------------------------------------------------------------
type Action = {type: 'CREATE'; info: object} | {type: 'UPDATE'; info: object} | {type: 'REMOVE'; info: object}
type GlobalDispatch = Dispatch<Action>
const stateContext = createContext<object | undefined>(undefined)
const dispatchContext = createContext<GlobalDispatch | undefined>(undefined)
//---------------------------------------------------------------------
/**
 * reducer
 * @param {state}   : object
 * @param {action}  : action type
 */
function globalReducer(state: object, action: Action): object {
  switch (action.type) {
    case 'CREATE':
      return action.info
    case 'UPDATE':
      return Object.assign(state, action.info)
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
  if (!state) throw new Error('useGlobalState not found')
  return state
}
/**
 * useDispatch
 */
export function useGlobalDispatch() {
  const dispatch = useContext(dispatchContext)
  if (!dispatch) throw new Error('useGlobalDispatch not found')
  return dispatch
}
