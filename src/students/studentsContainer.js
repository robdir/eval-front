import React, { PureComponent } from 'react'
import { fetchStudents } from '../actions/batches'
import { connect } from 'react-redux'
import StudentSingle from './studentSingle'

export class StudentsContainer extends PureComponent {
  componentWillMount() {
    this.props.fetchStudents()
  }

  renderStudent(student, index) {
    return (
      <StudentSingle key={index} {...student} />
    )
  }

  render() {
    return(
        <div className="StudentsContainer">
          <main>
            { this.props.students.map(this.renderStudent) }
          </main>
        </div>
      )
    }
  }

const mapStateToProps = ({ batches }) => ({ batches })
const mapDispatchToProps = { fetchStudents }

export default connect(mapStateToProps, mapDispatchToProps)(StudentsContainer)
