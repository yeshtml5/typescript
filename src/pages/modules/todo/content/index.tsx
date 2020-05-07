import React from 'react'
//context
import {useTodoState} from '../context'
//conent
import List from './list'

//type
type Index = {
  name: string
  title: string
}
function Index({name, title}: Index) {
  const state = useTodoState()
  console.log(state)
  return (
    <React.Fragment>
      <List title="d"></List>
      <h2>name: {name}</h2>
      <div>title: {title}</div>
      <div>{JSON.stringify(state, null, 1)}</div>
    </React.Fragment>
  )
}
export default Index
