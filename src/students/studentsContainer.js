import React, { PureComponent } from 'react'
import { grabBatches } from '../actions/batches'
import { connect } from 'react-redux'
import StudentSingle from './studentSingle'
import './styles/studentsContainer.css'

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
    const {batches, _id} = this.props

    return(
      <div>
          <main>
            <div className="StudentsContainer">
              {batches.map(this.renderStudent)}
               {this.props.match.params.batchId}
            </div>
          </main>
      </div>
      )
    }
  }

const mapStateToProps = ({ batches }) => ({ batches })

const mapDispatchToProps = { grabBatches }

export default connect(mapStateToProps, mapDispatchToProps)(StudentsContainer)


