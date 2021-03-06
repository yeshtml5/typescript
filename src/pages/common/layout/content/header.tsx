import React from 'react'
import Navi from './navi'
import Logo from 'static/svg/typescript.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faCamera} from '@fortawesome/free-solid-svg-icons'
export default () => {
  //initalize
  return (
    <header>
      <div className="logo">
        <a href="/">
          <img src={Logo} alt="logo" />
          <span>Typescript</span>
        </a>
      </div>
      <Navi />
      <footer>
        <a href="mailto:yeshtml5@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://github.com/yeshtml5/typescript">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://unsplash.com/@yeshtml5">
          <FontAwesomeIcon icon={faCamera} />
        </a>
        <p>
          © 2020 Yeshtml5,
          <br />
          ALL RIGHTS RESERVED.
        </p>
      </footer>
    </header>
  )
}
