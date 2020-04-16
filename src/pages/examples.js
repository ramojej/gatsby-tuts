import React from "react"
import Navbar from "../components/Navbar"
import HeaderHook from "../examples/Header-Hooks"
import HeaderStatic from "../examples/Header-Static"

const examples = () => {
  return (
    <>
      <Navbar />
      Examples Page
      <HeaderHook />
      <HeaderStatic />
    </>
  )
}

export default examples
