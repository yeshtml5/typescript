/**
 * @title
 */
import React from 'react'
import styled from 'styled-components'
import {Layout} from 'pages'
import {useGlobalStore} from 'contexts'

function Presenter() {
  const [value, setValue] = useGlobalStore()
  return (
    <Layout>
      <Content>
        <button
          onClick={() => {
            console.log(value)
          }}>
          확인
        </button>
        <h1>Todo 컴포넌트 제작중</h1>
        <pre>{JSON.stringify(value, null, 1)}</pre>
      </Content>
    </Layout>
  )
}
export default Presenter

const Content = styled.section`
  p {
    margin-bottom: 10px;
  }
  button {
    display: block;
    margin-bottom: 10px;
    padding: 10px;
    font-size: 16px;
    color: #ff0000;
    background: #111;
  }
`
