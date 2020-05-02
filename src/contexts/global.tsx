/**
 * Returns the sum of a and b
 * @param {}
 */
import React, {createContext, Dispatch, useReducer, useContext} from 'react'

//export type
//---------------------------------------------------------------------
//type
type GlobalState = object | undefined | null
type Action = {type: 'CREATE'; info: object} | {type: 'UPDATE'; info: object} | {type: 'REMOVE'; info: object | null}
type GlobalDispatch = Dispatch<Action>
//context
const stateContext = createContext<object | undefined>(undefined)
const dispatchContext = createContext<GlobalDispatch | undefined>(undefined)
//---------------------------------------------------------------------
/**
 * reducer
 * @param {state}   : object
 * @param {action}  : action type
 */
function globalReducer(state: GlobalState, action: Action): object {
  switch (action.type) {
    case 'CREATE':
      return action.info
    case 'UPDATE':
      return {...state, ...action.info}
    case 'REMOVE':
      return {}
    default:
      throw new Error('Unhandled action')
  }
}
//---------------------------------------------------------------------
/**
 *  Provider
 */
export function GlobalContextProvider({children}: {children: React.ReactNode}) {
  const defaultState = {
    auth: '.../../'
  }
  const [state, dispatch] = useReducer(globalReducer, defaultState)
  return (
    <dispatchContext.Provider value={dispatch}>
      <stateContext.Provider value={state}>{children}</stateContext.Provider>
    </dispatchContext.Provider>
  )
}
/**
 *  useState
 *
 */
export function useGlobalState() {
  const state = useContext(stateContext)
  if (!state) throw new Error('useGlobalState not found')
  return state
}
/**
 *  useDispatch
 */
export function useGlobalDispatch() {
  const dispatch = useContext(dispatchContext)
  if (!dispatch) throw new Error('useGlobalDispatch not found')
  return dispatch
}
