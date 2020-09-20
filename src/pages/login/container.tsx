import React, {useEffect, useState} from 'react'
import Presenter from './presenter'
import {authService} from 'constpack'
import {useLocation} from 'react-router-dom'

export default function Container() {
  //
  type Login = {
    email: string
    password: string
  }
  let location = useLocation()

  useEffect(() => {
    console.log(location)
  }, [location])

  const [loginInfo, setLoginInfo] = useState<Login | undefined>(undefined)
  const onUpdate = data => {
    // console.log(data)
    //setLoginInfo(data)
  }
  const onSubmit = async event => {
    try {
      if (!loginInfo) return
      console.table(loginInfo)
      const {email, password} = loginInfo
      if (!authService.currentUser) {
        // create user
        const data = await authService.createUserWithEmailAndPassword(email, password)
        console.log(data)
      } else {
        const data1 = await authService.signInWithEmailAndPassword(email, password)
        console.log(data1)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return <Presenter onUpdate={onUpdate} onSubmit={onSubmit} />
}
