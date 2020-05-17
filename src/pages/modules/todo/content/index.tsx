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

const Todo: React.FC<Index> = ({name, title}) => {
  console.log(name)
  const state = useTodoState()
  console.log(state)
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  //makeList()
  const makeList = () => {
    return state.map((list, index) => {
      return (
        <dl key={index}>
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
export default Todo
