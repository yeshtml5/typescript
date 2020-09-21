import React, {useState, useEffect} from 'react'
import Presenter from './presenter'
import {useHistory} from 'react-router-dom'
import {authService} from 'constpack'

export default function Container() {
  const [init, setInit] = useState(false)
  let history = useHistory()
  useEffect(() => {
    authService.onAuthStateChanged(user => {
      console.log(user)
      // 로그인
      if (user) {
        console.log(user)
        console.log('로그인')
        // history.push('/login', user)
      } else {
        console.log('로그아웃')

        //  history.push('/login')
      }
      setInit(true)
    })
  }, [])

  return <Presenter />
}
