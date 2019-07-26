import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation"

class Article extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Writing" />
        <div className="row">
          <Navigation />
          <div className="content-column">
            <h4>Work In Progress</h4>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Article
