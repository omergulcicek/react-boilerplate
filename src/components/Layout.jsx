import React from "react"
import Header from "./Header"
import Footer from "./Footer"

import { Main } from "./Styled"

const Layout = ({content}) => {
  return (
    <>
      <Header />

      <Main>
        {content}
      </Main>
      
      <Footer />
    </>
  )
}

export default Layout