import React, { PureComponent } from 'react'
import { grabBatches } from '../actions/batches'
import { connect } from 'react-redux'
import StudentSingle from './studentSingle'
import './styles/studentsContainer.css'

export class StudentsContainer extends PureComponent {
  componentWillMount() {
    this.props.grabBatches()
    const batchId = this.props.match.params.batchId
  }

  renderStudent(student, index) {
    return (
      <StudentSingle key={index} {...student} />
    )
  }

  render() {
    const {batches} = this.props

    return(
      <div>
          <main>
            <div className="StudentsContainer">
              { batches.map(this.renderStudent) }
            </div>
          </main>
      </div>
      )
    }
  }

const mapStateToProps = ({ batches }, { match }) => {
  const students = batches.map( i => i.students )
    const student = students.reduce((prev, next) => {
    if (next._id === match.params.batchId) {
      return next
    }
    return prev
  }, {})

  return {
    student
  }
}

// const mapStateToProps = ({ batches }) => ({ batches })

const mapDispatchToProps = { grabBatches }

export default connect(mapStateToProps, mapDispatchToProps)(StudentsContainer)

