import React from 'react'
import styled from 'styled-components'
//content
import Layout from 'pages/common/layout'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
//interface
interface Props {
  type: string
}
const Guide: React.FC<Props> = ({type}) => {
  //---------------------------------------------------------------------
  return (
    <Layout>
      <Content>
        <span>
          <FontAwesomeIcon icon={faCoffee} />
        </span>
        <h1>NODE_ENV: {process.env.NODE_ENV + ''}</h1>
      </Content>
    </Layout>
  )
}
export default Guide
//---------------------------------------------------------------------
const Content = styled.section`
  span {
    color: #ff0000;
    font-size: 24px;
  }
`
