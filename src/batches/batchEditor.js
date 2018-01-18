import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { CREATE_BATCH } from '../actions/batches'
import PropTypes from 'prop-types'
import Title from '../components/UI/Title'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const buttonStyle={
    float: 'right'
}

class BatchEditor extends PureComponent {
    static propTypes = {
        CREATE_BATCH: PropTypes.func.isRequired,
    }

    state = {} // necessary?

    submitBatch(event) {
        event.preventDefault()
        const batch = {
            batchNum: this.refs.batchNum.getValue(),
            startDate: this.refs.startDate.getValue(),
            endDate: this.refs.endDate.getValue(),
        }
        this.props.CREATE_BATCH(batch)
        this.refs.form.requestFullscreen()
    }

    render() {
        return(
            <div className='batch_editor'>
                <Title content="Add a new batch" />
                    <form onSubmit={this.submitBatch.bind(this)} ref="form">
                        <div className='input'>
                            <TextField ref='batchNum' type='number' placeholder='Batch Number'/>
                        </div>
                        <div className='input'>
                            <p> Start Date: </p>
                            <TextField ref='startDate' type='date'/>
                        </div>
                        <div className='input'>
                            <p> End Date: </p>
                            <TextField ref='endDate' type='date' />
                        </div>
                    </form>
                    <RaisedButton
                        style={buttonStyle}
                        onClick={ this.submitBatch.bind(this)}
                        label="Add batch"
                        primary={true}/>
            </div>
        )
    }
}

const mapStateToProps = ({ batches }) => ({ batches })

export default connect(mapStateToProps, { CREATE_BATCH })(BatchEditor)