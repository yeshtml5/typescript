/**
 * @title
 */
import React from 'react'
import styled from 'styled-components'
import {Layout} from 'pages'
import {useGlobalState, useGlobalDispatch} from 'contexts/global'

function Presenter() {
  //context

  //initalize
  //useState
  return (
    <Layout>
      <Content>
        <p>검색영역</p>
        <input type="text" placeholder={'값을 입력해주세요'} />
        <button>버튼</button>
      </Content>
    </Layout>
  )
}
export default Presenter

const Content = styled.section`
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
