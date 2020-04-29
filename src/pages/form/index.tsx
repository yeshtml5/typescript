/**
 * @title
 */
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import useForm from 'react-hook-form'
//components
import Layout from '../common/layout'
//

const App: React.FC = props => {
  //---------------------------------------------------------------------
  type FormData = {
    firstName: string
    lastName: string
    age: number
  }
  //initalize
  //useState
  const [state, setState] = useState(() => {
    console.log(props)
    return 0
  })
  const {register, setValue, handleSubmit, errors} = useForm<FormData>()
  const onSubmit = handleSubmit(data => {
    console.log(data)
    console.log(typeof data.age)
  })
  //---------------------------------------------------------------------
  useEffect(() => {
    console.log(setValue)
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
const Form = styled.div`
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
