import React, { PureComponent } from 'react'
import {grabBatch} from '../actions/batches'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import StudentSingle from './studentSingle'
import Title from '../components/UI/Title'
import Draw from '../components/UI/DrawerStudent'
import './styles/studentsContainer.css'
import RaisedButton from 'material-ui/RaisedButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import { deleteBatch } from '../actions/batches'

export class StudentsContainer extends PureComponent {
  static propTypes = {
    grabBatch: PropTypes.func.isRequired,
    deleteBatch: PropTypes.func.isRequired
  }

  deleteBatch = () => {
    const { deleteBatch, singleBatch } = this.props
    deleteBatch(singleBatch)
  }

  componentWillMount() {
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
    const {singleBatch, deleteBatch} = this.props 
    return(
      <div>
          <main>
            {<br/>}
            <Draw />
            {<br/>}
              <div className='DeleteBatchButton'>
                <RaisedButton
                  label="Delete batch"
                  primary={true}
                  icon={<DeleteIcon />}
                  onClick={this.deleteBatch} />
              </div>
                <Title content='All students from batch' />
                  <div className="StudentsContainer">
                    {singleBatch.map(this.renderStudent)}
                  </div>
          </main>
      </div>
      )
    }
  }

const mapStateToProps = ({ singleBatch }, { match }) => ({singleBatch})


export default connect(mapStateToProps, { grabBatch, deleteBatch })(StudentsContainer)


