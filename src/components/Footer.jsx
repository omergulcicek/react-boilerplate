import React from "react"

import { FooterWrap } from "./Styled"

const Footer = () => {
  return (
    <FooterWrap>
      <div className="container">
      
        <span>
          © {new Date().getFullYear()} | React Boilerplate
        </span>

        <p>
          Footer'ı <code>src/components/Footer.jsx</code> dosyasından değiştirebilirsiniz.
        </p>
        
      </div>
    </FooterWrap>
  )
}

export default Footer