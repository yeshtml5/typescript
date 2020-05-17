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
      <footer>
        <a href="mailto:yeshtml5@gmail.com">mail: yeshtml5@gmail.com</a>
        <a href="https://github.com/yeshtml5/typescript">github: github.com/yeshtml5/typescript</a>
        <p>
          © 2020 Yeshtml5, <br />
          ALL RIGHTS RESERVED.
        </p>
      </footer>
    </header>
  )
}
