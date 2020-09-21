/**
 * @do 로그인체크
 */
import React, {useState, useEffect} from 'react'
import {Router} from 'lib'
import {authService} from 'constpack'
import {useGlobalStore} from 'contexts'

function App() {
  const [isLoad, setIsLoad] = useState(false)
  const [global, setGlobal] = useGlobalStore()

  useEffect(() => {
    // 로그인체크
    authService.onAuthStateChanged(user => {
      const _isLogin = user ? true : false
      if (user) setGlobal({...global, isLogin: _isLogin, user: user})
      setIsLoad(true)
    })
  }, [])
  return isLoad ? <Router /> : null
}
export default App
