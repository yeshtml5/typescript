/**
 * @title
 */
import React from 'react'
import styled from 'styled-components'
//components
import Layout from 'pages/common/layout/'
import {useGlobalState, useGlobalDispatch} from 'contexts/global'
import Greetings from 'pages/guide/typescript'
//context

//
const App: React.FC = () => {
  //context
  const global = useGlobalState()
  const dispatch = useGlobalDispatch()
  //initalize
  //useState
  //---------------------------------------------------------------------
  return (
    <Layout>
      <Greetings name="wanhwi" mark="$" />
      <Content>
        <p>
          <button
            onClick={() => {
              dispatch({type: 'REMOVE', title: 'name'})
            }}>
            'REMOVE'
          </button>
        </p>
        <p>
          <button
            onClick={() => {
              dispatch({type: 'CREATE', title: 'hey ', name: 1111})
            }}>
            'CREATE'
          </button>
        </p>
        <p>
          <button
            onClick={() => {
              dispatch({type: 'UPDATE', title: 'UPDATE ', name: 'react'})
            }}>
            'UPDATE1'
          </button>
        </p>

        <button
          onClick={() => {
            console.log(global)
          }}>
          확인
        </button>
        <h1>Todo 컴포넌트 제작중</h1>
        <div>test</div>
        {/* <counter startCount={3} /> */}
      </Content>
    </Layout>
  )
}
export default App
//---------------------------------------------------------------------

const Content = styled.section`
  p {
    margin-bottom: 10px;
  }
  button {
    display: inline-block;
    padding: 10px;
    font-size: 16px;
    color: #ff0000;
    background: #111;
  }
`
