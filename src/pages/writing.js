import React from "react"
import { Link } from "gatsby"
import ReactGA from "react-ga"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation"

function initializeReactGA() {
  ReactGA.initialize("UA-144983266-1")
  ReactGA.pageview("/writing")
}

class Writing extends React.Component {
  render() {
    initializeReactGA()
    return (
      <Layout>
        <SEO title="Writing" />
        <div className="row">
          <Navigation />
          <div className="content-column">
            <div className="articles">
              <h1>My Writing</h1>
              <Link to="/writing/demystifying-nodejs-for-beginners">
                <p>Demystifying Node.js for beginners</p>
              </Link>
              <Link to="/writing/random-zenhabits-article">
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
