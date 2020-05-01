/**
 * @title
 */
import React from 'react'
//components
import Layout from '../common/layout'
import {lastArray} from '../../components/lib/util'
import {TextField} from 'components/ui/TextField'
import {useGlobalState, useGlobalDispatch} from 'contexts/global'
//context

//
const App: React.FC = () => {
  //---------------------------------------------------------------------
  //context
  const global = useGlobalState()
  const dispatch = useGlobalDispatch()
  //initalize
  //useState
  const t1 = lastArray(['1', '2'])
  const t2 = lastArray(['a', 1])
  //---------------------------------------------------------------------
  return (
    <Layout>
      <p>
        <button
          onClick={() => {
            dispatch({type: 'UPDATE', info: {title: 'name'}})
          }}>
          ㅌㅔ스트
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({type: 'CREATE', info: {title: 'hey ', name: 111}})
          }}>
          ㅌㅔ스트
        </button>
      </p>

      <button
        onClick={() => {
          console.log(global)
        }}>
        확인
      </button>
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
