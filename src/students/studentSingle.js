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
    // const { batchNum, students } = this.props
    
    return(
      <article className="Student">
      <div>
      <h3 className="studentName"> {} </h3>
      <p> Batch: {JSON.stringify(this.props.students)} </p>

      {/* {batches[0].students.map((item, index) =>
        <div key={index}>
        <img src={item.picture} alt="mug-shot"/>
        </div>
      )} */}

      </div>
      </article>
    )
  }
}

const mapStateToProps = ({ singleBatch }) => ({ singleBatch })


export default connect(mapStateToProps)(StudentSingle)