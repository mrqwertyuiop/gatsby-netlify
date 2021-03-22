import React from "react"
import NavBar from "./nav-bar"
const MinimalLayout = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
)
export default MinimalLayout