import React, {useState} from 'react'
import Presenter from './presenter'

import 'firebase/auth'
import 'firebase/firestore'
import firebase from 'firebase/app'
import {FIREBASE_CONFIG} from 'constpack'

firebase.initializeApp(FIREBASE_CONFIG)

export default function Container() {
  //
  const [loginInfo, setLoginInfo] = useState(null)
  const onUpdate = data => {
    // console.log(data)
    setLoginInfo(data)
  }
  const onSubmit = event => {
    console.log(loginInfo)
    console.log(event)
    // //validation
    // const {id, password} = changes
    // if (!id) {
    //   alert('id가 없습니다.')
    //   setFocus(refId)
    //   return
    // }
    // if (!password) {
    //   alert('password 없습니다.')
    //   setFocus(refPassword)
    //   return
    // }
    // const auth = firebase.auth()
    // auth.signInWithEmailAndPassword(id, password).then(async res => {
    //   console.log(res)
    // })
    // alert(JSON.stringify(changes, null, 1))
  }
  return <Presenter onUpdate={onUpdate} onSubmit={onSubmit} />
}
