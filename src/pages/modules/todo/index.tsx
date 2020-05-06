/**
 *  @title Todo
 *
 */
import React from 'react'
//layout
import Layout from 'pages/common/layout'
//content
import Index from './content/index'

function Todo() {
  return (
    <Layout>
      <h1>TodoS</h1>
      <Index name="my_name" title="my_title" />
    </Layout>
  )
}
export default Todo
