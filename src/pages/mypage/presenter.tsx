import React from 'react'
import styled from 'styled-components'
import {Layout} from 'pages'
import {useGlobalStore} from 'contexts'
import {authService} from 'constpack'
type Props = {}

function Presenter({}: Props) {
  const [global] = useGlobalStore()
  return (
    <Layout>
      <Content>
        <h1>Mypage</h1>
        <button
          onClick={() => {
            authService
              .signOut()
              .then(() => {
                console.log('성공')
              })
              .catch(error => {
                console.log(error)
              })
          }}>
          로그아웃
        </button>
        <pre>{JSON.stringify(global, null, 1)}</pre>
      </Content>
    </Layout>
  )
}
export default Presenter

const Content = styled.section``
