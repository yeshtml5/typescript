import React, {useRef} from 'react'
import styled from 'styled-components'
import {Layout} from 'pages'
import {useChanges} from 'components/hooks/useHooks'

type Props = {
  onUpdate: (data: object) => void
  onSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
function Presenter({onUpdate, onSubmit}: Props) {
  //hooks
  const refId = useRef<HTMLInputElement>(null)
  const refPassword = useRef<HTMLInputElement>(null)
  const {changes, onChange} = useChanges(onUpdate)

  //validation
  const setFocus = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref && ref.current) ref.current.focus()
  }
  //submit
  // const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

  //   //validation
  //   const {id, password} = changes
  //   if (!id) {
  //     alert('id가 없습니다.')
  //     setFocus(refId)
  //     return
  //   }
  //   if (!password) {
  //     alert('password 없습니다.')
  //     setFocus(refPassword)
  //     return
  //   }
  //   const auth = firebase.auth()
  //   auth.signInWithEmailAndPassword(id, password).then(async res => {
  //     console.log(res)
  //   })
  //   alert(JSON.stringify(changes, null, 1))
  // }

  //---------------------------------------------------------------------
  return (
    <Layout>
      <Content>
        <h1>Login</h1>
        <div className="in_wrap">
          <label htmlFor="id">
            <span>아이디</span>
            <input ref={refId} id="id" type="text" name="id" onChange={onChange} />
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
//---------------------------------------------------------------------
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
