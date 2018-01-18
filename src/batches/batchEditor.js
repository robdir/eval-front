import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { CREATE_BATCH } from '../actions/batches'
import PropTypes from 'prop-types'
import Title from '../components/UI/Title'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

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
            <Title content="Add a new batch" />
        )
    }
}