export {}
// /*
// import React, {useContext, useState} from 'react'
// import {Context} from 'context'

// const store = useContext(Context)

//  */
// import React, {useEffect, useState, createContext} from 'react'

// interface IContext {
//   state: object
//   action: object
// }

// //Context
// const Context = React.createContext<IContext | null>(null)
// const {Provider, Consumer} = Context
// //
// const GlobalProvider = (props: object) => {
//   //initalize

//   //state
//   //---------------------------------------------------------------------
//   const [state, setState] = useState({title: 'my-title', isSub: false})
//   //---------------------------------------------------------------------

//   //useEffect
//   useEffect(() => {
//     if (state !== undefined && state !== null) {
//     }
//   }, [state])
//   //action
//   //---------------------------------------------------------------------
//   const action = {
//     //updateState
//     updateState: obj => {
//       setState(state => ({...state, ...obj}))
//     }
//     //end
//   }
//   //---------------------------------------------------------------------
//   const value = {state, action}
//   return <Provider value={value}>{props.children}</Provider>
// }
// export {Context, GlobalProvider}
