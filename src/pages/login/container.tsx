import React, {useEffect} from 'react'
import {authService, firebaseInstance} from 'constpack'
import {useGlobalStore} from 'contexts'
import Presenter from './presenter'

function Container() {
  const [global] = useGlobalStore()

  const onSocial = async data => {
    let provider
    if (data === 'google') {
      provider = new firebaseInstance.auth.GoogleAuthProvider()
    } else if (data === 'github') {
      provider = new firebaseInstance.auth.GithubAuthProvider()
    }
    const result = await authService.signInWithPopup(provider)
    console.log(result)
  }
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
  return <Presenter onSocial={onSocial} onSubmit={onSubmit} />
}
export default Container
