/*
 */
import React, {useState} from 'react'
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
    {title: 'Login', link: '/login'},
    {title: 'Guide', link: '/guide'},
    {title: 'Hooks', link: '/hooks'},
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
  return <React.Fragment>{makeNavi()}</React.Fragment>
}
export default Navi
//---------------------------------------------------------------------
