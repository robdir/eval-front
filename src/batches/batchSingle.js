import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import RaisedButton from 'material-ui/RaisedButton'
import DeleteButton from '../components/DeleteBatchButton'
import './styles/batchSingle.css'

const style = {
  margin: 20,
};

class BatchSingle extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    batchNum: PropTypes.number.isRequired,
    startsAt: PropTypes.string.isRequired,
    endsAt: PropTypes.string.isRequired,
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

  viewBatch = batchId => event => {
    this.props.push(`/${batchId}`)
  }


  render() {
    const { batchNum, startsAt, endsAt, students, _id } = this.props

    return(
      <article className="Batch">
        <div className='batch_single'>
          <h3> Batch Number: {batchNum} </h3>
            <ul>
              <p> Students ({students.length}) : </p>
              <p> {students.map(i => i.name)} </p>
              <p> Start Date: {startsAt} </p>
              <p> End Date: {endsAt} </p>
              <RaisedButton
                label="Click to view students"
                style={style}
                onClick={this.viewBatch(_id)}
                primary={true} />
              <DeleteButton />
            </ul>
        </div>
      </article>
    )
  }
}


const mapStateToProps = ({ batches }) => ({ batches })

const mapDispatchToProps = { push }

export default connect(mapStateToProps, mapDispatchToProps)(BatchSingle)