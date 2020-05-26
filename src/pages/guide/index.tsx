import React from 'react'
import styled from 'styled-components'
//content
import Layout from 'pages/common/layout'
//pages
import Hooks from './hooks'
//interface
interface Props {
  type: string
  match: {
    path: string
    url: string
    params: {
      id: string
    }
  }
}
const Guide: React.FC<Props> = ({match, type}) => {
  console.log(match.params)
  //---------------------------------------------------------------------
  const makeContents = (mode: string = '') => {
    switch (true) {
      case mode === 'hooks':
        return <Hooks type="" />
        break
      default:
        return <h1>값이 없습니다</h1>
        break
    }
  }
  return (
    <Layout>
      <Content>{makeContents(match.params.id)}</Content>
    </Layout>
  )
}
export default Guide
//---------------------------------------------------------------------
const Content = styled.section`
  span {
    color: #ff0000;
    font-size: 24px;
  }
`
