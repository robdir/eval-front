import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class StudentSingle extends PureComponent {
  static propTypes = {
      _id: PropTypes.string.isRequired,
      batchId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      ratings: PropTypes.shape({
        colour: PropTypes.number.isRequired,
        comments: PropTypes.string,
        ratedAt: PropTypes.string
      })
    }

  render() {
    const { name, picture } = this.props

    return(
      <article className="Student">
      <div>
      <h3> {name} </h3>
      <div>
      <img alt="mug shot" src={require(`${picture}`)}/>
      </div>
      </div>
      </article>
    )
  }
}

export default StudentSingle
