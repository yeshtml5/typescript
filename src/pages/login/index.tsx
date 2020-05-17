import React from 'react'
import styled from 'styled-components'
//layout
import Layout from 'pages/common/layout'
//hooks
import {useChanges} from 'components/hooks/useHooks'

//type

const Login: React.FC = () => {
  //hooks
  const {changes, onChange} = useChanges(update)
  //function
  function update(mode: any) {
    //console.log(mode.password)
    // switch (true) {
    //   case mode.onChange !== undefined:
    //     console.log(mode)
    //     break
    // }
  }
  //submit
  const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //validation
    const {id, password} = changes
    if (!id) {
      alert('id가 없습니다.')
      return
    }
    if (!password) {
      alert('password 없습니다.')
      return
    }
    alert(JSON.stringify(changes, null, 1))
  }

  //---------------------------------------------------------------------
  return (
    <Layout>
      <Content>
        <h1>Login</h1>
        <div className="in_wrap">
          <label htmlFor="id">
            <span>아이디</span>
            <input id="id" type="text" name="id" onChange={onChange} />
          </label>
          <label htmlFor="password">
            <span>패스워드</span>
            <input id="password" type="password" name="password" onChange={onChange} />
          </label>
          <button onClick={onSubmit}>전송</button>
        </div>
      </Content>
    </Layout>
  )
}
export default Login
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
