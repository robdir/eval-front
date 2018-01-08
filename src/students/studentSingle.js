import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class StudentSingle extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    batchNum: PropTypes.number.isRequired,
    startsAt: PropTypes.instanceOf(Date).isRequired,
    endsAt: PropTypes.instanceOf(Date).isRequired,
    students: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      ratings: PropTypes.shape({
        colour: PropTypes.number.isRequired,
        comments: PropTypes.string,
        ratedAt: PropTypes.string
      })
    })
  }

  render() {
    const { students } = this.props

    return(
      <article className="Student">
      <div>
      <h3 className="studentName"> {students.map(i => i.name)} </h3>
      <div className="studentImage">
      <img alt="mug shot" src=""/>
      </div>
      </div>
      </article>
    )
  }
}

export default StudentSingle
