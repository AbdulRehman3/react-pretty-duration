import React, { Component } from 'react'

import ExampleComponent from 'react-pretty-duration'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent duration={50} />
      </div>
    )
  }
}
