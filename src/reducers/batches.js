import { GRABBED_BATCHES, GRAB_BATCH } from '../actions/batches'


export default (currentState = [], {type, payload} = {}) => {
  switch(type){
    case  GRABBED_BATCHES:
      return [...payload]



    case  GRAB_BATCH :
    const batchIds = currentState.map(g => g._id)
      if (batchIds.indexOf(payload._id) < 0) {
        return [{ ...payload }]
    }
        return currentState.map((batch) => {
          if (batch._id === payload._id) {
        return { ...payload }
    }
        return batch
    })

    default :
      return currentState
  }
}
