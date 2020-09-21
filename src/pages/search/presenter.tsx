/**
 * @title
 */
import React from 'react'
import styled from 'styled-components'
import {Layout} from 'pages'
import {useKey, useGeolocation} from 'react-use'
function Presenter() {
  const state = useGeolocation()
  useKey('1', () => {
    console.log('test')
  })
  return (
    <Layout>
      <Content>
        <p>검색영역</p>
        <input type="text" placeholder={'값을 입력해주세요'} />
        <button>버튼</button>
        <p> {JSON.stringify(state, null, 2)}</p>
      </Content>
    </Layout>
  )
}
export default Presenter

const Content = styled.section`
  height: 3000px;
  p {
    margin-bottom: 10px;
  }
  input {
    display: inline-block;
    padding: 10px 20px;
    border: 1px solid #111;
  }
  button {
    display: inline-block;
    padding: 10px;
    font-size: 16px;
    color: #ff0000;
    background: #111;
  }
`
