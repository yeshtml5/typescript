import React from 'react'
import styled from 'styled-components'
import Layout from 'pages/common/layout'
import Hooks from './hooks'

type Props = {
  type: string
  match: {
    path: string
    url: string
    params: {
      id: string
    }
  }
}

function Guide({match, type}: Props) {
  const {id} = match.params
  const makeContents = (mode: string = '') => {
    switch (true) {
      case mode === 'hooks':
        return <Hooks type="" />
      default:
        return <h1>값이 없습니다</h1>
    }
  }
  return (
    <Layout>
      <Content>{makeContents(id)}</Content>
    </Layout>
  )
}
export default Guide

const Content = styled.section`
  span {
    color: #ff0000;
    font-size: 24px;
  }
`
