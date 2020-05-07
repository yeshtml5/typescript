import React from 'react'
import styled from 'styled-components'
//context
import {useTodoState, useTodoDispatch} from '../context'

function Add() {
  //context
  const state = useTodoState()
  const dispatch = useTodoDispatch()
  //---------------------------------------------------------------------
  const addTodo = () => {
    console.log(state)
    //dispatch({type: 'CREATE', info: {text: 'name'}})
  }
  return (
    <Content>
      <button
        onClick={() => {
          addTodo()
        }}>
        클릭
      </button>
    </Content>
  )
}
export default Add
//---------------------------------------------------------------------
const Content = styled.div``
