import { GRABBED_BATCHES, GRAB_BATCH } from '../actions/batches'


export default (currentState = [], {type, payload} = {}) => {
  switch(type){
    case  GRABBED_BATCHES:
      return [...payload]

    case  GRAB_BATCH:
      return [...payload]

    default :
      return currentState
  }
}
