/**
 * @title
 */
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import useForm from 'react-hook-form'
//components
import Layout from '../common/layout'
import {useGlobalState} from 'contexts/global'
//

const App: React.FC = props => {
  const global = useGlobalState()

  //---------------------------------------------------------------------
  type FormData = {
    firstName: string
    lastName: string
    age: number
  }
  //initalize
  //useState

  const {register, setValue, handleSubmit} = useForm<FormData>()
  const onSubmit = handleSubmit(data => {
    console.log(typeof data.age)
  })
  //---------------------------------------------------------------------
  useEffect(() => {
    console.log(global)
  }, [])
  //---------------------------------------------------------------------
  return (
    <Layout>
      <Form>
        <form onSubmit={onSubmit}>
          <div>
            <label>First Name</label>
            <input name="firstName" ref={register} defaultValue={'first'} />
          </div>
          <div>
            <label>Last Name</label>
            <input
              name="lastName"
              ref={register}
              // onChange={e => {
              //   console.log(e.target.value)
              // }}
            />
          </div>
          <div>
            <label>Age</label>
            <input name="age" type="number" ref={register({required: true})} />
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                setValue('age', 222)
                setValue('lastName', 'luo')
              }}>
              SetValue
            </button>
            <button type="submit">submit</button>
          </div>
        </form>
      </Form>
    </Layout>
  )
}
export default App
//----------------------------------------------------------
const Form = styled.section`
  form {
    > div {
      display: block;
      margin-bottom: 1rem;
    }
    label,
    input,
    button {
      display: inline-block;
      padding: 1rem 2rem;
      color: #111;
      font-size: 16px;
    }
    button {
      color: #fff;
      background: #111;
    }
    input {
      background: #e1e1e1;
    }
  }
`
