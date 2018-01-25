import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import './styles/studentSingle.css'

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
    const { batchNum, students } = this.props
    
    return(
      <article className="Student">
        <div>

            {students.length > 0 ? (
            <div>
            <h3 className="studentName"> {students[0].name} </h3>
            <p> Batch: {batchNum} </p>
            <img src={students[0].picture} alt='derp' />
            </div>
            
            ) : (
            <p> There are no students in this batch, please add them using the above button </p>
            )}


        </div>
      </article>
    )
  }
}

const mapStateToProps = ({ singleBatch }) => ({ singleBatch })


export default connect(mapStateToProps)(StudentSingle)