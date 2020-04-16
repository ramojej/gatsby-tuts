import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1 style={{ color: "red" }}>Home Page</h1>
    <h2 className="title">Lyra Ibong</h2>
    <div className="container">
      <div className="row">
        <div className="col-4">Hello</div>
        <div className="col-4">World</div>
        <div className="col-4">!</div>
      </div>
    </div>
  </Layout>
)
