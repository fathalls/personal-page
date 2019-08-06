import React from "react"
import { Link } from "gatsby"

class Navigation extends React.Component {
  render() {
    return (
      <div className="nav-column">
        <div className="column-links">
          <Link
            className="home"
            to="/"
            activeStyle={{
              "text-decoration-line": "none",
              "font-weight": "bolder",
              "color": "black"

            }}
          >
            me
          </Link>
          <Link
            className="writing"
            to="/writing"
            activeStyle={{
              "text-decoration-line": "none",
              "font-weight": "bold",
              "color": "black"
            }}
            partiallyActive={true}
          >
            writing
          </Link>
        </div>
        <div className="column-social">
          <a
            className="github"
            href="https://github.com/fathalls"
            target="_blank"
          >
            <i className="fa fa-github"></i>
          </a>
          <a
            className="twitter"
            href="https://twitter.com/salwa_fathallah"
            target="_blank"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/salwa-fathallah-74a07232/"
            target="_blank"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    )
  }
}

export default Navigation
