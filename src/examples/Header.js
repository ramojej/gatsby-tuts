import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const {
    site: { siteMetadata: info },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          title
          author
          data {
            age
          }
        }
      }
    }
  `)

  return (
    <div>
      {/* <h1>Author: {data.site.siteMetadata.author}</h1> */}
      <h1>Author: {info.author}</h1>
      <h1>Title: {info.title}</h1>
    </div>
  )
}

export default Header
