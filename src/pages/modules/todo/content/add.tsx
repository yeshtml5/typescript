import React, {useState} from 'react'
import styled from 'styled-components'
//context
import {useTodoState, useTodoDispatch} from '../context'

function Add() {
  //context
  const state = useTodoState()
  const dispatch = useTodoDispatch()
  //useState
  const [value, setValue] = useState('')
  //---------------------------------------------------------------------
  const addTodo = (e: React.MouseEvent): void => {
    dispatch({type: 'CREATE', text: value})
  }
  return (
    <Content>
      <input type="text" name="title" placeholder="입력해주세요" onChange={e => setValue(e.target.value)} />
      <button onClick={addTodo}>클릭</button>
    </Content>
  )
}
export default Add
//---------------------------------------------------------------------
const Content = styled.div``
