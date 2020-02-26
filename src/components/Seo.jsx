import React from "react"
import Helmet from "react-helmet"

const SEO = ({ title }) => {
  return (
    <Helmet
      title={title}
      titleTemplate={`%s | React Boilerplate`}
    />
  )
}

export default SEO