import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import {deleteBatch} from '../actions/batches'

class DeleteBatchButton extends PureComponent {

deleteBatch = () => {
    const { deleteBatch, batch } = this.props
    deleteBatch(batch)
}

    render() {
        return(
            <div className='DeleteBatchButton'>
                <RaisedButton
                    label="Delete batch"
                    primary={true}
                    onClick={this.deleteBatch}
                    icon={<DeleteIcon/>} />
            </div>
        )
    }
}

const mapStateToProps = ({batches}) => ({batches})

export default connect(mapStateToProps, { deleteBatch })(DeleteBatchButton)