import React from 'react'
//hooks
import {useChanges} from 'components/hooks/useChanges'
//layout
import Layout from 'pages/common/layout'

const Hooks: React.FC = () => {
  //hooks
  const {changes, onChange} = useChanges(update, {onChange: '-1'})
  const btnClick = () => {
    console.log(changes)
  }
  function update() {}
  return (
    <Layout>
      <section>
        <div>
          <input type="text" name="title" defaultValue="값을입력" onChange={onChange} />
        </div>
        <button onClick={btnClick}>버튼클릭</button>
      </section>
    </Layout>
  )
}

export default Hooks
