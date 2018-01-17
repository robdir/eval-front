import React, { PureComponent } from 'react'
import {grabBatch} from '../actions/batches'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import StudentSingle from './studentSingle'
import './styles/studentsContainer.css'

export class StudentsContainer extends PureComponent {
  static propTypes = {
    grabBatch: PropTypes.func.isRequired,
  }

  componentWillMount() {
    const { batchId } = this.props.match.params
    const { grabBatch } = this.props
    grabBatch(batchId)
  }

  renderStudent(student, index) {
    return (
      <StudentSingle key={index} {...student} />
    )
  }

  render() {
    const {singleBatch} = this.props 

    return(
      <div>
          <main>
            <div className="StudentsContainer">
            {singleBatch.map(this.renderStudent)}
            </div>
          </main>
      </div>
      )
    }
  }

const mapStateToProps = ({ singleBatch }, { match }) => ({singleBatch})


export default connect(mapStateToProps, { grabBatch })(StudentsContainer)


