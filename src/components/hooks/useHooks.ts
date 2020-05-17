import React, {useReducer} from 'react'

//type
type Action = {type: 'UPDATE'; info: object}
//---------------------------------------------------------------------
/**
 * @function onChange 이벤트에 key:value state관리
 * @param callback
 * @param defaultValue
 */
export const useChanges = (callback: any, defaultValue: any) => {
  //reducer
  const [changes, dispatch] = useReducer(reducer, defaultValue)
  //reducer
  function reducer(changes: any, action: Action): object {
    switch (action.type) {
      case 'UPDATE':
        const info = {...changes, ...action.info}
        if (callback !== undefined && typeof callback === 'function') callback(info)
        return {...changes, ...action.info}
      default:
        throw new Error('Unhandled action')
    }
  }
  //onChange
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist()
    let _val = event.target.type === 'checkbox' && event.target.value === 'on' ? event.target.checked : event.target.value
    try {
      if (event.target.name === '') throw 'target.name.null'
    } catch (err) {
      switch (err) {
        case 'target.name.null':
          alert('name값이 정의되지 않았습니다.')
          break
      }
    }
    const _info = {...changes, [event.target.name]: _val}
    dispatch({type: 'UPDATE', info: {..._info}})
  }

  return {onChange, changes}
}
//---------------------------------------------------------------------
