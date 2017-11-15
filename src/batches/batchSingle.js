import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './batchSingle.css'

class BatchSingle extends PureComponent {
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
    const { batchNum, startsAt, endsAt, students } = this.props

    return(
      <article className="Batch">
      <div>
      <h3> Batch Number: {batchNum} </h3>
      <ul>
      <p> Students: {students.length} </p>
      <p> Start Date: {startsAt} </p>
      <p> End Date: {endsAt} </p>
      </ul>
      <Link to="/"> View all students </Link>
      </div>
      </article>
    )
  }
}

export default BatchSingle
