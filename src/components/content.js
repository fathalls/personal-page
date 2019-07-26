import React from "react"
import Me from "../components/me"
import Writing from "../components/writing"

class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { home, writing } = this.props.content
    return home ? <Me /> : <Writing />
  }
}

export default Content
