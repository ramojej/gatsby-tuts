import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    <h1>Home Page</h1>
    Hello people!
    <div>
      <Link to="/blog">Blog Page</Link>
    </div>
    <div>
      <a href="https://www.gatsbyjs.org">Gatsby Page</a>
    </div>
  </div>
)
