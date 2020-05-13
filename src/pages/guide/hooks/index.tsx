import React from 'react'
//hooks
import {useChanges} from 'components/hooks/useChanges'
//layout
import Layout from 'pages/common/layout'

const Hooks: React.FC = () => {
  const btnClick = () => {
    console.log(useChanges())
  }
  return (
    <Layout>
      <section>
        <button onClick={btnClick}>버튼클릭</button>
      </section>
    </Layout>
  )
}

export default Hooks
