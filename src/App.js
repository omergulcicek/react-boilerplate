import React from "react"
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from "react-router-dom"

import { Layout } from "./components"
import { Home, Css } from "./pages"

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/css">
            <Css />
          </Route>

        </Switch>
      </Layout>
    </Router>
  )
}

export default App;
