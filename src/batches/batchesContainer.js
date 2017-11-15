import React, { PureComponent } from 'react'
import { grabBatches } from '../actions/batches'
import { connect } from 'react-redux'
import BatchSingle from './batchSingle'

export class BatchesContainer extends PureComponent {
  componentWillMount() {
    this.props.grabBatches()
  }

  renderBatch(batch, index) {
    return (
      <BatchSingle key={index} {...batch} />
    )
  }

  render() {
    return(
        <div className="BatchesContainer">
          <main>
            { this.props.batches.map(this.renderBatch) }
          </main>
        </div>
      )
  }
}

const mapStateToProps = ({ batches }) => ({ batches })
const mapDispatchToProps = { grabBatches }

export default connect(mapStateToProps, mapDispatchToProps)(BatchesContainer)
