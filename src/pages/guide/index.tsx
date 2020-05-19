import React from 'react'
//content
import Hooks from './hooks'
//interface
interface Props {
  type: string
}
const Guide: React.FC<Props> = ({type}) => {
  return (
    <React.Fragment>
      <h1>type: {type}</h1>
      <Hooks mode="cap" type="hooks" />
    </React.Fragment>
  )
}
export default Guide
