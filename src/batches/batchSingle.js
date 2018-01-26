import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import './styles/batchSingle.css'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 700,
    height: 100,
    marginleft: 50,
  },
  titleStyle: {
    color: 'black',
    fontSize: '30px',
  },
  subtitleStyle: {
    color: 'black',
  },
  button: {
    margin: 20
  }
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
    const {students, _id, startsAt, endsAt, batchNum} = this.props

    return(

      <div style={styles.root}
      className="batches">
      <Menu
        style={styles.gridList}
        menuItemStyle={styles.subtitleStyle}
      >
        <MenuItem
          className='menuBatch'
          primaryText={"Batch " + batchNum}
          secondaryText={<span> 
            {"Starts at: " + startsAt
            + " / Ends at: " + endsAt
            + " / No. of students: " + students.length}
            </span> } 
          onClick={this.viewBatch(_id)}
          />
      </Menu>
      </div>
    )
  }
}


const mapStateToProps = ({ batches }) => ({ batches })

const mapDispatchToProps = { push }

export default connect(mapStateToProps, mapDispatchToProps)(BatchSingle)