import { GRABBED_BATCHES, FETCH_STUDENTS } from '../actions/batches'

export default (currentState = [], {type, payload} = {}) => {
  switch(type){
    case  GRABBED_BATCHES:
      return [...payload]

    case  FETCH_STUDENTS:
      return { ...payload.batch, students: [payload.students] }

    default :
      return currentState
  }
}
