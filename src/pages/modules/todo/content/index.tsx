import React from 'react'

//type
type Index = {
  name: string
  title: string
}
function Index({name, title}: Index) {
  return (
    <React.Fragment>
      <h2>name: {name}</h2>
      <div>title: {title}</div>
    </React.Fragment>
  )
}
export default Index
