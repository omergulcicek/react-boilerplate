import React, { Component } from "react"
import { NavLink } from "react-router-dom"

class Header extends Component {
  render () {
    let nav = links.map(({link, text}, i) =>
      <NavLink to={link} exact key={i}>
        {text}
      </NavLink>
    )

    return (
      <header>
        <div className="container">
          
          <nav>
            {nav}
          </nav>

          <p>
            Header'ı <code>src/components/Header.jsx</code> dosyasından değiştirebilirsiniz.
          </p>
        </div>
      </header>
    )
  }
}

export const links = [
  {
    text: "Ana Sayfa",
    link: "/"
  },
  {
    text: "Css",
    link: "/css"
  }
]

export default Header