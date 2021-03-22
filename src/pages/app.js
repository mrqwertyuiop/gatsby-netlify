import React from "react"
import { Router } from "@reach/router"
import MinimalLayout from "../components/minimal-layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import Login from "../components/login"
import Layout from "../components/layout"

const App = () => {
    <Layout>
        <Router>
            <PrivateRoute path="/app/profile" component={Profile} />
            <Login path="/app/login" />
        </Router>
    </Layout>
}

export default App