/*
 */
import React from 'react'
//component
//layout
import Navi from './navi'
//static
import Logo from 'static/svg/typescript.svg'
export default () => {
  //initalize
  //-----------------------------------------------------
  return (
    <header>
      <div className="logo">
        <img src={Logo} />
        <span>Typescript</span>
      </div>
      <Navi />
    </header>
  )
}
