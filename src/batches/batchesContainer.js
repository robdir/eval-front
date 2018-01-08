import React, { PureComponent } from 'react'
import { grabBatches } from '../actions/batches'
import { connect } from 'react-redux'
import BatchSingle from './batchSingle'
import './styles/batchesContainer.css'

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
        <div>
          <main>
            < div className="BatchesContainer">
              { this.props.batches.map(this.renderBatch) }
            </div>
          </main>
        </div>
      )
  }
}

const mapStateToProps = ({ batches }) => ({ batches })
const mapDispatchToProps = { grabBatches }

export default connect(mapStateToProps, mapDispatchToProps)(BatchesContainer)
