/*
 */
import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
//component
//layout
function Nav() {
  return (
    <Content>
      <dl>
        <dt>
          <Link to="/">Main</Link> 
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
    </Content>
  )
}
export default Nav
//---------------------------------------------------------------------
const Content = styled.nav`
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
