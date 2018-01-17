import { GRAB_BATCH } from '../actions/batches'


export default (currentState = [], { type, payload } = {}) => {
    switch (type) {

        case GRAB_BATCH:
        return payload

        default:
            return currentState
    }
}