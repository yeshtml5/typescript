import React from 'react'

interface Props {
  title: string
}
const List: React.FC<Props> = ({title}) => {
  return <h1>{title}</h1>
}
export default List
