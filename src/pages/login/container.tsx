import React, {useEffect} from 'react'
import {authService} from 'constpack'
import {useLocation} from 'react-router-dom'
import {useGlobalStore} from 'contexts'
import Presenter from './presenter'

export default function Container() {
  let location = useLocation()
  const [global, setGlobal] = useGlobalStore()

  const onSubmit = async data => {
    try {
      const {email, password} = data
      let result
      if (global.isLogin) {
        result = await authService.signInWithEmailAndPassword(email, password)
      }
      if (!global.isLogin) {
        result = await authService.createUserWithEmailAndPassword(email, password)
      }
      console.log('----')
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }
  return <Presenter onSubmit={onSubmit} />
}
