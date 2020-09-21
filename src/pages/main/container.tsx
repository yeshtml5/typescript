import React from 'react'
import {useHistory} from 'react-router-dom'
import {useGlobalStore} from 'contexts'
import Presenter from './presenter'

export default function Container() {
  const [global] = useGlobalStore()
  const history = useHistory()
  const {isLogin} = global
  console.log(isLogin)
  return <Presenter />
}
