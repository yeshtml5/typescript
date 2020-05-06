import React from 'react'
//context
import {useTodosState} from '../context'

//type
type Index = {
  name: string
  title: string
}
function Index({name, title}: Index) {
  const state = useTodosState()
  console.log(state)
  return (
    <React.Fragment>
      <h2>name: {name}</h2>
      <div>title: {title}</div>
      <div>{JSON.stringify(state, null, 1)}</div>
    </React.Fragment>
  )
}
export default Index
