import React, { PureComponent } from 'react'
import { grabBatches } from '../actions/batches'
import { connect } from 'react-redux'
import StudentSingle from './studentSingle'

export class StudentsContainer extends PureComponent {
  componentWillMount() {
    this.props.grabBatches()
  }

  renderStudent(student, index) {
    return (
      <StudentSingle key={index} {...student} />
    )
  }

  render() {
    return(
      <div>
          <main>
            <div className="StudentsContainer">
              { this.props.batches.map(this.renderStudent) }
            </div>
          </main>
      </div>
      )
    }
  }

const mapStateToProps = ({ batches }) => ({ batches })
const mapDispatchToProps = { grabBatches }

export default connect(mapStateToProps, mapDispatchToProps)(StudentsContainer)

