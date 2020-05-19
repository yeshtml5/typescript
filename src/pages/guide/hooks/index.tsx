import React from 'react'
//hooks
import {useChanges} from 'components/hooks/useChanges'
//layout
//interface
interface Type {
  mode: string
}
interface Props extends Type {
  type: string
  method(): any
  clickHandler?: (event: React.MouseEvent) => void
}
const Hooks: React.FC<Props> = ({type, mode, method, clickHandler}) => {
  const {state, onChange} = useChanges(update, {onChange: '-1'})
  const btnClick = () => {
    console.log(state)
  }
  //hooks
  function update(data: any) {
    console.log(data)
  }
  return (
    <React.Fragment>
      <section>
        <div>
          <h1>type: {type}</h1>
          <h1>mode: {mode}</h1>
          <button onClick={clickHandler}>버튼</button>

          <input type="text" name="title" defaultValue="값을입력" onChange={onChange} />
          <input type="checkbox" name="box" onChange={onChange} />
        </div>
        <button onClick={btnClick}>버튼클릭</button>
      </section>
    </React.Fragment>
  )
}

export default Hooks
