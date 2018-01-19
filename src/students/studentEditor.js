import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Title from '../components/UI/Title'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const buttonStyle = {
    textAlign: 'centre'
}

const inputStyle = {
    color: 'Black'
}

class StudentEditor extends PureComponent {
    static propTypes = {
        createBatch: PropTypes.func.isRequired,
    }

    state = {}

    submitBatch(event) {
        event.preventDefault()
        const student = {
            name: this.refs.name.getValue(),
            picture: this.refs.picture.getValue(),
        }
        this.props.addStudent(student)
        this.refs.form.reset()
    }

    render() {
        return (
            <div className='batch_editor'>
                <h4> Add a new student to batch </h4>
                <form onSubmit={this.submitBatch.bind(this)} ref="form">
                    <div className='input'>
                        <TextField
                            id='name'
                            ref='name'
                            placeholder="Student Name"
                            inputStyle={inputStyle}
                        />
                    </div>
                    <div className='input'>
                        <TextField
                            id='picture'
                            ref='picture'
                            placeholder="Picture URL"
                            inputStyle={inputStyle}
                        />
                        </div>
                </form>
                    <RaisedButton
                        style={buttonStyle}
                        onClick={this.submitBatch.bind(this)}
                        label="Submit"
                        primary={true} />
            </div>
        )
    }
}

const mapStateToProps = ({ batchSingle }) => ({ batchSingle })

export default connect(mapStateToProps, { })(StudentEditor)