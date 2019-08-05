import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation"
import Me from "../components/me"

class IndexPage extends React.Component {
  render() {
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
