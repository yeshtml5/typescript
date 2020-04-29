import React from 'react'

type IProps = {
  name: string
  mark: string
  optional?: string
}

function Guide({name, mark, optional}: IProps) {
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
    </div>
  )
}

Guide.defaultProps = {
  mark: '!'
}

export default Guide
