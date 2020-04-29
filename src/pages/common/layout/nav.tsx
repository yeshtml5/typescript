/*
 */
import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
//component
//layout

export default () => {
  //initalize

  //---------------------------------------------------------------------
  return (
    <Nav>
      <dl>
        <dt>
          <Link to="/">UI1</Link> 
        </dt>
      </dl>
      <dl>
        <dt>
          <Link to="/button">Button</Link> 
        </dt>
        <dt>
          <Link to="/form">Form</Link> 
        </dt>
        <dt>
          <Link to="/markdown">markdown</Link> 
        </dt>
      </dl>
    </Nav>
  )
}
//---------------------------------------------------------------------
const Nav = styled.nav`
  padding: 2rem;
  box-sizing: border-box;
  dl {
    display: block;
    margin-bottom: 1rem;
    dt {
      display: block;
      a {
        display: block;
        padding: 0.5rem 1rem;
      }
    }
  }
`
