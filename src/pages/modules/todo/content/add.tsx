import React from 'react'
import styled from 'styled-components'
//context
import {useTodoState, useTodoDispatch} from '../context'

function Add() {
  //context
  const state = useTodoState()
  const dispatch = useTodoDispatch()
  //---------------------------------------------------------------------
  const addTodo: React.MouseEvent<HTMLButtonElement, MouseEvent> = () => {
    alert('2')
  }
  return (
    <Content>
      <button
        onClick={() => {
          alert('2')
        }}>
        클릭
      </button>
    </Content>
  )
}
export default Add
//---------------------------------------------------------------------
const Content = styled.div``
