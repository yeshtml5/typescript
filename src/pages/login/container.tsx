import React, {useEffect} from 'react'
import {authService} from 'constpack'
import {useGlobalStore} from 'contexts'
import Presenter from './presenter'

function Container() {
  const [global] = useGlobalStore()

  const onSubmit = async data => {
    try {
      const {email, password} = data
      console.log(global.isLogin)
      let result
      result = await authService.signInWithEmailAndPassword(email, password)

      // if (global.isLogin) {
      //   result = await authService.signInWithEmailAndPassword(email, password)
      // }
      // if (!global.isLogin) {
      //   result = await authService.createUserWithEmailAndPassword(email, password)
      // }
    } catch (error) {
      alert(error.message)
    }
  }
  return <Presenter onSubmit={onSubmit} />
}
export default Container
