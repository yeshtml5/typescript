/*
 * @example https://dashboard.zawiastudio.com/demo/home-overview.html
 */
import React from 'react'
//component
//layout
import Header from './content/header'
//
export default (props: any) => {
  //initalize
  const {children} = props
  return (
    <main>
      <Header />
      <article>{children}</article>
    </main>
  )
}
