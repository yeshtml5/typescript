/*
 */
import React from 'react'
import styled from 'styled-components'
//component
//layout

export default () => {
  //initalize

  //---------------------------------------------------------------------
  return (
    <Nav>
      <dl>
        <dt>
          <a href="/">UI1</a> 
        </dt>
      </dl>
      <dl>
        <dt>
          <a href="/">Button</a>
        </dt>
        <dt>
          <a href="/form">Form</a> 
        </dt>
        <dt>
          <a href="/markdown">MarkDown</a> 
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
