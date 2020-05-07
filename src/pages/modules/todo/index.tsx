/**
 *  @title Todo
 *
 */
import React from 'react'
//context
import {TodoContextProvider} from './context'
//layout
import Layout from 'pages/common/layout'
//content
import Index from './content/index'

function Todo() {
  return (
    <TodoContextProvider>
      <Layout>
        <h1>TodoS</h1>
        <Index name="my_name" title="my_title" />
      </Layout>
    </TodoContextProvider>
  )
}
export default Todo
