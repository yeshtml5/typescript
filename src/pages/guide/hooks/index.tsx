import React from 'react'
//hooks
import {useChanges} from 'components/hooks/useChanges'
//layout
import Layout from 'pages/common/layout'

const Hooks: React.FC = () => {
  const {state, onChange} = useChanges(update, {onChange: '-1'})
  const btnClick = () => {
    console.log(state)
  }
  //hooks
  function update(data: any) {
    console.log(data)
  }
  return (
    <Layout>
      <section>
        <div>
          <input type="text" name="title" defaultValue="값을입력" onChange={onChange} />
          <input type="checkbox" name="box" onChange={onChange} />
        </div>
        <button onClick={btnClick}>버튼클릭</button>
      </section>
    </Layout>
  )
}

export default Hooks
