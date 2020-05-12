/**
 * @title
 */
import React, {useEffect} from 'react'
//components
import Layout from 'pages/common/layout'
import Guide from 'pages/guide/typescript'
//
interface Tab {
  data: object
  onClick: Function
}

//---------------------------------------------------------------------
const Tab: React.FC<Tab> = props => {
  //---------------------------------------------------------------------
  //initalize
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
