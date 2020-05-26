import React from 'react'
import styled from 'styled-components'
//content
import Layout from 'pages/common/layout'
//interface
interface Props {
  type: string
}
const Guide: React.FC<Props> = ({type}) => {
  //---------------------------------------------------------------------
  return (
    <Layout>
      <Content>
        <h1>NODE_ENV: {process.env.NODE_ENV + ''}</h1>
      </Content>
    </Layout>
  )
}
export default Guide
//---------------------------------------------------------------------
const Content = styled.section``
