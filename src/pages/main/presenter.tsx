/**
 * @title
 */
import React from 'react'
import styled from 'styled-components'
import {Layout} from 'pages'
import {useGlobalStore} from 'contexts'
import {useHistory} from 'react-router-dom'

function Presenter() {
  const [global] = useGlobalStore()
  const history = useHistory()
  const {isLogin} = global
  return (
    <Layout>
      <Content>
        <button
          onClick={() => {
            if (isLogin) history.push('/mypage')
            if (!isLogin) history.push('/login')
          }}>
          페이지분기
        </button>
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
