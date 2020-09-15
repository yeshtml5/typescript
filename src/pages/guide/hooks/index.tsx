import React from 'react'
import styled from 'styled-components'
import {useChanges} from 'components/hooks/useChanges'
import {useGuideStore} from '../store'

type Type = {
  mode?: string
}
interface Props extends Type {
  type?: string
  method?: () => void
  clickHandler?: (event: React.MouseEvent) => void
}

function Hooks({type, mode, method, clickHandler}: Props) {
  const [value, setValue] = useGuideStore()
  const {state, onChange} = useChanges(update, {onChange: '-1'})
  const btnClick = () => {
    console.log(state)
  }
  //hooks
  function update(data: any) {
    console.log(data)
  }
  return (
    <Content>
      <div>
        <button onClick={() => setValue({...value, type: 'apple'})}>오브텍트</button>
        <button onClick={() => setValue({...value, type: 'car'})}>car</button>
        <button onClick={() => setValue({type: null})}>REMOVE</button>

        <h1>type: {type}</h1>
        <h1>mode: {mode}</h1>
        <button onClick={clickHandler}>버튼</button>
        <input type="text" name="title" defaultValue="값을입력" onChange={onChange} />
        <input type="checkbox" name="box" onChange={onChange} />
      </div>
      <button onClick={btnClick}>버튼클릭</button>
    </Content>
  )
}

export default Hooks

const Content = styled.section`
  button {
    display: inline-block;
    padding: 10px 20px;
    background: #111;
    color: #fff;
  }
`
