import { GRABBED_BATCHES, CREATE_BATCH } from '../actions/batches'


export default (currentState = [], {type, payload} = {}) => {
  switch(type){
    case  GRABBED_BATCHES:
      return [...payload]

    case 

    default :
      return currentState
  }
}
