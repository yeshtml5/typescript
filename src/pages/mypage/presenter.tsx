import React, {useRef} from 'react'
import styled from 'styled-components'
import {Layout} from 'pages'

type Props = {}

function Presenter({}: Props) {
  return (
    <Layout>
      <Content>
        <h1>Login</h1>
      </Content>
    </Layout>
  )
}
export default Presenter

const Content = styled.section``
