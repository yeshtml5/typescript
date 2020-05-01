/**
 * Returns the sum of a and b
 * @param {}
 */
import React, {createContext, Dispatch, useReducer, useContext} from 'react'

//export type
//---------------------------------------------------------------------
type PageState = {
  title?: string
  depth?: string[]
}
type Action = {type: 'UPDATE'; info: object} | {type: 'REMOVE'; info: object}
type PageDispatch = Dispatch<Action>
const stateContext = createContext<object | undefined>(undefined)
const dispatchContext = createContext<PageDispatch | undefined>(undefined)
//---------------------------------------------------------------------
/**
 * reducer
 * @param {state}   : object
 * @param {action}  : action type
 */
function reducer(state: PageState, action: Action): object {
  switch (action.type) {
    case 'UPDATE':
      return {...state, ...action.info}
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
export function PageContextProvider({children}: {children: React.ReactNode}) {
  const defaultState: PageState = {
    title: 'title'
  }
  const [state, dispatch] = useReducer(reducer, [defaultState])
  return (
    <dispatchContext.Provider value={dispatch}>
      <stateContext.Provider value={state}>{children}</stateContext.Provider>
    </dispatchContext.Provider>
  )
}
/**
 * useState
 */
export function usePageState() {
  const state = useContext(stateContext)
  if (!state) throw new Error('usePageState not found')
  return state
}
/**
 * useDispatch
 */
export function usePageDispatch() {
  const dispatch = useContext(dispatchContext)
  if (!dispatch) throw new Error('usePageDispatch not found')
  return dispatch
}
