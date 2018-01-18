import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { createBatch } from '../actions/batches'
import PropTypes from 'prop-types'
import Title from '../components/UI/Title'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import './styles/batchEditor.css'

const buttonStyle={
    textAlign: 'centre'
}

const inputStyle={
    color: 'Black'
}

class BatchEditor extends PureComponent {
    static propTypes = {
        createBatch: PropTypes.func.isRequired,
    }

    state = {} // necessary?

    submitBatch(event) {
        event.preventDefault()
        const batch = {
            batchNum: this.refs.batchNum.getValue(),
            startDate: this.refs.startDate.getValue(),
            endDate: this.refs.endDate.getValue(),
        }
        this.props.createBatch(batch)
        this.refs.form.reset()
    }

    render() {
        return(
            <div className='batch_editor'>
                <Title content="Add a new batch" />
                    <form onSubmit={this.submitBatch.bind(this)} ref="form">
                        <div className='input'>
                            <TextField
                             ref='batchNum' 
                             type='number'
                             placeholder="Batch Number"
                             inputStyle={inputStyle}
                             />
                        </div>
                        <div className='input'>
                            <p> Start Date: </p>
                            <TextField
                            ref='startDate'
                            type='date'
                            inputStyle={inputStyle}
                            />
                        </div>
                        <div className='input'>
                            <p> End Date: </p>
                            <TextField
                             ref='endDate'
                             type='date'
                             inputStyle={inputStyle}
                             />
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

export default connect(mapStateToProps, { createBatch })(BatchEditor)