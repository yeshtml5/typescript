import React from 'react'
import Header from './content/header'

type Props = {
  children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <main>
      <Header />
      <article>{children}</article>
    </main>
  )
}
export default Layout
