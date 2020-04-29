/**
 * @title
 */
import React from 'react'
//components
import Layout from '../common/layout'
import {lastArray} from '../../components/lib/util'
import {TextField} from 'components/ui/TextField'
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
      <TextField
        text="타이틀111"
        handleChange={e => {
          console.log(e.target.value)
        }}
      />

      <TextField text="dddd" handleChange={() => {}} />
      {/* <counter startCount={3} /> */}
      <h1>타이틀1</h1>
    </Layout>
  )
}
export default App
