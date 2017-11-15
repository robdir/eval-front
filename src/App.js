import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navigation from './components/UI/Navigation'
import Routes from './routes'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
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
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="App">
        <Navigation />
        <Routes />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
