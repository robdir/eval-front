import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import BatchesContainer from './batches/batchesContainer'
import StudentsContainer from './students/studentsContainer'

import {
  SignUp,
  SignIn
} from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
      <Route exact path="/" component={BatchesContainer} />
      <Route exact path="/students" component={StudentsContainer} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      </div>
    )
  }
}
