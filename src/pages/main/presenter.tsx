/**
 * @title
 */
import React from 'react'
import styled from 'styled-components'
import {Layout} from 'pages'
import {useGlobalState, useGlobalDispatch} from 'contexts/global'

function Presenter() {
  //context
  const global = useGlobalState()
  const dispatch = useGlobalDispatch()
  //initalize
  //useState
  return (
    <Layout>
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
            }}></button>
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
        <div>
          <button
            onClick={() => {
              let newVariable = window.navigator as any
              if (newVariable.share) {
                newVariable
                  .share({
                    title: '공유하기 예제',
                    text: '고별 지루하기 짝이없는 명제들 그래도 그것은 진실',
                    url: 'https://naver.com'
                  })
                  .then(() => alert('공유하기'))
              } else {
                alert('share not supported')
              }
            }}>
            webShare
          </button>
        </div>
        {/* <counter startCount={3} /> */}
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
    display: inline-block;
    padding: 10px;
    font-size: 16px;
    color: #ff0000;
    background: #111;
  }
`
