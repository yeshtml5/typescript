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

  //makeList()
  const makeList = () => {
    return state.map((list, index) => {
      return (
        <dl>
          <dt>{list.text}</dt>
        </dl>
      )
    })
  }

  return (
    <React.Fragment>
      <Add />
      {makeList()}
      <List title="d"></List>
    </React.Fragment>
  )
}
export default Index
