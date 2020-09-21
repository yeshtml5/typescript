import React, {useRef} from 'react'
import styled from 'styled-components'
import {Layout} from 'pages'
import {useChanges} from 'components/hooks/useHooks'
//import {useGlobalStore} from 'contexts'

type Props = {
  onUpdate: (data: object) => void
  onSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
function Presenter({onUpdate, onSubmit}: Props) {
  //hooks
  //const [store, setStore] = useGlobalStore()
  const refEmail = useRef<HTMLInputElement>(null)
  const refPassword = useRef<HTMLInputElement>(null)
  const {onChange} = useChanges(onUpdate)

  return (
    <Layout>
      <Content>
        <h1>Login</h1>
        <div className="in_wrap">
          <label htmlFor="id">
            <span>이메일</span>
            <input ref={refEmail} id="email" type="text" name="email" onChange={onChange} />
          </label>
          <label htmlFor="password">
            <span>패스워드</span>
            <input ref={refPassword} id="password" type="password" name="password" onChange={onChange} />
          </label>
          <button onClick={onSubmit}>전송</button>
        </div>
      </Content>
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
