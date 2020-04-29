/*
 */
import React from 'react'
//component
//layout
import Header from './header'
//
export default (props: any) => {
  //initalize
  const {children} = props
  //---------------------------------------------------------------------
  return (
    <main>
      <Header />
      <article>{children}</article>
    </main>
  )
}
