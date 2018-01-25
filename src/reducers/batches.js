import { GRABBED_BATCHES, CREATE_BATCH, DELETE_BATCH } from '../actions/batches'


export default (currentState = [], {type, payload} = {}) => {
  switch(type){
    case  GRABBED_BATCHES:
      return [...payload]

    case CREATE_BATCH:
      const newBatch = {...payload}
      return [newBatch].concat(currentState)

    case DELETE_BATCH:
      return currentState.filter((batch) => batch._id !== payload._id)

    default :
      return currentState
  }
}
