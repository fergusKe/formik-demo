import React, { Component } from 'react'
import FormikApp from '../FormikApp/FormikApp'

class App extends Component {
  render() {
    return (
      <div className="App">
				<FormikApp email="fergus@gmail.com" />
      </div>
    )
  }
}

export default App
