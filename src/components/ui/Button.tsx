/**
 * @title
 * @example 문자열만 처리할것인지, 값 유효성체크도
 */

import React from 'react'
//------------------------------
interface IProps {
  name: string
  text: string
  onClick: Function
  callback?: any
  [index: string]: any
  value?: any
}
//------------------------------
const button = ({name, text, onClick, callback}: IProps) => {
  return (
    <button
      name={name}
      onClick={event => {
        onClick(event)
        if (callback !== undefined) {
          callback({name: 'qm'})
        }
      }}>
      {text}
    </button>
  )
}
export default button
//------------------------------
button.defaultProps = {
  name: 'my-name',
  text: 'Button-Text',
  onClick: () => {
    console.log('버튼 이벤트 "onClick" 할당이 되어있지않음')
  }
}
//------------------------------
