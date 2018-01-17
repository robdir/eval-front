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
    console.log('yo')
  }

  renderStudent(student, index) {
    return (
      <StudentSingle key={index} {...student} />
    )
  }

  render() {
    const {batches} = this.props 
    if (!batches) {return null} 

    return(
      <div>
          <main>
            <div className="StudentsContainer">
            {batches.map(this.renderStudent)}
            {console.log(batches)}
            </div>
          </main>
      </div>
      )
    }
  }

const mapStateToProps = ({ batches }, { match }) => ({batches})


export default connect(mapStateToProps, { grabBatch })(StudentsContainer)


