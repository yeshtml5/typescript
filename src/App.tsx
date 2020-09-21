/**
 * @do 로그인체크
 */
import React, {useEffect} from 'react'
import {Router} from 'lib'
import {authService} from 'constpack'
import {useGlobalStore} from 'contexts'

function App() {
  const [global, setGlobal] = useGlobalStore()

  useEffect(() => {
    // 로그인체크
    authService.onAuthStateChanged(user => {
      user ? setGlobal({isLogin: true}) : setGlobal({isLogin: false})
    })
  }, [])
  return <Router />
}
export default App
