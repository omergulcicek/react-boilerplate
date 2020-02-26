import React from "react"

import LayoutTemp from "./Layout"
import SEOTemp from "./Seo"

export function Layout({ children }) {
  return (
    <LayoutTemp content={children} />
  )
}

export function SEO({ title }) {
  return (
    <SEOTemp title={title} />
  )
}