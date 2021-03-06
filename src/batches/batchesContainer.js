import React, { PureComponent } from 'react'
import { grabBatches } from '../actions/batches'
import { connect } from 'react-redux'
import BatchSingle from './batchSingle'
import Title from '../components/UI/Title'
import Draw from '../components/UI/DrawerBatch'
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
    const { batches } = this.props

    return(
        <div>
          {<br/>}
          <Draw/>
          <Title content="All Batches" />
          <main>
            < div className="BatchesContainer">
              { batches.map(this.renderBatch) }
            </div>
          </main>
        </div>
      )
  }
}

const mapStateToProps = ({ batches }) => ({ batches })

export default connect(mapStateToProps, {grabBatches})(BatchesContainer)
