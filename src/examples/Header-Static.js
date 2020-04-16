import React from "react"
import { graphql, StaticQuery } from "gatsby"

const getData = graphql`
  query {
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
`

const HeaderStatic = () => {
  return (
    <StaticQuery
      query={getData}
      render={data => {
        return (
          <div>
            <h1>This uses StaticQuery</h1>
            <p>{data.site.siteMetadata.description}</p>
          </div>
        )
      }}
    ></StaticQuery>
  )
}

export default HeaderStatic
