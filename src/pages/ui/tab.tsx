/**
 * @title
 */
import * as React from 'react'
import {useEffect} from 'react'
//components
import Layout from '../common/layout'
import Guide from '../../components/ui/guide'
//
interface IProps {
  data: object
  onClick: Function
}

//---------------------------------------------------------------------
const Tab: React.FC<IProps> = props => {
  //---------------------------------------------------------------------
  //initalize
  const tabInfo = [{title: '탭1'}, {title: '탭2'}, {title: '탭3'}]
  //useState
  useEffect(() => {
    console.log('1')
  })
  //---------------------------------------------------------------------
  return (
    <Layout>
      <h1>탭</h1>
      <Guide name="wanhwi.son" mark="A" />
    </Layout>
  )
}

export default Tab
