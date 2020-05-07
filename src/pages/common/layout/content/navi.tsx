/*
 */
import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
//component
//layout
//type
type Navigation = {
  title: string
  link: string
}
type Navigations = Navigation[]
//---------------------------------------------------------------------
function Navi() {
  //const
  const [data] = useState<Navigations>([
    {title: 'Main', link: '/'},
    {title: 'Todo', link: '/todo'},
    {title: 'Button', link: '/button'},
    {title: 'Form', link: '/form'},
    {title: 'markdown', link: '/markdown'}
  ])
  //makeObject
  const makeNavi = (): JSX.Element[] => {
    return data.map(({title, link}: Navigation, index) => {
      return (
        <dl key={index}>
          <dt>
            <Link to={link}>{title}</Link>
          </dt>
        </dl>
      )
    })
  }
  return <Content>{makeNavi()}</Content>
}
export default Navi
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
