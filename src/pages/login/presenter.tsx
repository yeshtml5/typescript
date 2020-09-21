import React, {useRef} from 'react'
import {useMap} from 'react-use'
import styled from 'styled-components'
import {Layout} from 'pages'
//import {useGlobalStore} from 'contexts'

type Props = {
  onSocial: (data: any) => void
  onSubmit: (data: any) => void
}
function Presenter({onSocial, onSubmit}: Props) {
  const [map, {setAll}] = useMap({})
  const refEmail = useRef<HTMLInputElement>(null)
  const refPassword = useRef<HTMLInputElement>(null)

  return (
    <Layout>
      <Content>
        <h1>Login</h1>
        <div className="in_wrap">
          <label htmlFor="id">
            <span>이메일</span>
            <input
              ref={refEmail}
              type="text"
              placeholder={'e-mail'}
              onChange={e => {
                setAll({...map, email: e.target.value})
              }}
            />
          </label>
          <label htmlFor="password">
            <span>패스워드</span>
            <input
              ref={refPassword}
              type="password"
              placeholder={'password'}
              onChange={e => {
                setAll({...map, password: e.target.value})
              }}
            />
          </label>
          <button
            onClick={() => {
              onSubmit(map)
            }}>
            전송
          </button>
        </div>
        <Social>
          <button name="github" onClick={() => onSocial('github')}>
            깃허브
          </button>
          <button name="google" onClick={() => onSocial('google')}>
            Google
          </button>
        </Social>
      </Content>
      <div>{JSON.stringify(map, null, 2)}</div>
    </Layout>
  )
}
export default Presenter

const Content = styled.section`
  h1 {
    position: relative;
    display: block;
    padding-bottom: 10px;
    &:after {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: #ccc;
      content: '';
    }
  }
  .in_wrap {
    display: block;
    width: 80%;
    padding: 50px 0;
    label {
      display: block;
      margin-bottom: 10px;
      span {
        display: inline-block;
        width: 80px;
      }
    }
    button {
      display: block;
      width: 100%;
      padding: 10px;
      color: #fff;
      background: #111;
    }
  }
  input {
    display: inline-block;
    min-width: 200px;
    padding: 10px 10px;
    border: 1px solid #111;
  }
  min-height: 100px;
`
const Social = styled.div`
  button {
    display: block;
    padding: 10px 20px;
  }
`
