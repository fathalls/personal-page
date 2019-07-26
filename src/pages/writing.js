import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation"

class Writing extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Writing" />
        <div className="row">
          <Navigation />
          <div class="content-column">
            <div className="articles">
              <h4>My Writing</h4>
              <Link to="/demystifying-nodejs-for-beginners">
                <p>Demystifying Node.js for beginners</p>
              </Link>
              <Link to="/random-zenhabits-article">
                <p>Random Zen Habits article</p>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Writing
