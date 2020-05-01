/**
 * @title
 */
import React from 'react'
import styled from 'styled-components'
//components
import Layout from 'pages/common/layout/'
import {useGlobalState, useGlobalDispatch} from 'contexts/global'
//context

//
const App: React.FC = () => {
  //---------------------------------------------------------------------
  //context
  const global = useGlobalState()
  const dispatch = useGlobalDispatch()
  //initalize
  //useState
  //---------------------------------------------------------------------
  return (
    <Layout>
      <Content>
        <p>
          <button
            onClick={() => {
              dispatch({type: 'REMOVE', info: {title: 'name'}})
            }}>
            'REMOVE'
          </button>
        </p>
        <p>
          <button
            onClick={() => {
              dispatch({type: 'CREATE', info: {title: 'hey ', name: 111}})
            }}>
            'CREATE'
          </button>
        </p>
        <p>
          <button
            onClick={() => {
              dispatch({type: 'UPDATE', info: {title: 'UPDATE ', name: 'react'}})
            }}>
            'UPDATE'
          </button>
        </p>

        <button
          onClick={() => {
            console.log(global)
          }}>
          확인
        </button>

        {/* <counter startCount={3} /> */}
        <h1>타이틀1</h1>
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
