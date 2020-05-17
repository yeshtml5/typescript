/**
 *  @title Todo
 *
 */
import React from 'react'
import styled from 'styled-components'
//context
import {TodoContextProvider} from './context'
//layout
import Layout from 'pages/common/layout'
//content
import TodoIndex from './content/index'

function Todo() {
  return (
    <TodoContextProvider>
      <Layout>
        <Content>
          <h1>Todo example</h1>
          <TodoIndex name="my_name" title="my_title" />
        </Content>
      </Layout>
    </TodoContextProvider>
  )
}
export default Todo
//---------------------------------------------------------------------
const Content = styled.section``
