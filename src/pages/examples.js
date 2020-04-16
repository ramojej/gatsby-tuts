import React from "react"
import Layout from "../components/layout"
import HeaderHook from "../examples/Header-Hooks"
import HeaderStatic from "../examples/Header-Static"
import { graphql } from "gatsby"

const examples = props => {
  const { name, age } = props.data.site.siteMetadata.person

  return (
    <Layout>
      Examples Page
      <HeaderHook />
      <HeaderStatic />
      <div>
        <h1>This is a Page Query</h1>
        <h4>Name: {name}</h4>
        <h4>Age: {age}</h4>
      </div>
    </Layout>
  )
}

export const getData = graphql`
  query {
    site {
      siteMetadata {
        description
        title
        author
        person: data {
          age
          name
        }
      }
    }
  }
`

export default examples
