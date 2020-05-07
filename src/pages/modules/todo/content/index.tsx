import React from 'react'
//context
import {useTodoState} from '../context'
//conent
import List from './list'
import Add from './add'

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
      <Add />
      <List title="d"></List>
    </React.Fragment>
  )
}
export default Index
