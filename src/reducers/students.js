import { FETCH_STUDENTS } from '../actions/students'

export default (currentState = [], {type, payload} = {}) => {
  switch(type){
    case  FETCH_STUDENTS:
      return [...payload]

    default :
      return currentState
  }
}
