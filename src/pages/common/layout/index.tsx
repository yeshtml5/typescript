import React from 'react'
import Header from './content/header'

type Props = {
  children: React.ReactNode
}

export default ({children}: Props) => {
  return (
    <main>
      <Header />
      <article>{children}</article>
    </main>
  )
}
