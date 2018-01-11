import React, { PureComponent } from 'react'
import {grabBatch} from '../actions/batches'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import StudentSingle from './studentSingle'
import './styles/studentsContainer.css'

export class StudentsContainer extends PureComponent {
  static propTypes = {
    grabBatch: PropTypes.func.isRequired
  }

  componentDidMount() {
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
    const {batch} = this.props
  //  const currentBatch = batches.filter(i => i.student) hack for current batch

    return(
      <div>
          <main>
            <div className="StudentsContainer">
              <p>{console.log(batch)}</p>
              {this.props.match.params.batchId}
            </div>
          </main>
      </div>
      )
    }
  }

const mapStateToProps = ({ batches }, { match }) => {
  const batch = batches.filter((b) => (b._id === match.params.batchId))[0]
  console.log(batch)
    return {
      batch
  }
}


export default connect(mapStateToProps, { grabBatch })(StudentsContainer)


