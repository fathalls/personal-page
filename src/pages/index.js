import React from "react"
import ReactGA from "react-ga"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation"
import Me from "../components/me"

function initializeReactGA() {
  ReactGA.initialize("UA-144983266-1")
  ReactGA.pageview("/")
}
class IndexPage extends React.Component {
  render() {
    initializeReactGA()
    return (
      <Layout>
        <SEO title="Salwa Fathallah" />
        <div className="row">
          <Navigation />
          <Me />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
