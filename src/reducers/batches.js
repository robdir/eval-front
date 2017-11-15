import { GRABBED_BATCHES } from '../actions/batches/grab'

export default (currentState = [], {type, payload} = {}) => {
  switch(type){
    case  GRABBED_BATCHES:
      return [...payload]

    default :
      return currentState
  }
}