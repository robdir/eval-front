import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import {
  SignUp,
  SignIn
} from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      </div>
    )
  }
}
