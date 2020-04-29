/**
 * @title
 */
import React from 'react'
//components
import Layout from '../common/layout'
import {lastArray} from '../../components/lib/util'
//

interface IProps {}
const App: React.FC = () => {
  //---------------------------------------------------------------------
  //initalize
  //useState
  const t1 = lastArray(['1', '2'])
  const t2 = lastArray(['a', 1])
  console.log(t2)
  //---------------------------------------------------------------------
  return (
    <Layout>
      {/* <counter startCount={3} /> */}
      <h1>타이틀1</h1>
    </Layout>
  )
}
export default App
