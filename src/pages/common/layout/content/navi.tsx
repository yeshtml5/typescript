/*
 */
import React, {useState} from 'react'
import {Link} from 'react-router-dom'

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
    {title: 'Mypage', link: '/mypage'},
    {title: 'Login', link: '/login'},
    {title: 'Join', link: '/join'},
    {title: 'Search', link: '/search'},
    {title: 'Guide', link: '/guide'},
    {title: 'Hooks', link: '/guide/hooks'}

    // {title: 'Button', link: '/button'},
    // {title: 'Form', link: '/form'},
    // {title: 'markdown', link: '/markdown'}
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
