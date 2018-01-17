import ApiClient from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const GRABBED_BATCHES = 'GRABBED_BATCHES'
export const GRAB_BATCH = 'GRAB_BATCH'

const api = new ApiClient()

export default () => {
  return dispatch => {
    dispatch({ type: APP_LOADING })

    api.get('/batches')
      .then(res => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })
        dispatch({ type: GRABBED_BATCHES, payload: res.body })
      })
      .catch(error => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}

export const grabBatch = (batchId) => {
  return dispatch => {
    dispatch({ type: APP_LOADING })
    api.get(`/${batchId}`)
      .then((result) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })
        dispatch({
          type: GRAB_BATCH,
          payload: result.body
        })
      })
      .catch((error) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}