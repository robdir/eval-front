import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navigation from './components/UI/Navigation'
import Routes from './routes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/theme'
import './App.css'

class App extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
        <Navigation />
        <p> Such empty... </p>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
