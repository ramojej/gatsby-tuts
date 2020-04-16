import React from "react"
import Layout from "../components/layout"
import styles from "../components/products.module.css"

const products = () => {
  return (
    <Layout>
      <h1 className={styles.title}>This is our products page</h1>
      <h2 className={styles.title}>Wheels bus</h2>
    </Layout>
  )
}

export default products
