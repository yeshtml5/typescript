import React, {useState} from 'react'
import Presenter from './presenter'

import firebase from 'constpack/env'

export default function Container() {
  //
  console.log(firebase)
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
